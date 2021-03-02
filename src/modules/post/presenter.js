import React from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import ResourcePostComponent from '../../components/resourcePost';
import { getComponentKey } from '../../utils/random';

import styles from './style';

const Presenter = (props) => {
  const { state, _onViewableItemsChanged, _handleLoadMore, _handleOnRefresh } = props;
  const { images, loading, currentIndex } = state;
  return (
    <View style={styles.container}>
      <FlatList
        key={  () => getComponentKey() }
        data={images}
        renderItem={({item, index}) => {
          return (
            <ResourcePostComponent 
              items={item.items} 
              currentIndexParent={currentIndex} 
              title={item.title} 
              username={item.username} 
              createdAt={item.createdAt}
              shouldPlayParent={currentIndex === index}
            >
            </ResourcePostComponent>
          );
        }}
        refreshControl={
          <RefreshControl
            key={ () => getComponentKey() }
            colors={['#9Bd35A', '#689F38']}
            refreshing={loading}
            onRefresh={_handleOnRefresh}
          /> 
        }
        showsVerticalScrollIndicator={false}
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
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      />
    </View>
  );
}

export default Presenter;