import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ImageComponent from '../image';
import { getTimeSince } from '../../utils/date';

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

  render() {
    const { uri, style, title, createdAt } = this.props;
    const dateSince = getTimeSince(createdAt);
    return (
      <View style={{
        flexDirection: 'row',
        margin: 0,
        marginBottom: 0,
        alignItems: 'center',
      }}>
        <ImageComponent style={[styles.avatar, style]} uri={uri} />
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <View style={{ flexDirection: 'column', width: '85%'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 16,  alignSelf: 'flex-start' }}>{title}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 8, alignSelf: 'flex-start' }}>{dateSince}</Text>
          </View>
          <View style={{ flexDirection: 'row', width: '15%',  }}>
            <Text style={{ textAlign: 'right', alignContent: 'flex-end', }}>...</Text>
          </View>
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  avatar: {
    width: 35,
    height: 35,
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 35 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'transparent',
    ///margin: 8
  },
});


export default Container;