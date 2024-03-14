import React, {useState, useRef} from 'react';
import {View, Animated, Easing, TextInput} from 'react-native';
import {IInputText} from '../../../types';
import styles from './styles';
import useFloating from './useFloating';

const FloatingLabelInput = (props: IInputText) => {
  const {
    returnAnimatedTitleStyles,
    viewStyles,
    onFocus,
    onBlur,
    onChangeText,
    text,
  } = useFloating(props);
  const {placeholder, value} = props;
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.inputContainer, viewStyles]}>
        <Animated.Text style={[returnAnimatedTitleStyles]}>
          {placeholder}
        </Animated.Text>
      </Animated.View>
      <TextInput
        placeholder={''}
        // placeholderTextColor={'#B9B9B9'}
        value={value}
        style={styles.input}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </View>
  );
};

export default FloatingLabelInput;
