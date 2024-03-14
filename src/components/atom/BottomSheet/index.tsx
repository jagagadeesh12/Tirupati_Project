import React, {Fragment} from 'react';
import {Pressable, View} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {GestureDetector} from 'react-native-gesture-handler';
import {styles as bottomSheetStyles} from './styles';
import useBottomSheet from './useBottomSheet';
import {HEIGHT} from './constant';

type AnimatedBottomSheetProps = {
  isOpen: boolean;
  backdropOnPress: () => void;
  children: React.ReactNode;
};

const PressAnimated = Animated.createAnimatedComponent(Pressable);
const AnimatedView = Animated.createAnimatedComponent(View);

const AnimatedBottomSheet = (props: AnimatedBottomSheetProps) => {
  const {panGesture, translateY, isDragging, lineTop} = useBottomSheet({
    isOpen: props.isOpen,
    onDismiss: props.backdropOnPress,
  });

  const backdropStyle = useAnimatedStyle(() => {
    const opacity = interpolate(translateY.value, [0, HEIGHT], [0, 0.8]);
    console.log('Backdrop Opacity:', opacity); // Add this line for logging
    return {opacity};
  });

  const lineStyle = useAnimatedStyle(() => {
    const width = interpolate(translateY.value, [0, 0.75 * HEIGHT], [75, 0]);
    console.log('Line Width:', width); // Add this line for logging
    const top = lineTop.value;
    console.log('Line Top:', top); // Add this line for logging
    return {width, top};
  });

  return (
    <Fragment>
      <PressAnimated
        onPress={props.backdropOnPress}
        style={({pressed}) => [
          bottomSheetStyles.backdrop,
          {
            opacity: pressed
              ? interpolate(translateY.value, [0, HEIGHT], [0.2, 0.8])
              : backdropStyle.opacity,
          },
        ]}
      />
      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={[
            bottomSheetStyles.view,
            useAnimatedStyle(() => ({
              transform: [{translateY: translateY.value}],
            })),
          ]}>
          <View style={bottomSheetStyles.line} />
          {props.children}
        </Animated.View>
      </GestureDetector>
      {isDragging && (
        <AnimatedView style={[bottomSheetStyles.draggableLine, lineStyle]} />
      )}
    </Fragment>
  );
};

export default AnimatedBottomSheet;
