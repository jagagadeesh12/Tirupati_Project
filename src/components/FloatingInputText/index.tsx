import React, {useState, useRef} from 'react';
import {View, Animated, Easing, TextInput} from 'react-native';
import {IInputText} from '../../types';
import styles from './styles';
import useFloating from './useFloating';

const FloatingLabelInput = (props: IInputText) => {
  const {returnAnimatedTitleStyles, viewStyles, onFocus, onBlur, onChangeText} =
    useFloating(props);
  const {placeholder} = props;

  return (
    <Animated.View>
      <Animated.Text style={[returnAnimatedTitleStyles]}>
        {placeholder}
      </Animated.Text>
      <TextInput
        placeholder=""
        placeholderTextColor={'#B9B9B9'}
        style={styles.input}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </Animated.View>
  );
};

export default FloatingLabelInput;
