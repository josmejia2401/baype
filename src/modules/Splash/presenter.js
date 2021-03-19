import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import styles from './style';

const SplashScreen = (props) => (
  <View style={styles.container}>
    <ActivityIndicator />
    <StatusBar barStyle="default" />
  </View>
);

export default SplashScreen;
