import {useEffect} from 'react';
import Animated, {
  Easing,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Gesture} from 'react-native-gesture-handler';
import {CLAMP, HEIGHT} from './constant';

type UseBottomSheetProps = {
  isOpen: boolean;
  onDismiss: () => void;
};

const useBottomSheet = ({isOpen, onDismiss}: UseBottomSheetProps) => {
  const offset = useSharedValue(0);
  const isDragging = useSharedValue(false);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      isDragging.value = true;
    })
    .onChange(event => {
      const offsetDelta = event.translationY + offset.value;
      const clamp = Math.max(-CLAMP, offsetDelta);
      offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
    })
    .onFinalize(() => {
      isDragging.value = false;
      if (offset.value < HEIGHT / 3) {
        offset.value = withSpring(0);
      } else {
        offset.value = withTiming(
          HEIGHT,
          {duration: 300, easing: Easing.inOut(Easing.ease)},
          () => {
            runOnJS(onDismiss)();
          },
        );
      }
    });

  const translateY = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: offset.value,
        },
      ],
    };
  });

  const lineTop = useSharedValue(0);

  useEffect(() => {
    lineTop.value = interpolate(offset.value, [0, 0.75 * HEIGHT], [15, -10]);
  }, [offset.value, lineTop]);

  useEffect(() => {
    function onOpen() {
      if (isOpen) {
        offset.value = 0;
      }
    }

    onOpen();
  }, [isOpen, offset]);

  return {
    panGesture,
    translateY,
    isDragging,
    lineTop,
  };
};

export default useBottomSheet;
