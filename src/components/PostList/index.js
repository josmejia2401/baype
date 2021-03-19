import * as React from 'react';
import { FlatList, View, StyleSheet, RefreshControl } from 'react-native';
//Componentes
import PostItem from '../PostItem/index';
//Utilidades
import { getDimentions } from '../../utils/dimensions';
import { getComponentKey } from '../../utils/random';

class Container extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: false,
      currentIndex: 0,
    };
  }

  componentDidMount() {
    const { onLoad } = this.props;
    if (onLoad) {
      onLoad();
    }
    this.loadData();
  }

  loadData = () => {
    const items = [
      {
        id: 1,
        title:
          'flexDirection: If you want to move horizontally (row) or vertically (column)',
        createdAt: new Date(),
        username: 'username',
        files: [
          {
            id: 11,
            uri:
              'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg',
          },
          {
            id: 12,
            uri: 'https://stream-5.zonarutoppuden.tv/ns-sub/1.mp4',
          },
          {
            id: 13,
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          },
        ],
      },
      {
        id: 2,
        title:
          'This Gig Take a glance at the showcase of our artistic work: Modern and Trendy Logo Artworkslkjfkljf ksnfksfnsf Mascot & Custom Logo efdfg Artworks:lk knnk Explore the ultimate Experience..! To fulfill your designing needs, Make us Graphically Yours...!! Why Team StrideInIt? We believe in our',
        username: 'username',
        createdAt: new Date(),
        files: [
          {
            id: 21,
            uri: 'https://stream-5.zonarutoppuden.tv/ns-sub/1.mp4',
          },
          {
            id: 22,
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          },
        ],
      },
    ];
    this.setState({ items: items });
  };

  _handleOnRefresh() {}

  _handleLoadMore = (e) => {};

  _onViewableItemsChanged = ({ viewableItems, changed }) => {
    this._handleOnRefreshItem(viewableItems);
  };

  _handleOnRefreshItem = async (data) => {
    if (data && data.length > 0) {
      const currentData = data[0];
      this.setState({ currentIndex: currentData.index });
    } else {
      this.setState({ currentIndex: -1 });
    }
  };

  _onViewableItemsChanged = ({ viewableItems, changed }) => {
    if (viewableItems && viewableItems.length > 0) {
      const index = viewableItems.length > 1 ? 1 : 0;
      const currentData = viewableItems[index];
      this.setState({ currentIndex: currentData.index });
    } else {
      this.setState({ currentIndex: -1 });
    }
  };

  render() {
    const { username } = this.props;
    const totalItemWidth = getDimentions().width;
    return (
      <View style={styles.container}>
        <FlatList
          key={() => getComponentKey()}
          data={this.state.items}
          renderItem={({ item, index }) => {
            return (
              <PostItem
                files={item.files}
                title={item.title}
                username={item.username}
                createdAt={item.createdAt}
                shouldPlayParent={this.state.currentIndex === index}></PostItem>
            );
          }}
          refreshControl={
            <RefreshControl
              key={() => getComponentKey()}
              colors={['#9Bd35A', '#689F38']}
              refreshing={this.state.loading}
              onRefresh={this._handleOnRefresh}
            />
          }
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod={50}
          initialNumberToRender={10}
          windowSize={21}
          initialScrollIndex={0}
          onScrollToIndexFailed={() => {}}
          onEndReachedThreshold={0.5}
          onEndReached={this._handleLoadMore}
          keyboardShouldPersistTaps="always"
          onViewableItemsChanged={this._onViewableItemsChanged}
          viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: getDimentions().widthWithoutMargin,
  },
});

export default Container;
