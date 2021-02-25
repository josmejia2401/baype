import React from 'react';
import { Image, View } from 'react-native';
//import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import SplashScreen from './src/modules/splash/';
import MainScreen from './src/modules/main/';


export default class App extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    //SplashScreen.preventAutoHideAsync();
    //this._cacheResourcesAsync();
  }

  render() {
    if (!this.state.isReady) {
      return (
        <SplashScreen onLoad={this._cacheResourcesAsync.bind(this)}/>
      );
    }
    return (
      <MainScreen onLoad={this._cacheResourcesAsync.bind(this)}/>
    );
  }

  /*<View style={{ flex: 1 }}><Image source={require('./assets/images/favicon.png')} /><Image source={require('./assets/images/favicon.png')} /></View>*/
  _cacheSplashResourcesAsync = async () => {
    const gif = require('./assets/images/favicon.png');
    return Asset.fromModule(gif).downloadAsync();
  };

  _cacheResourcesAsync = async () => {
    //SplashScreen.hideAsync();
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

/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
