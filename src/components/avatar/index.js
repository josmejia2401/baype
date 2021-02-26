import React from 'react';
import { StyleSheet } from 'react-native';
import ImageComponent from '../image';

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
    const { uri, style } = this.props;
    return (<ImageComponent style={[styles.avatar, style]} uri={uri} />);
  }

}
const styles = StyleSheet.create({
  avatar: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 35 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'transparent',
    margin: 8
  },
});


export default Container;