import React from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import ProductListComponent from '../../components/ProductList/index';

import styles from './style';

const Presenter = (props) => {
  const { state } = props;
  return (
    <View style={styles.container}>
      <ProductListComponent></ProductListComponent>
    </View>
  );
};

export default Presenter;
