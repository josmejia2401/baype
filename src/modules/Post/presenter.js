import React from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import PostListComponent from '../../components/PostList/index';

import styles from './style';

const Presenter = (props) => {
  const { state } = props;
  return (
    <View style={styles.container}>
      <PostListComponent></PostListComponent>
    </View>
  );
};

export default Presenter;
