import {Text, View, Animated, Easing, Image} from 'react-native';
import React from 'react';

import styles from './styles';
import {OnBoardingItemProps} from '../../types';

const SlideItem = ({
  item: {id, image, title, description},
}: OnBoardingItemProps) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container} key={id}>
      <Image source={image} resizeMode="contain" style={[styles.image]} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default SlideItem;
