import React from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import ResourcePostComponent from '../../components/resourcePost';
import { getComponentKey } from '../../utils/random';

import styles from './style';

const Presenter = (props) => {
  const { state, _onViewableItemsChanged, _handleLoadMore, _handleOnRefresh } = props;
  const { images, dimentions, loading } = state;
  //const totalItemWidth = dimentions.width;

  return (
    <View style={styles.container}>
      <FlatList
        key={  getComponentKey }
        data={images}
        renderItem={({item}) => {
          return (
            <ResourcePostComponent {...props} items={item.items} title={item.title} username={item.username} createdAt={item.createdAt}></ResourcePostComponent>
          );
        }}
        refreshControl={
          <RefreshControl
            colors={['#9Bd35A', '#689F38']}
            refreshing={loading}
            onRefresh={_handleOnRefresh}
          />
        }
        showsVerticalScrollIndicator={false}
        //snapToInterval={totalItemWidth}
        //bounces={false}
        //decelerationRate='fast'
        //getItemLayout={(data, index) => ({ length: totalItemWidth, offset: totalItemWidth * index, index, })}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        initialNumberToRender={10}
        windowSize={21}
        initialScrollIndex={0}
        onScrollToIndexFailed={() => { }}
        onEndReachedThreshold={0.5}
        onEndReached={_handleLoadMore}
        keyboardShouldPersistTaps='always'
        onViewableItemsChanged={_onViewableItemsChanged}
        //viewabilityConfig={{ itemVisiblePercentThreshold: 50  }}
      />
    </View>
  );
}

export default Presenter;