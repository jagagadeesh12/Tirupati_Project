import React from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableWithoutFeedback,
  StatusBar,
  Animated,
} from 'react-native';

import SlideItem from './slideItem';
import PaginationIndicators from '../dottedPageIndicator';
import {ON_BOARD} from '../../utils/constant';
import styles from './styles';
import BtnView from './btnView';
import PerchIcon from '../PerchIcon';
import color from '../../theme/color';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {
  scrollX: Animated.Value;
  onViewableItemsChanged: ({viewableItems}: any) => void;
  visibilityConfig: {
    itemVisiblePercentThreshold: number;
  };
  currentSlide: number;
  onScroll: (event: any) => void;
  onNext: () => void;
  flatListRef: React.MutableRefObject<null>;
  onPrev: () => void;
  onSkip: () => void;
}

const Carousel = ({
  onScroll,
  onViewableItemsChanged,
  visibilityConfig,
  currentSlide,
  scrollX,
  onNext,
  flatListRef,
  onPrev,
  onSkip,
}: Props) => {
  return (
    <SafeAreaView>
      <View style={styles.carouselContainer}>
        {currentSlide != ON_BOARD.length - 1 ? (
          <TouchableWithoutFeedback onPress={onSkip}>
            <View
              style={[
                styles.btnContainer,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  justifyContent: 'flex-end',
                  paddingTop: StatusBar.currentHeight,
                },
              ]}>
              <Text
                style={[
                  styles.textBtn,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    marginBottom: 1,
                    color: color.DARK_MODE.primary,
                    marginRight: 4,
                  },
                ]}>
                Skip
              </Text>
              <PerchIcon
                name="ArrowRight2"
                size={16}
                color={color.DARK_MODE.primary}
                style={{marginTop: -6}}
              />
            </View>
          </TouchableWithoutFeedback>
        ) : null}
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View style={{}}>
            <FlatList
              ref={flatListRef}
              data={ON_BOARD}
              // renderItem={({ item }) => <SlideItem item={item} />}
              renderItem={SlideItem}
              horizontal
              pagingEnabled
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              onScroll={onScroll}
              onViewableItemsChanged={onViewableItemsChanged}
              viewabilityConfig={visibilityConfig}
              initialScrollIndex={currentSlide}
            />
            <PaginationIndicators
              data={ON_BOARD}
              scrollX={scrollX}
              index={currentSlide}
            />
          </View>
          <View style={styles.buttonContainer}>
            <BtnView
              currentSlide={currentSlide}
              onPrev={onPrev}
              onNext={onNext}
              onSkip={onSkip}
              listLength={ON_BOARD.length}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Carousel;
