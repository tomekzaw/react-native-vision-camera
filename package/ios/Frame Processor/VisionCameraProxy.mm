//
//  VisionCameraProxy.mm
//  VisionCamera
//
//  Created by Marc Rousavy on 20.07.23.
//  Copyright © 2023 mrousavy. All rights reserved.
//

#import "VisionCameraProxy.h"
#import <Foundation/Foundation.h>
#import <jsi/jsi.h>

#import "../../cpp/JSITypedArray.h"
#import "FrameHostObject.h"
#import "FrameProcessor.h"
#import "FrameProcessorPluginHostObject.h"
#import "FrameProcessorPluginRegistry.h"
#import "JSINSObjectConversion.h"

#import <React/RCTBridge+Private.h>
#import <React/RCTBridge.h>
#import <React/RCTUIManager.h>
#import <React/RCTUtils.h>
#import <ReactCommon/RCTTurboModuleManager.h>

// Swift forward-declarations
__attribute__((objc_runtime_name("_TtC12VisionCamera12CameraQueues")))
@interface CameraQueues : NSObject
@property(nonatomic, class, readonly, strong) dispatch_queue_t _Nonnull videoQueue;
@end

__attribute__((objc_runtime_name("_TtC12VisionCamera10CameraView")))
@interface CameraView : UIView
@property(nonatomic, copy) FrameProcessor* _Nullable frameProcessor;
@end

using namespace facebook;

VisionCameraProxy::VisionCameraProxy(jsi::Runtime& runtime, std::shared_ptr<react::CallInvoker> callInvoker) : _rnRuntime(runtime) {
  NSLog(@"VisionCameraProxy: Created!");
}

VisionCameraProxy::~VisionCameraProxy() {
  NSLog(@"VisionCameraProxy: Destroying context...");
  // Destroy ArrayBuffer cache for both the JS and the Worklet Runtime.
  vision::invalidateArrayBufferCache(_rnRuntime);
  if (_workletRuntime != nullptr) {
    vision::invalidateArrayBufferCache(_workletRuntime->getJSIRuntime());
  }
}

std::vector<jsi::PropNameID> VisionCameraProxy::getPropertyNames(jsi::Runtime& runtime) {
  std::vector<jsi::PropNameID> result;
  result.push_back(jsi::PropNameID::forUtf8(runtime, std::string("setFrameProcessor")));
  result.push_back(jsi::PropNameID::forUtf8(runtime, std::string("removeFrameProcessor")));
  result.push_back(jsi::PropNameID::forUtf8(runtime, std::string("getFrameProcessorPlugin")));
  return result;
}

void VisionCameraProxy::setFrameProcessor(jsi::Runtime& runtime, int viewTag, const std::string &frameProcessorType, const std::shared_ptr<reanimated::ShareableWorklet> &worklet, const std::shared_ptr<reanimated::WorkletRuntime> &workletRuntime) {
  _workletRuntime = workletRuntime;

  RCTExecuteOnMainQueue([=] {
    auto currentBridge = [RCTBridge currentBridge];
    auto anonymousView = [currentBridge.uiManager viewForReactTag:[NSNumber numberWithDouble:viewTag]];
    auto view = static_cast<CameraView*>(anonymousView);
    if (frameProcessorType == "frame-processor") {
      view.frameProcessor = [[FrameProcessor alloc] initWithWorklet:worklet context:_workletRuntime];
    } else {
      throw std::runtime_error("Unknown FrameProcessor.type passed! Received: " + frameProcessorType);
    }
  });
}

void VisionCameraProxy::removeFrameProcessor(jsi::Runtime& runtime, int viewTag) {
  RCTExecuteOnMainQueue(^{
    auto currentBridge = [RCTBridge currentBridge];
    auto anonymousView = [currentBridge.uiManager viewForReactTag:[NSNumber numberWithDouble:viewTag]];
    auto view = static_cast<CameraView*>(anonymousView);
    view.frameProcessor = nil;
  });
}

