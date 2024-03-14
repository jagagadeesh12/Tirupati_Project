import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolation,
  useAnimatedStyle,
} from 'react-native-reanimated';
import data from './data';
import Pagination from './Pagination';
import AnimatedButton from './AnimatedButtom';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Item {
  id: string;
  image: any;
  title: string;
  text: string;
}

const OnboardingScreen: React.FC = () => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  const flatListRef = useRef<Animated.FlatList<Item>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const [backgroundColor, setBackgroundColor] = React.useState('#FFEDC7');

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: {item: Item; index: number}[]}) => {
      if (viewableItems.length > 0) {
        flatListIndex.value = viewableItems[0].index;
        switch (viewableItems[0].index) {
          case 0:
            setCurrentIndex(0);
            setBackgroundColor('#FFEDC7');
            break;
          case 1:
            setCurrentIndex(1);
            setBackgroundColor('#FFC0C1');
            break;
          case 2:
            setCurrentIndex(2);
            setBackgroundColor('#DFC8FF');
            break;
          default:
            setBackgroundColor('#FFEDC7');
            break;
        }
      }
    },
  ).current;

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  const RenderItem: React.FC<{item: Item; index: number}> = ({item, index}) => {
    const imageAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolation.CLAMP,
      );
      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolation.CLAMP,
      );
      return {
        opacity: opacityAnimation,
        width: SCREEN_WIDTH * 0.9,
        height: SCREEN_WIDTH * 1.1,
        transform: [{translateY: translateYAnimation}],
      };
    });

    const textAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolation.CLAMP,
      );
      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolation.CLAMP,
      );

      return {
        opacity: opacityAnimation,
        // width: SCREEN_WIDTH * 0.9,
        // textAlign: 'center',
        // top: '20%',
        transform: [{translateY: translateYAnimation}],
      };
    });

    return (
      <View
        style={[
          styles.itemContainer,
          {
            width: SCREEN_WIDTH,
            height: SCREEN_WIDTH,
            flex: 1,
            marginTop: 50,
          },
        ]}>
        <Animated.Image source={item.image} style={imageAnimationStyle} />
        <Animated.View style={[{padding: 20}, textAnimationStyle]}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemText}>{item.text}</Text>
        </Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={onScroll}
        data={data}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} />;
        }}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
      />
      <Pagination data={data} x={x} screenWidth={SCREEN_WIDTH} />

      <View style={styles.bottomContainer}>
        {/* <Pagination data={data} x={x} screenWidth={SCREEN_WIDTH} /> */}
        <AnimatedButton
          currentIndex={currentIndex}
          flatListRef={flatListRef}
          flatListIndex={flatListIndex}
          dataLength={data.length}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#FFEDC7',
    justifyContent: 'space-between',
    height: '100%',
  },
  itemContainer: {
    // flex: 1,
    justifyContent: 'space-around',
    // alignItems: 'center',
    // backgroundColor: '#FFEDC7',
  },
  itemTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    marginBottom: 10,
    // left: '20%',
    top: '80%',
    // width: 300,
    color: '#1B1B1B',
  },
  itemText: {
    fontFamily: 'Rubik',
    textAlign: 'center',
    // marginHorizontal: 35,
    color: '#1B1B1B',
    lineHeight: 20,
    top: '80%',
    // width: 400,
    // left: '10%',
  },
  bottomContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // marginHorizontal: 20,
    // paddingVertical: 20,
  },
});
