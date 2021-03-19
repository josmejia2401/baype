import * as React from 'react';
import { FlatList, View, StyleSheet, Text, ScrollView } from 'react-native';
//Componentes
import AvatarWithUsernameComponent from '../../components/AvatarWithUsername';
import SeparatorComponent from '../Separator';
import VideoComponent from '../Video/index';
import ImageComponent from '../Image/index';
import TagComponent from '../Tag/index';
//Utilidades
import { getDimentions } from '../../utils/dimensions';
import { getComponentKey } from '../../utils/random';
import { isImage } from '../../utils/file';
import { getTimeSince } from '../../utils/date';
import { getCurrencyNumber } from '../../utils/currency';

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

  render() {
    const { item, username, createdAt } = this.props;
    //const totalItemWidth = getDimentions().width;
    const dateSince = getTimeSince(item.createdAt);
    return (
      <View style={styles.container}>
        <AvatarWithUsernameComponent
          uri={
            'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'
          }
          style={{ margin: 8, marginBottom: 0, marginTop: 0 }}
          title={username}
          createdAt={createdAt}></AvatarWithUsernameComponent>
        <View style={styles.containerRenderItem}>
          <ImageComponent
            key={item.id.toString()}
            uri={item.files[0].uri}
            style={styles.image}></ImageComponent>
          <View style={styles.containerDetail}>
            <View style={styles.containerHeader}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  alignSelf: 'flex-start',
                  textAlign: 'justify',
                }}>
                {item.title}
              </Text>
              <ScrollView>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 8,
                    alignSelf: 'flex-start',
                    textAlign: 'justify',
                  }}>
                  {item.body}
                </Text>
              </ScrollView>
            </View>
            <View style={styles.containerFooter}>
              <TagComponent
                title={getCurrencyNumber(item.price)}
                style={{ padding: 4 }}></TagComponent>
            </View>
          </View>
        </View>
        <SeparatorComponent
          style={styles.containerSeparator}></SeparatorComponent>
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
    width: getDimentions().width - 16,
    margin: 0,
    padding: 0,
    height: getDimentions().height / 3,
  },
  containerRenderItem: {
    flexDirection: 'row',
    margin: 8,
    marginTop: 0,
    paddingTop: 0,
    marginBottom: 0,
    paddingBottom: 0,
    alignSelf: 'stretch',
    alignContent: 'space-between',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: getDimentions().width,
    height: getDimentions().height / 4,
  },
  containerSeparator: {
    margin: 0,
    marginTop: 8,
  },
  image: {
    width: getDimentions().width * 0.3,
    height: getDimentions().height / 4,
    resizeMode: 'stretch',
    margin: 0,
    marginLeft: 4,
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 35 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  containerDetail: {
    flexDirection: 'column',
    width: getDimentions().width * 0.7,
    height: getDimentions().height / 4,
    margin: 8,
    marginLeft: 0,
    marginTop: 0,
    paddingTop: 0,
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  containerHeader: {
    flexDirection: 'column',
    width: 'auto',
    height: getDimentions().height / 6,
    margin: 8,
    marginRight: 32,
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  containerFooter: {
    flexDirection: 'row',
    flex: 1,
    width: 'auto',
    height: 'auto',
    margin: 8,
    marginRight: 32,
    marginBottom: 4,
    bottom: 0,
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'absolute',
  },
});

export default Container;
