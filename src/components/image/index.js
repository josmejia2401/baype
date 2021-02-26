import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import { Image as ImageWithCache } from 'react-native-expo-image-cache';
import { getRandom } from '../../utils/random';
//se usa
const preview = {
  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
};

class ImageComponent extends PureComponent {
  render() {
    const { uri } = this.props;
    if (!uri) {
        return null;
    }
    const remoteFile = uri.startsWith('http') ? true : false;
    if (remoteFile) {
      return (<ImageWithCache key={ () => getRandom() } {...this.props} {...{ preview, uri: uri } } />);
    } else {
      return (<Image key={ () => getRandom() } {...this.props} source={{ uri: uri }} />);
    }
  }
}
export default ImageComponent;
