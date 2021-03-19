import React from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import MapComponent from '../../components/Map/index';

import styles from './style';

const Presenter = (props) => {
  const { state } = props;
  return (
    <View style={styles.container}>
      <MapComponent></MapComponent>
    </View>
  );
};

export default Presenter;
