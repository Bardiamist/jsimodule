import React from 'react';
import { RNCamera } from 'react-native-camera';

export default () => (
  <RNCamera
    captureAudio={false}
    style={{ flex: 1 }}
  />
);
