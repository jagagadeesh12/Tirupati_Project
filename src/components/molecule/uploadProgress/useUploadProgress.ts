import {View, Text, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';

const useUploadProgress = (progress: number) => {
  const progressAnim = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(progressAnim, {
        toValue: progress * 100,
        duration: 5000,
        useNativeDriver: false,
      }),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 500,
        delay: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [progress, progressAnim, textOpacity]);

  const percentage = Number(
    progressAnim.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 100],
    }),
  );
  return {
    progressAnim,
    textOpacity,
  };
};

export default useUploadProgress;
