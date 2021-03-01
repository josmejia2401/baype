import * as React from 'react';
import { FlatList, View, Image, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';
import { Video } from 'expo-av';
//Componentes
import AvatarWithUsernameComponent from '../../components/avatarWithUsername';
import SeparatorComponent from '../separator';
//Utilidades
import { getDimentions } from '../../utils/dimensions';
import { getComponentKey } from '../../utils/random';
import { isImage } from '../../utils/file';

class Container extends React.PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
        dimentions: getDimentions(),
        loading: false,
        textShown: false,
        numLines: 1,
        showMoreButton: false,
    }
    this.videoRef = null;
    this.setVideoRef = (element) => {
      this.videoRef = element;
      if (this.videoRef && this.videoRef.current) {
        this.videoRef.current.pauseAsync();
        console.log("pausando...");
      }
    };
  }

  componentDidMount() {
    const { onLoad } = this.props;
    if (onLoad) {
      onLoad();
    }
    const { items, title, username, createdAt } = this.props;
    this.onTextLayout(title);
    //const videoRef = React.useRef(null);
  }

  toggleNumberOfLines = index => {
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
      this.setState({ numLines: numLines, textShown: !this.state.textShown});
    }
  }

  _onViewableItemsChanged = ({ viewableItems, changed }) => {
    if (changed && changed.length > 0) {
      const currentData = changed[0];
      //this.videoRef.current.playAsync();
      if(this.videoRef && this.videoRef.current) {
        this.videoRef.current.pauseAsync();
      }
    }
  }

  render() {
    const { items, title, username, createdAt } = this.props;
    const { dimentions, numLines, showMoreButton, textShown } = this.state;
    const totalItemWidth = dimentions.width;
    return (
    <View style={styles.container}> 
      <AvatarWithUsernameComponent
        uri={'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'} 
        style={{}}
        title={username}
        createdAt={createdAt}
      ></AvatarWithUsernameComponent>
      <Text 
        numberOfLines={numLines}
        ellipsizeMode='tail'
        style={{margin: 8, marginTop: 4, marginBottom: 4}}>{title}</Text>
        { showMoreButton ? ( <Text onPress={(e) => this.onPressViewAllTitle(e) } style={{margin: 8, marginTop: 4, marginBottom: 4}}> { textShown ? 'Read Less' : 'Read More' } </Text> ) : null }
      <FlatList
        key={  getComponentKey }
        data={items}
        renderItem={ ({ item, index, separators }) => (
          <TouchableWithoutFeedback
            key={ getComponentKey }
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={{ backgroundColor: 'white' }}>
              { isImage(item.uri) ? 
              (
                <Image 
                  key={ item.id.toString() }
                  source={{ uri: item.uri }}
                  style={{
                    width: dimentions.widthWithoutMargin - 16,
                    height: dimentions.height2,
                    borderWidth: 1,
                    resizeMode:'stretch',
                    margin:8
                  }}
                />
              ) : 
              (
                <Video
                  ref={ this.setVideoRef }
                  key={ item.id.toString() }
                  style={{
                    width: dimentions.widthWithoutMargin - 16,
                    height: dimentions.height2,
                    resizeMode:'stretch',
                    margin:8
                  }}
                  source={{ uri: item.uri }}
                  isLooping={false}
                  rate={1.0}
                  isMuted={false}
                  useNativeControls={true}
                  volume={1.0}
                  playsInSilentLockedModeIOS ={false}
                  resizeMode='cover' 
                  shouldPlay={false} 
                  usePoster={false}
                  posterSource={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='}}
                  //onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
              )
              } 
              <SeparatorComponent state={{}}></SeparatorComponent>
            </View>
          </TouchableWithoutFeedback>
        )}
        horizontal={true} 
        showsHorizontalScrollIndicator={true} 
        bounces={false}
        decelerationRate='fast'
        getItemLayout={(data, index) => ({ length: totalItemWidth, offset: totalItemWidth * index, index, })}
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
    width: getDimentions().widthWithoutMargin
  },
});

export default Container;