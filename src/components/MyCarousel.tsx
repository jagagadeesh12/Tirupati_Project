import {View, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
// import Carousel, {Pagination} from 'react-native-snap-carousel';
import {SCREEN_WIDTH} from '../utils';

const MyCarousel = ({
  feedImage,
  renderItem,
  imgContainerStyle = {},
}: {
  feedImage: any[];
  renderItem?: any;
  imgContainerStyle?: {};
}) => {
  // console.log(feedImage, 'this is feedimage')
  const [index, setIndex] = useState(0);

  const [activeSlide, setActiveSlide] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;

  const _renderItem = ({item: uri, index}: {item: string; index: number}) => {
    return (
      <TouchableWithoutFeedback>
        <Image
          source={{uri}}
          style={{...styles.feedImage, ...imgContainerStyle}}
          blurRadius={1}
        />
      </TouchableWithoutFeedback>
    );
  };

  // Use the index

  return (
    <View>
      {/* <Carousel
        //   ref={(c) => { this._carousel = c; }}

        data={feedImage}
        renderItem={renderItem ? renderItem : _renderItem}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH}
        onSnapToItem={(index: number) => setActiveSlide(index)}
      /> */}
      {/* <Pagination
        dotsLength={feedImage.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      /> */}
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  feedImage: {
    width: '100%',
    height: SCREEN_WIDTH,
    resizeMode: 'stretch',
    marginTop: 12,
  },
});
