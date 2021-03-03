import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; //https://icons.expo.fyi/

function Container(props) {
  const { name, badgeCount, color, size, callback, style } = props;
  const [nameIcon, setNameIcon] = useState("md-checkmark-circle");
  const [badgeCountIcon, setBadgeCountIcon] = useState(0);
  const [colorIcon, setColorIcon] = useState("black");
  const [sizeIcon, setSizeIcon] = useState(32);

  function _handleOnPress (e) {
    if (callback) {
      callback(e);
    }
  }
  // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => { 
    if (name) {
      setNameIcon(name);
    }
    if (badgeCount) {
      setBadgeCountIcon(badgeCount);
    }
    if (color) {
      setColorIcon(color);
    }
    if (size) {
      setSizeIcon(size);
    }
  });
  return (
    <View style={[styles.container, style]} >
      <TouchableWithoutFeedback onPress={(e) => _handleOnPress(e) }>
        <View>
          <MaterialIcons name={nameIcon} size={sizeIcon} color={colorIcon} />
          {badgeCountIcon > 0 && (
            <View
              style={{
                position: 'absolute',
                right: -6,
                top: -3,
                backgroundColor: 'red',
                borderRadius: 6,
                width: 12,
                height: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCountIcon}</Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <View style={{ flexDirection: 'column', width: '85%'}}>
          <Text style={{ marginLeft: 8, fontWeight: 'bold', fontSize: 16,  alignSelf: 'flex-start' }}>{"0"}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //margin: 0,
    //marginBottom: 0,
    alignItems: 'center',
  },
});


export default Container;