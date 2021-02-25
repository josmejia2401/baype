import React from 'react';
import { View, FlatList } from 'react-native';
import ResourcePostComponent from '../../components/resourcePost';
import styles from './style';

const Presenter = (props) => {
  const { state } = props;
  const { images } = state;
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={images}
        renderItem={({item}) => {
          return (
            <ResourcePostComponent {...props} items={item.items} title={item.title}></ResourcePostComponent>
          );
        }}
      />
    </View>
  );
}

export default Presenter;