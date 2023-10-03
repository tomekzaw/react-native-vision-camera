//
//  FrameProcessor.mm
//  VisionCamera
//
//  Created by Marc Rousavy on 13.07.23.
//  Copyright © 2023 mrousavy. All rights reserved.
//

#import "FrameProcessor.h"
#import <Foundation/Foundation.h>

#import "FrameHostObject.h"
#import <RNReanimated/WorkletRuntime.h>
#import <jsi/jsi.h>
#import <memory>

using namespace facebook;

@implementation FrameProcessor {
  std::shared_ptr<reanimated::WorkletRuntime> _workletRuntime;
  std::shared_ptr<reanimated::ShareableWorklet> _worklet;
}

- (instancetype)initWithWorklet:(std::shared_ptr<reanimated::ShareableWorklet>)worklet
                        context:(std::shared_ptr<reanimated::WorkletRuntime>)workletRuntime {
  if (self = [super init]) {
    _worklet = worklet;
    _workletRuntime = workletRuntime;
  }
  return self;
}

- (void)callWithFrameHostObject:(std::shared_ptr<FrameHostObject>)frameHostObject {
  // Call the Frame Processor on the Worklet Runtime
  assert(_workletRuntime != nullptr);
  jsi::Runtime& runtime = _workletRuntime->getJSIRuntime();

  try {
    // Wrap HostObject as JSI Value
    auto argument = jsi::Object::createFromHostObject(runtime, frameHostObject);
      
    // Call the Worklet with the Frame JS Host Object as an argument
    _workletRuntime->runGuarded(_worklet, argument);
  } catch (jsi::JSError& jsError) {
    // JS Error occured, print it to console.
    auto message = jsError.getMessage();

//    _workletContext->invokeOnJsThread([message](jsi::Runtime& jsRuntime) {
//      auto logFn = jsRuntime.global().getPropertyAsObject(jsRuntime, "console").getPropertyAsFunction(jsRuntime, "error");
//      logFn.call(jsRuntime, jsi::String::createFromUtf8(jsRuntime, "Frame Processor threw an error: " + message));
//    });
  }
}

- (void)call:(Frame* _Nonnull)frame {
  // Create the Frame Host Object wrapping the internal Frame
  auto frameHostObject = std::make_shared<FrameHostObject>(frame);
  [self callWithFrameHostObject:frameHostObject];
}

@end
