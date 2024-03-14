import {Dimensions} from 'react-native';

import {useEffect, useState} from 'react';

import Animated, {
  Extrapolate,
  ReanimatedEvent,
  cancelAnimation,
  interpolate,
  interpolateColor,
  runOnJS,
  runOnUI,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {ISwipeCheck} from '../../types';
import Toast from 'react-native-toast-message';
import {validateDuration} from '../../utils';
import {Gesture} from 'react-native-gesture-handler';
import {TaskSquare} from 'iconsax-react-native';

const dimensions = Dimensions.get('window');
const BUTTON_WIDTH = 333 * (dimensions.width / 375);
const BUTTON_HEIGHT = 60 * (dimensions.height / 667);

const BUTTON_PADDING = 10;
const SWIPE_DIM = 48;

const WAVE_RANGE = SWIPE_DIM + 2 * BUTTON_PADDING;
const SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPE_DIM;

const useSwipe = ({
  checkInDate,
  onCheckIn,
  onCheckOut,
  isCheckedIn,
  isDisabledSwipe,
  setDisableSwipe,
}: ISwipeCheck) => {
  const X = useSharedValue(0);
  const [swiped, setSwiped] = useState(isCheckedIn ? true : false);
  const [showToast, setShowToast] = useState(false);
  const [isDisabledPan, setShowDisabled] = useState(
    isDisabledSwipe ? true : false,
  );

  useEffect(() => {
    // setSwiped(isCheckedIn);
    if (isCheckedIn) {
      X.value = SWIPE_RANGE;
    }
  }, [isCheckedIn]);

  useEffect(() => {
    if (isDisabledPan) {
      // setShowDisabled(true);
      setDisableSwipe(true);
    }
  }, [isDisabledPan]);

  useEffect(() => {
    // console.log('showToast', showToast);
    if (showToast) {
      Toast.show({
        type: 'success',
        text1: 'You already checked-in today',
      });
      setShowToast(false);
    }
  }, [showToast]);

  // const trigger = () => {
  //   'worklet';

  //   if (checkInDate) {
  //     const isAllowed = validateDuration(checkInDate, 12);
  //     if (isDisabledPan && !isAllowed) {
  //       // runOnJS(setShowDisabled)(true);
  //       runOnJS(setShowToast)(true);
  //     } else {
  //       runOnJS(setShowDisabled)(false);
  //     }
  //   }
  // };

  const onStart = async (
    e: ReanimatedEvent<any>,
    swipeStart: Record<string, unknown>,
  ) => {
    'worklet';
    swipeStart.completed = swiped;
    if (isDisabledSwipe) {
      cancelAnimation(X);
      // runOnJS(setShowDisabled)(true);
    }
    // const isAllowed = validateDuration(checkInDate, 12);
    // if (!isAllowed && !isCheckedIn) {
    //   runOnJS(setShowToast)(true);
    //   cancelAnimation(X);
    // }
    // }
  };

  const onActive = async (
    e: ReanimatedEvent<any>,
    swipeStart: Record<string, unknown>,
  ) => {
    'worklet';

    let newValue;
    if (swipeStart.completed) {
      newValue = SWIPE_RANGE + e.translationX;
    } else {
      newValue = e.translationX;
    }
    if (newValue >= 0 && newValue <= SWIPE_RANGE) {
      X.value = newValue;
    }
  };

  const animatedGestureHandler = useAnimatedGestureHandler({
    onStart: onStart,
    onActive: onActive,
    onEnd: () => {
      if (
        X.value < BUTTON_WIDTH / 2 - SWIPE_DIM / 2 &&
        isCheckedIn &&
        checkInDate
      ) {
        X.value = withSpring(0);
        runOnJS(setSwiped)(false);
        runOnJS(onCheckOut)();
      } else if (X.value > BUTTON_WIDTH / 2 - SWIPE_DIM / 2 && !isCheckedIn) {
        X.value = withSpring(SWIPE_RANGE);
        runOnJS(setSwiped)(true);
        runOnJS(onCheckIn)();
      }
    },
  });
  const InterpolateXInput = [0, SWIPE_RANGE];
  const AnimatedStyles = {
    swiper: useAnimatedStyle(() => {
      return {
        transform: [{translateX: X.value}],
        backgroundColor: interpolateColor(
          X.value,
          [0, BUTTON_WIDTH - SWIPE_DIM - BUTTON_PADDING],
          ['#0074B7', 'rgba(243, 65, 65, 1)'],
        ),
      };
    }),
    SwipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [0.7, 0],
          Extrapolate.CLAMP,
        ),
        transform: [
          {
            translateX: interpolate(
              X.value,
              InterpolateXInput,
              [0, BUTTON_WIDTH / 2 - SWIPE_DIM],
              Extrapolate.CLAMP,
            ),
          },
        ],
        color: interpolateColor(
          X.value,
          [0, BUTTON_WIDTH - SWIPE_DIM - BUTTON_PADDING],
          ['#454C52', '#454C52'],
        ),
        position: 'absolute',
      };
    }),
    swipeColor: useAnimatedStyle(() => {
      return {
        width: WAVE_RANGE + X.value,
        opacity: interpolate(X.value, InterpolateXInput, [0, 1]),
      };
    }),
    isEnded: X.value < BUTTON_WIDTH / 2 - SWIPE_DIM / 2 - 10,
    isEnd: X.value < BUTTON_WIDTH / 2 - SWIPE_DIM / 2 - 10,
  };

  console.log('checkInDate', checkInDate);
  const tap = Gesture.Tap()
    .onBegin(() => {
      // trigger();
    })
    .onFinalize(() => {});

  // console.log('isDisabledSwipe', isDisabledSwipe);
  // console.log('isCheckedIn', isCheckedIn);
  // console.log('swiped', swiped);

  return {
    animatedGestureHandler,
    AnimatedStyles,
    SWIPE_DIM,
    BUTTON_HEIGHT,
    BUTTON_WIDTH,
    BUTTON_PADDING,
    isEnded: AnimatedStyles.isEnded,
    isEnd: checkInDate ? true : false,
    tap,
    isDisabledSwipe,
  };
};

export default useSwipe;
