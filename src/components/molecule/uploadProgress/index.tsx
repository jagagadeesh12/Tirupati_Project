import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet, Image, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';

import styles from './styles';
import useUploadProgress from './useUploadProgress';
import {IUploadProgressBar} from '../../../types';
import Loader from './loader';

const UploadProgress = ({progress, lineColor, uri}: IUploadProgressBar) => {
  const {progressAnim} = useUploadProgress(progress);
  return (
    <View style={styles.mainContainer}>
      <Image source={{uri}} style={styles.loadImage} />
      <View style={styles.loadContainer}>
        <View style={[styles.progress]}>
          <Animated.View
            style={[
              styles.animatedContainer,
              {
                width: progressAnim.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),

                backgroundColor: lineColor,
              },
            ]}>
            <Loader />
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default UploadProgress;
