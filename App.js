import React, {
  useMemo,
} from 'react';
import {
  PanGestureHandler,
} from 'react-native-gesture-handler';
import {
  Animated,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

export default () => {
  const dragX = useMemo(() => new Animated.Value(0), []);

  const onGestureEvent = useMemo(() => Animated.event(
    [{ nativeEvent: { translationX: dragX } }],
    { useNativeDriver: true },
  ), [dragX]);

  return (
    <>
      <PanGestureHandler
        activeOffsetX={8}
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={() => {}}
      >
        <Animated.View />
      </PanGestureHandler>
      <RNCamera
        captureAudio={false}
        style={{ flex: 1 }}
      />
    </>
  );
};
