import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; //https://icons.expo.fyi/

function Container(props) {
  const { style, callback } = props;
  const [name, setName] = useState(props.name);
  const [badgeCount, setBadgeCount] = useState(props.badgeCount);
  const [color, setColor] = useState(props.color);
  const [size, setSize] = useState(props.size);
  const [text, setText] = useState(props.text);
  const [loading, setLoading] = useState(props.loading);

  useEffect(() => {
    setText(props.text);
    setLoading(props.loading);
    setColor(props.color);
  }, [props.text, props.loading, props.color]);

  function _handleOnPress(e) {
    if (callback) {
      callback(e);
    }
  }

  function _getIcon() {
    return (
      <View style={[styles.container, style]}>
        <TouchableWithoutFeedback onPress={(e) => _handleOnPress(e)}>
          <View>
            <MaterialIcons name={name} size={size} color={color} />
            {badgeCount > 0 && (
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
                <Text
                  style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                  {badgeCount}
                </Text>
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <View style={{ flexDirection: 'column', width: '85%' }}>
            <Text
              style={{
                marginLeft: 8,
                fontWeight: 'bold',
                fontSize: 16,
                alignSelf: 'flex-start',
              }}>
              {text}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function _getIconLoading() {
    return (
      <View style={[styles.container, style]}>
        <ActivityIndicator color={color} size={size} />
      </View>
    );
  }

  return loading ? _getIconLoading() : _getIcon();
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Container;
