import React from 'react';
import {  View, Image, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';

class Container extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {}
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
    const { image, username } = this.props;
    return (
    <View style={styles.container}>
      <TouchableWithoutFeedback key={ Math.random().toString() }>
        <View style={{ flex:1, flexDirection: 'row',  alignItems: 'center', alignContent: 'center', alignSelf: 'center', alignSelf: 'center'}}>
            <Image 
              key={ Math.random().toString() }
              source={{ uri: image }}
              style={{
                width: 30, 
                height: 30,
                borderRadius: 30,
                borderWidth: 1, 
                borderColor: 'red'
            }}
            />
            <Text style={{  alignItems: 'flex-start', alignSelf: 'flex-start', alignContent: 'flex-start', }}>Hola</Text>
          </View>
      </TouchableWithoutFeedback>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start', 
    alignSelf: 'flex-start', 
    alignContent: 'flex-start',
    margin: 8,
  },
});

export default Container;