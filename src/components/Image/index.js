import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import { Image as ImageWithCache } from 'react-native-expo-image-cache';
//import { getComponentKey } from '../../utils/random';
const preview = {
  uri:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
};

class ImageComponent extends PureComponent {
  render() {
    const { uri } = this.props;
    if (!uri) {
      return null;
    }
    const remoteFile = uri.startsWith('http') ? true : false;
    if (remoteFile) {
      return (
        <ImageWithCache
          //key={() => getComponentKey()}
          {...this.props}
          {...{ preview, uri: uri }}
        />
      );
    } else {
      return (
        <Image
          //key={() => getComponentKey()}
          {...this.props}
          source={{ uri: uri }}
        />
      );
    }
  }
}
export default ImageComponent;
