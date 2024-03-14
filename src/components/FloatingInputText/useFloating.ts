import {View, Text, Animated, Easing} from 'react-native';
import React, {useRef, useState} from 'react';
import {IInputText} from '../../types';

const useFloating = ({value, handleOnchange}: IInputText) => {
  const [text, setText] = useState(value);
  const animatedValue = useRef(new Animated.Value(0));

  const returnAnimatedTitleStyles = {
    transform: [
      {
        translateY: animatedValue?.current?.interpolate({
          inputRange: [0, 1],
          outputRange: [22, -4],
          extrapolate: 'clamp',
        }),
      },
    ],
    fontSize: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 12], // Adjust sizes as needed
      extrapolate: 'clamp',
    }),
    color: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: ['#B9B9B9', '#454C52'],
    }),
  };

  const viewStyles = {
    borderBottomColor: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: ['#B9B9B9', '#454C52'],
    }),
    borderBottomWidth: 0.8,
  };

  const onFocus = () => {
    Animated.timing(animatedValue?.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  };

  const onBlur = () => {
    if (!text) {
      Animated.timing(animatedValue?.current, {
        toValue: 0,
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
  };

  const onChangeText = (e: string) => {
    setText(e);
    handleOnchange(e);
  };

  return {
    returnAnimatedTitleStyles,
    viewStyles,
    onFocus,
    onBlur,
    onChangeText,
    value
  };
};

export default useFloating;
