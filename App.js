import React from 'react';
import { Asset } from 'expo-asset';
import SplashScreen from './src/modules/splash/';
import MainTab from './src/tabs/main/';


export default class App extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {}

  render() {
    if (!this.state.isReady) {
      return (
        <SplashScreen onLoad={this._cacheResourcesAsync.bind(this)}/>
      );
    }
    return (
      <MainTab onLoad={this._cacheResourcesAsync.bind(this)}/>
    );
  }

  _cacheSplashResourcesAsync = async () => {
    const gif = require('./assets/images/favicon.png');
    return Asset.fromModule(gif).downloadAsync();
  };

  _cacheResourcesAsync = async () => {
    try {
      await new Promise(r => setTimeout(r, 2000));
      const images = [require('./assets/images/favicon.png'),];
      const cacheImages = images.map(image => {
        return Asset.fromModule(image).downloadAsync();
      });
      await Promise.all(cacheImages);
    } catch (e) {
      console.warn(e);
    } finally {
      this.setState({ isReady: true });
    }
  };
}