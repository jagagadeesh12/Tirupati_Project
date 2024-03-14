import {useNavigation} from '@react-navigation/native';
import {useCallback, useRef, useState} from 'react';
import {Animated} from 'react-native';

const useCarousel = ({ON_BOARD}) => {
  const flatListRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const onScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const onViewableItemsChanged = useCallback(({viewableItems}) => {
    // console.log('viewableItems', viewableItems);
    setCurrentSlide(viewableItems[0]?.index);
  }, []);

  const visibilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const onSkip = () => {
    // console.log('okSkop');
    navigation.navigate('SignIn', {someData: 'sdsd'});
  };

  const onNext = () => {
    if (currentSlide < ON_BOARD.length - 1) {
      flatListRef.current.scrollToIndex({index: currentSlide + 1});
      setCurrentSlide(currentSlide + 1);
    }
  };

  const onPrev = () => {
    if (currentSlide > 0) {
      flatListRef.current.scrollToIndex({index: currentSlide - 1});
      setCurrentSlide(currentSlide - 1);
    }
  };

  return {
    onScroll,
    onViewableItemsChanged,
    visibilityConfig,
    currentSlide,
    scrollX,
    onSkip,
    onNext,
    flatListRef,
    onPrev,
  };
};

export default useCarousel;
