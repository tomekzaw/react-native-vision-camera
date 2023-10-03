//
//  FrameProcessorContext.h
//  VisionCamera
//
//  Created by Marc Rousavy on 13.07.23.
//  Copyright © 2023 mrousavy. All rights reserved.
//

#pragma once

#import "Frame.h"
#import <AVFoundation/AVFoundation.h>
#import <Foundation/Foundation.h>

#ifdef __cplusplus
#import "FrameHostObject.h"
#import <RNReanimated/WorkletRuntime.h>
#import <jsi/jsi.h>
#import <memory.h>
#endif

@interface FrameProcessor : NSObject

#ifdef __cplusplus
- (instancetype _Nonnull)initWithWorklet:(std::shared_ptr<reanimated::ShareableWorklet>)worklet
                                 context:(std::shared_ptr<reanimated::WorkletRuntime>)workletRuntime;

- (void)callWithFrameHostObject:(std::shared_ptr<FrameHostObject>)frameHostObject;
#endif

- (void)call:(Frame* _Nonnull)frame;

@end
