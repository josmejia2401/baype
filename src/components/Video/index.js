import React, { PureComponent } from 'react';
//import { AsyncStorage } from 'react-native';
import { Video } from 'expo-av';
import { getComponentKey } from '../../utils/random';

class VideoComponent extends PureComponent {
  render() {
    const { source } = this.props;
    if (!source) {
      return null;
    }
    return <Video {...this.props} />;
  }
}
export default VideoComponent;
