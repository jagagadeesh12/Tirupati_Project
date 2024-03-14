import {Text, TouchableHighlight} from 'react-native';
import React from 'react';

import styles from './styles';
import {IButton} from '../../types';

const Button = ({text, onPress, isDisabled = false}: IButton) => {
  return (
    <TouchableHighlight
      // eslint-disable-next-line react-native/no-inline-styles
      style={[styles.btnContainer, {opacity: isDisabled ? 0.5 : 1}]}
      disabled={isDisabled}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};
export default Button;
