import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {IButtonLoader} from '../../types';

const ButtonLoader = ({label, onPress, containerStyle={}}: IButtonLoader) => {
  return (
    <TouchableOpacity style={[styles.button, containerStyle]} onPress={onPress}>
      <Text style={styles.updatestart}>{label}</Text>
    </TouchableOpacity>
  );
};
export default ButtonLoader;