jsi::Value VisionCameraProxy::getFrameProcessorPlugin(jsi::Runtime& runtime, std::string name, const jsi::Object& options) {
  NSString* key = [NSString stringWithUTF8String:name.c_str()];
  NSDictionary* optionsObjc = JSINSObjectConversion::convertJSIObjectToNSDictionary(runtime, options, _callInvoker);
  FrameProcessorPlugin* plugin = [FrameProcessorPluginRegistry getPlugin:key withOptions:optionsObjc];
  if (plugin == nil) {
    return jsi::Value::undefined();
  }

  auto pluginHostObject = std::make_shared<FrameProcessorPluginHostObject>(plugin, _callInvoker);
  return jsi::Object::createFromHostObject(runtime, pluginHostObject);
}

jsi::Value VisionCameraProxy::get(jsi::Runtime& runtime, const jsi::PropNameID& propName) {
  auto name = propName.utf8(runtime);

  if (name == "setFrameProcessor") {
    return jsi::Function::createFromHostFunction(
        runtime, jsi::PropNameID::forUtf8(runtime, "setFrameProcessor"), 1,
        [this](jsi::Runtime& runtime, const jsi::Value& thisValue, const jsi::Value* arguments, size_t count) -> jsi::Value {
          auto viewTag = static_cast<int>(arguments[0].asNumber());
          auto frameProcessorType = arguments[1].asString(runtime).utf8(runtime);
          auto worklet = reanimated::extractShareableOrThrow<reanimated::ShareableWorklet>(runtime, arguments[2]);
          auto workletRuntime = reanimated::extractWorkletRuntime(runtime, arguments[3]);
          this->setFrameProcessor(runtime, viewTag, frameProcessorType, worklet, workletRuntime);
          return jsi::Value::undefined();
        });
  }
  if (name == "removeFrameProcessor") {
    return jsi::Function::createFromHostFunction(
        runtime, jsi::PropNameID::forUtf8(runtime, "removeFrameProcessor"), 1,
        [this](jsi::Runtime& runtime, const jsi::Value& thisValue, const jsi::Value* arguments, size_t count) -> jsi::Value {
          auto viewTag = arguments[0].asNumber();
          this->removeFrameProcessor(runtime, static_cast<int>(viewTag));
          return jsi::Value::undefined();
        });
  }
  if (name == "getFrameProcessorPlugin") {
    return jsi::Function::createFromHostFunction(
        runtime, jsi::PropNameID::forUtf8(runtime, "getFrameProcessorPlugin"), 1,
        [this](jsi::Runtime& runtime, const jsi::Value& thisValue, const jsi::Value* arguments, size_t count) -> jsi::Value {
          if (count < 1 || !arguments[0].isString()) {
            throw jsi::JSError(runtime, "First argument needs to be a string (pluginName)!");
          }
          auto pluginName = arguments[0].asString(runtime).utf8(runtime);
          auto options = count > 1 ? arguments[1].asObject(runtime) : jsi::Object(runtime);

          return this->getFrameProcessorPlugin(runtime, pluginName, options);
        });
  }

  return jsi::Value::undefined();
}

@implementation VisionCameraInstaller
+ (BOOL)installToBridge:(RCTBridge* _Nonnull)bridge {
  RCTCxxBridge* cxxBridge = (RCTCxxBridge*)[RCTBridge currentBridge];
  if (!cxxBridge.runtime) {
    return NO;
  }

  jsi::Runtime& runtime = *(jsi::Runtime*)cxxBridge.runtime;

  // global.VisionCameraProxy
  auto visionCameraProxy = std::make_shared<VisionCameraProxy>(runtime, bridge.jsCallInvoker);
  runtime.global().setProperty(runtime, "VisionCameraProxy", jsi::Object::createFromHostObject(runtime, visionCameraProxy));

  return YES;
}
@end
