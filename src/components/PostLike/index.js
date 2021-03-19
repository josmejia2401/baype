import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
//components
import IconComponent from '../Icon';
//services
import * as services from './services';

function Container(props) {
  const [username, setUsername] = useState(props.username);
  const [loading, setLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [color, setColor] = useState('black');
  const [countLike, setCountLike] = useState(0);

  function _handleOnPress(e) {
    setLoading(true);
    services.doLike(username).then((data) => {
      if (data.isLiked) {
        setColor('red');
      } else {
        setColor('black');
      }
      setIsLiked(data.isLiked);
      setCountLike(data.countLike);
      setLoading(false);
    });
  }

  // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => {
    //setLoading(false);
  });

  return (
    <IconComponent
      name={'thumb-up'}
      size={32}
      color={color}
      badgeCount={0}
      text={countLike}
      callback={_handleOnPress.bind(this)}
      style={styles.container}
      loading={loading}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
});

export default Container;
