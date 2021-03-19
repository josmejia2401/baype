import * as React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
//import { Video } from 'expo-av';
//Componentes
import AvatarWithUsernameComponent from '../../components/AvatarWithUsername';
import SeparatorComponent from '../Separator';
import VideoComponent from '../Video/index';
import ImageComponent from '../Image/index';
import PostLikeComponent from '../PostLike';
//Utilidades
import { getDimentions } from '../../utils/dimensions';
import { getComponentKey } from '../../utils/random';
import { isImage } from '../../utils/file';

class Container extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      textShown: false,
      numLines: 1,
      showMoreButton: false,
      currentIndex: 0,
    };
  }

  componentDidMount() {
    const { onLoad } = this.props;
    if (onLoad) {
      onLoad();
    }
    const { title } = this.props;
    this.onTextLayout(title);
  }

  toggleNumberOfLines = (index) => {
    this.setState({
      textShown: this.state.textShown === index ? -1 : index,
    });
  };

  onTextLayout = (title) => {
    if (title && title.length > 250) {
      this.setState({ numLines: 3, showMoreButton: true });
    } else {
      this.setState({ numLines: 0, showMoreButton: false });
    }
  };

  onPressViewAllTitle = (e) => {
    if (this.state.showMoreButton === true) {
      const numLines = this.state.textShown === true ? 3 : 0;
      this.setState({ numLines: numLines, textShown: !this.state.textShown });
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

  _onPlaybackStatusUpdate = (playbackStatus) => {
    if (!playbackStatus.isLoaded) {
      // Update your UI for the unloaded state
      if (playbackStatus.error) {
        console.log(
          `Encountered a fatal error during playback: ${playbackStatus.error}`
        );
        // Send Expo team the error on Slack or the forums so we can help you debug!
      }
    } else {
      // Update your UI for the loaded state
      if (playbackStatus.isPlaying) {
        // Update your UI for the playing state
      } else {
        // Update your UI for the paused state
      }
      if (playbackStatus.isBuffering) {
        // Update your UI for the buffering state
      }
      if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
        // The player has just finished playing and will stop. Maybe you want to play something else?
      }
    }
  };

  _ViewRenderItem = ({ item, index, separators }) => {
    return isImage(item.uri) ? (
      <View style={{ backgroundColor: 'white' }}>
        <ImageComponent
          key={item.id.toString()}
          uri={item.uri}
          style={{
            width: getDimentions().width * 0.9,
            height: getDimentions().height / 2,
            resizeMode: 'stretch',
            margin: 8,
          }}></ImageComponent>
        <PostLikeComponent></PostLikeComponent>
        <SeparatorComponent state={{}}></SeparatorComponent>
      </View>
    ) : (
      <View style={{ backgroundColor: 'white' }}>
        <VideoComponent
          key={item.id.toString()}
          style={{
            width: getDimentions().width * 0.9,
            height: getDimentions().height / 2,
            resizeMode: 'stretch',
            margin: 8,
          }}
          source={{ uri: item.uri }}
          isLooping={false}
          rate={1.0}
          isMuted={false}
          useNativeControls={true}
          volume={1.0}
          playsInSilentLockedModeIOS={false}
          resizeMode="cover"
          shouldPlay={
            this.props.shouldPlayParent && this.state.currentIndex === index
          }
          onPlaybackStatusUpdate={this._onPlaybackStatusUpdate}
          //usePoster={false}
          //posterSource={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', }}>
        ></VideoComponent>
        <PostLikeComponent></PostLikeComponent>
        <SeparatorComponent state={{}}></SeparatorComponent>
      </View>
    );
  };

  render() {
    const { files, title, username, createdAt } = this.props;
    //const totalItemWidth = getDimentions().width;
    return (
      <View style={styles.container}>
        <AvatarWithUsernameComponent
          uri={
            'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
          style={{}}
          title={username}
          createdAt={createdAt}></AvatarWithUsernameComponent>
        <Text
          numberOfLines={this.state.numLines}
          ellipsizeMode="tail"
          style={{ margin: 8, marginTop: 4, marginBottom: 4 }}>
          {title}
        </Text>
        {this.state.showMoreButton ? (
          <Text
            onPress={(e) => this.onPressViewAllTitle(e)}
            style={{ margin: 8, marginTop: 4, marginBottom: 4 }}>
            {' '}
            {this.state.textShown ? 'Read Less' : 'Read More'}{' '}
          </Text>
        ) : null}
        <FlatList
          //key={() => getComponentKey()}
          data={files}
          renderItem={({ item, index, separators }) =>
            this._ViewRenderItem({ item, index, separators })
          }
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          //getItemLayout={(data, index) => ({ length: totalItemWidth, offset: totalItemWidth * index, index, })}
          onViewableItemsChanged={this._onViewableItemsChanged}
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
