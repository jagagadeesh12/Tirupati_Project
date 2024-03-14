import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

import {ITextBtn} from '../../../types';
import styles from './styles';

const TextBtn = ({label, onPress}: ITextBtn) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableWithoutFeedback>
  );
};

export default TextBtn;
