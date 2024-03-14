/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useState} from 'react';
import {Text} from 'react-native';

import {
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

import Animated from 'react-native-reanimated';
import styles from './style';
import useSwipe from './useSwipe';
import {ISwipeCheck} from '../../types';
import PerchIcon from '../PerchIcon';

const SwipeCheck = (props: ISwipeCheck) => {
  const {
    animatedGestureHandler,
    AnimatedStyles,
    SWIPE_DIM,
    BUTTON_HEIGHT,
    BUTTON_WIDTH,
    BUTTON_PADDING,
    isEnded,
    isEnd,
    tap,
    isDisabledSwipe,
  } = useSwipe(props);
  return (
    <>
      <GestureHandlerRootView aria-disabled={true}>
        <GestureDetector gesture={tap}>
          <PanGestureHandler
            onGestureEvent={animatedGestureHandler}
            onHandlerStateChange={animatedGestureHandler}
            enabled={!isDisabledSwipe}>
            <Animated.View
              style={[
                styles.swipeContainer,
                {
                  height: BUTTON_HEIGHT,
                  width: BUTTON_WIDTH,
                  padding: BUTTON_PADDING,
                },
              ]}>
              <Animated.View
                style={[
                  AnimatedStyles.swipeColor,
                  styles.swipeColor,
                  {height: BUTTON_HEIGHT, borderRadius: BUTTON_HEIGHT},
                ]}
              />
              {/* <PanGestureHandler onGestureEvent={animatedGestureHandler}> */}
              <Animated.View
                style={[
                  styles.swiper,
                  AnimatedStyles.swiper,
                  {height: SWIPE_DIM, width: SWIPE_DIM, left: BUTTON_PADDING},
                ]}>
                <PerchIcon
                  name={isEnded ? 'ArrowRight' : 'ArrowLeft'}
                  color="#FEFEFE"
                />
              </Animated.View>
              {/* </PanGestureHandler> */}
              {isEnded ? (
                <Animated.Text
                  style={[styles.SwipeText, AnimatedStyles.SwipeText]}>
                  Swipe to Check In
                </Animated.Text>
              ) : (
                <Text style={[styles.SwipeText, {}]}>Swipe to Check Out</Text>
              )}
            </Animated.View>
          </PanGestureHandler>
        </GestureDetector>
      </GestureHandlerRootView>
    </>
  );
};

export default SwipeCheck;
