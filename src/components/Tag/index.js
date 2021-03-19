import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

export default class Container extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.touchable, ]}
        onPress={this.props.handleOnPress}>
        <View style={[styles.view, this.props.style]}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    borderRadius: 10,
    width: 'auto',
    borderColor: '#40739e',
    borderWidth: 1,
    backgroundColor: '#40739e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  touchable: {
    margin: 0,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    //color: this.props.textColor,
  },
});
