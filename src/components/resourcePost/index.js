import React from 'react';
import { FlatList, View, Image, TouchableWithoutFeedback, StyleSheet, RefreshControl, Text } from 'react-native';
import { getDimentions } from '../../utils/dimensions';
import IconUsernameComponent from '../../components/iconUsername';

class Container extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        dimentions: getDimentions(),
        loading: false
    }
  }

  componentDidMount() {
    const { onLoad } = this.props;
    if (onLoad) {
      onLoad();
    }
  }

  onRefresh () {

  }

  render() {
    const { items, title } = this.props;
    const { dimentions, loading } = this.state;
    return (
    <View style={styles.container}>
      <IconUsernameComponent image={'https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080097569.jpg'}></IconUsernameComponent>
       <Text
        style={{
          margin:8,
          textAlign: 'left',
          alignSelf: 'flex-start',
          alignContent: 'flex-start'
        }}>{title}
      </Text>
      <FlatList
        key={ Math.random().toString() }
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        data={items}
        renderItem={ ({ item, index, separators }) => (
          <TouchableWithoutFeedback
            key={index+1}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={{ backgroundColor: 'white' }}>
              <Image 
                key={ item.id }
                source={{ uri: item.uri }}
                key={index}
                style={{
                  width: dimentions.width - 15,
                  height: dimentions.height2,
                  borderWidth: 1,
                  resizeMode:'stretch',
                  margin:8
                }}
              />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Container;