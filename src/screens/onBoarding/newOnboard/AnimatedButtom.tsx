import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {ArrowRight2} from 'iconsax-react-native';
import {SCREENS} from '../..';

const width = Dimensions.get('window').width;

interface CustomButtonProps {
  flatListRef: React.RefObject<Animated.FlatList<any>>;
  flatListIndex: Animated.SharedValue<number>;
  dataLength: number;
  currentIndex: number;
}

const AnimatedButton: React.FC<CustomButtonProps> = ({
  currentIndex,
  flatListRef,
  flatListIndex,
  dataLength,
}) => {
  // const widthAnim = useRef(new Animated.(100)).current;
  const navigation = useNavigation();

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      width:
        flatListIndex.value === dataLength - 1
          ? withSpring(width - 40, {damping: 15, initialVelocity: 0})
          : withSpring(60, {damping: 15, initialVelocity: 0}),
      height: 44,
    };
  });

  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      width: 10,
      // height: 0,
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });

  const skipAnimStyle = useAnimatedStyle(() => {
    return {
      // width: currentIndex == 2 ? withTiming(0) : withTiming(100),
      opacity: currentIndex == 2 ? withTiming(0) : withTiming(1),
    };
  });
  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });

  return (
    // <View style={styles.buttonContainer}>
    <View
      style={{
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {/* {flatListIndex.value !== dataLength - 1 && (
        
      )} */}

      {/* {currentIndex != 2 && ( */}
      <TouchableOpacity
        onPress={() => {
          flatListRef.current?.scrollToEnd();
        }}>
        <Animated.View style={[styles.skipContainer, skipAnimStyle]}>
          <Text style={styles.skipText}>SkipS</Text>

          {/* <ArrowRight2 size={18} color="#1B1B1B" style={{marginTop: 4}} /> */}
        </Animated.View>
      </TouchableOpacity>
      {/* )} */}
      <TouchableWithoutFeedback
        onPress={() => {
          if (flatListIndex.value < dataLength - 1) {
            flatListRef.current?.scrollToIndex({
              index: flatListIndex.value + 1,
            });
          } else {
            navigation.navigate(SCREENS.WELCOME_SCREENS);
          }
        }}>
        <Animated.View style={[styles.container, buttonAnimationStyle]}>
          <Animated.Image
            source={require('../../../assets/images/arrow-down-2.png')}
            style={[styles.arrow]}
          />
          <Animated.Image
            source={require('../../../assets/images/arrow-down-2.png')}
            style={[styles.arrow, arrowAnimationStyle]}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AnimatedButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'space-between',
    bottom: 50,
    left: 0,
    right: 0,
    // bottom: 50,
    // right: 5,
  },
  container: {
    height: 44,
    width: 40,
    backgroundColor: '#1B1B1B',
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  arrow: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
  },
  skipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 10,
    // paddingVertical: 5,
  },
  skipText: {
    color: '#1B1B1B',
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
