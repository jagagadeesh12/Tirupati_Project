import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

import {ICustomBtn} from '../../../types';

import Styles from './styles';

const CustomBtn = ({label, isDisabled, isTextBtn, onPress}: ICustomBtn) => {
  return (
    <TouchableWithoutFeedback disabled={!isDisabled} onPress={onPress}>
      <View style={Styles.container}>
        <Text style={Styles.label}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomBtn;
