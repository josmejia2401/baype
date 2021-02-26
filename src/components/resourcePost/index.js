import React , {useCallback} from 'react';
import { FlatList, View, Image, TouchableWithoutFeedback, StyleSheet, RefreshControl, Text } from 'react-native';
import { getDimentions } from '../../utils/dimensions';
import AvatarWithUsernameComponent from '../../components/avatarWithUsername';
import SeparatorComponent from '../separator';
import { getRandom } from '../../utils/random';



class Container extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        dimentions: getDimentions(),
        loading: false,
        textShown: false,
        numLines: 1,
        showMoreButton: false
    }
  }

  componentDidMount() {
    const { onLoad } = this.props;
    if (onLoad) {
      onLoad();
    }
    const { items, title, username, createdAt } = this.props;
    this.onTextLayout(title);
  }

  toggleNumberOfLines = index => {
    this.setState({
      textShown: this.state.textShown === index ? -1 : index,
    });
  };


  onRefresh () {

  }


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
  
  render() {
    const { items, title, username, createdAt } = this.props;
    const { dimentions, loading, numLines, showMoreButton, textShown } = this.state;
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
        key={ () => getRandom() }
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        data={items}
        renderItem={ ({ item, index, separators }) => (
          <TouchableWithoutFeedback
            key={ () => getRandom() }
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={{ backgroundColor: 'white' }}>
              <Image 
                key={ item.id }
                source={{ uri: item.uri }}
                key={index}
                style={{
                  width: dimentions.widthWithoutMargin - 16,
                  height: dimentions.height2,
                  borderWidth: 1,
                  resizeMode:'stretch',
                  margin:8
                }}
              />
              <SeparatorComponent state={{}}></SeparatorComponent>
            </View>
          </TouchableWithoutFeedback>
        )}
        //getItemCount={data => data.length}
        refreshControl={
          <RefreshControl
            colors={['#9Bd35A', '#689F38']}
            refreshing={loading}
            onRefresh={this.onRefresh}
          />
        }
        initialNumberToRender={8}
        initialNumToRender={8}
        maxToRenderPerBatch={2}
        updateCellsBatchingPeriod={15}
        windowSize={10}
        initialScrollIndex={0}
        onScrollToIndexFailed={() => { }}
        onEndReachedThreshold={0.5}

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