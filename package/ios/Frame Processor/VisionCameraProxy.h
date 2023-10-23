//
//  VisionCameraProxy.h
//  VisionCamera
//
//  Created by Marc Rousavy on 20.07.23.
//  Copyright © 2023 mrousavy. All rights reserved.
//

#pragma once

#import <Foundation/Foundation.h>
#import <React/RCTBridge.h>

#ifdef __cplusplus
#import <RNReanimated/WorkletRuntime.h>
#import <ReactCommon/CallInvoker.h>
#import <jsi/jsi.h>

using namespace facebook;

class VisionCameraProxy : public jsi::HostObject {
public:
  explicit VisionCameraProxy(jsi::Runtime& runtime, std::shared_ptr<react::CallInvoker> callInvoker);
  ~VisionCameraProxy();

public:
  std::vector<jsi::PropNameID> getPropertyNames(jsi::Runtime& runtime) override;
  jsi::Value get(jsi::Runtime& runtime, const jsi::PropNameID& name) override;

private:
  void setFrameProcessor(jsi::Runtime& runtime, int viewTag, const std::string &frameProcessorType, const std::shared_ptr<reanimated::ShareableWorklet> &worklet, const std::shared_ptr<reanimated::WorkletRuntime> &workletRuntime);
  void removeFrameProcessor(jsi::Runtime& runtime, int viewTag);
  jsi::Value initFrameProcessorPlugin(jsi::Runtime& runtime, std::string name, const jsi::Object& options);

private:
  std::shared_ptr<reanimated::WorkletRuntime> _workletRuntime;
  std::shared_ptr<react::CallInvoker> _callInvoker;
  jsi::Runtime &_rnRuntime;
};
#endif

@interface VisionCameraInstaller : NSObject
+ (BOOL)installToBridge:(RCTBridge* _Nonnull)bridge;
@end
