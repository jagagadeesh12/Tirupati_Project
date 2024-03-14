import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, FlatList} from 'react-native';
import {APP_CONSTANT, ON_BOARD} from '../utils/constant';
import {SCREENS} from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCarousel = () => {
  const flatListRef = useRef<FlatList | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  // useEffect(() => {
  //   AsyncStorage.getItem(APP_CONSTANT.ON_BOARD_FLAG).then(res => {
  //     console.log('res', res);
  //   });
  // }, []);

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: false},
  );

  const onViewableItemsChanged = useCallback(({viewableItems}) => {
    setCurrentSlide(viewableItems[0]?.index || 0);
  }, []);

  const onSkip = async () => {
    await AsyncStorage.setItem(APP_CONSTANT.ON_BOARD_FLAG, 'true');
    navigation.navigate(SCREENS.SIGN_IN);
  };

  const scrollToIndex = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index});
      setCurrentSlide(index);
    }
  };

  const onNext = () => {
    const nextSlide = currentSlide + 1;
    if (nextSlide < ON_BOARD.length) {
      scrollToIndex(nextSlide);
    }
  };

  const onPrev = () => {
    const prevSlide = currentSlide - 1;
    if (prevSlide >= 0) {
      scrollToIndex(prevSlide);
    }
  };

  return {
    onScroll,
    onViewableItemsChanged,
    currentSlide,
    scrollX,
    onSkip,
    onNext,
    flatListRef,
    onPrev,
  };
};

export default useCarousel;
