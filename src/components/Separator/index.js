import React from 'react';
import { View, StyleSheet,  } from 'react-native';
import { getComponentKey } from '../../utils/random';

class Container extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    const { onLoad } = this.props;
    if (onLoad) {
      onLoad();
    }
  }


  render() {
    const { style } = this.props;
    return ( <View style={[styles.container, style]}/> );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 1,
    width: "100%",
    alignSelf: 'center',
    backgroundColor: "#dcdde1"
  },
});

export default Container;