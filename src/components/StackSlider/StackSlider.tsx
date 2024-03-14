import React, {memo, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import PdfViewer from '../../screens/profile/PdfViewer/PdfViewer';
import imagepath from '../../constant/imagepath';
const {width, height} = Dimensions.get('screen');
const overflowHeight = 70;
const spacing = 10;
const itemWidth = width * 0.45;
const itemHeight = itemWidth * 1.5;
interface StackSliderProps {
  navigation?: any;
  data?: any;
  onPressMediaBox?: any;
}
const StackSlider: React.FC<StackSliderProps> = ({data = []}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimated = useRef(new Animated.Value(0)).current;

  const policiesList = [
    {
      id: 1,
      name: 'Leave policy',
      image: imagepath.leave,
    },
    {
      id: 2,
      name: 'Team Lunch Policy',
      image: imagepath.lunch,
    },
    {
      id: 3,
      name: 'Conference room Policy',
      image: imagepath.conference,
    },
    {
      id: 4,
      name: 'Course Reimbursement Policy',
      image: imagepath.Reimbursment,
    },
    {
      id: 5,
      name: 'Prevention of Sexual Harassment (POSH) Policy',
      image: imagepath.posh,
    },
    {
      id: 6,
      name: 'Office Transport Boarding Cab Rules and Regulations Policy',
      image: imagepath.transport,
    },
    {
      id: 6,
      name: 'Work From Office Policy',
      image: imagepath.wfo,
    },
  ];
  const createAnimation = () => {
    const springConfig = {
      damping: 20,
      mass: 1,
      stiffness: 100,
      overshootClamping: true,
      restDisplacementThreshold: 0.1,
      restSpeedThreshold: 0.1,
      useNativeDriver: true,
    };
    return Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      ...springConfig,
    });
  };
  useEffect(() => {
    // console.log(currentIndex, 'this is the current Index');
    const animation = createAnimation();
    animation.start();
    return () => {
      animation.stop();
    };
  }, [currentIndex]);
  const setActiveIndex = (activeIndex: number) => {
    setCurrentIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
  };
  const onHandlerStateChangeLeft = (ev: any) => {
    if (ev.nativeEvent.state === State.END) {
      if (currentIndex === policiesList.length - 1) return;
      setActiveIndex(currentIndex + 1);
    }
  };
  const onHandleStateChangeRight = (ev: any) => {
    if (ev.nativeEvent.state === State.END) {
      if (currentIndex === 0) return;
      setActiveIndex(currentIndex - 1);
    }
  };
  const cellRendererComponent = ({
    item,
    index,

    style,
    children,
    ...props
  }: {
    item: any;
    index: any;
    style: any;
    // image: any;
    children: any;
  }) => {
    const zIndex = -Math.abs(currentIndex - index);
    return (
      <View style={[style, {zIndex}]} key={index} {...props}>
        {children}
      </View>
    );
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    const inputRange = [index - 1, index, index + 1];
    const translateX = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [50, 0, -50],
    });
    const scale = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [0.85, 1, 0.85],
    });
    const opacity = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
    });
    return (
      <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [{translateX}, {scale}],
            opacity,
          },
        ]}>
        <ImageBackground
          imageStyle={{resizeMode: 'stretch', borderRadius: 14}}
          source={item.image}
          //   activeOpacity={1}
          //   onPress={() => onPressMediaBox('add', index)}
          style={styles.uploadContainer}>
          {/* <Image
            source={require('../assets/images/upload-image.png')}
            style={styles.uploadImage}
          /> */}
          {/* <Text style={styles.uploadText}>{item.name}</Text> */}
        </ImageBackground>
      </Animated.View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <PdfViewer
        header={policiesList[currentIndex].name}
        policyIndex={currentIndex}
      />
      <FlingGestureHandler
        key="left"
        direction={Directions.LEFT}
        onHandlerStateChange={onHandlerStateChangeLeft}>
        <FlingGestureHandler
          key="right"
          direction={Directions.RIGHT}
          onHandlerStateChange={onHandleStateChangeRight}>
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              flex: 1,
              height: 150,
            }}>
            <FlatList
              data={policiesList}
              horizontal
              inverted
              scrollEnabled={false}
              removeClippedSubviews={false}
              contentContainerStyle={styles.contentContainer}
              CellRendererComponent={cellRendererComponent}
              keyExtractor={(_, index) => String(index)}
              renderItem={renderItem}
            />
          </View>
        </FlingGestureHandler>
      </FlingGestureHandler>
    </SafeAreaView>
  );
};
export default memo(StackSlider);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // height: overflowHeight * 4,
    marginBottom: 24,
  },
  contentContainer: {
    justifyContent: 'center',
    flex: 1,
    padding: spacing * 2,
    // position: 'absolute',
  },
  animatedView: {
    position: 'absolute',
    left: -itemWidth / 2,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.stroke,
  },
  closeButton: {
    position: 'absolute',
    zIndex: 2,
    top: -11,
    right: -8,
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  media: {
    height: itemHeight,
    borderRadius: 14,
    width: itemWidth,
  },
  uploadContainer: {
    width: itemWidth,
    height: itemHeight,
    backgroundColor: '#E8E8E8',
    // padding: 8,
    borderRadius: 14,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  uploadImage: {
    width: '100%',
    height: '50%',
  },
  uploadText: {
    // flex: 1,
    textAlign: 'center',
    color: colors.text,
    fontSize: 14,
    marginTop: 25,
    fontFamily: fontFamily.regular,
  },
  mediaIcon: {
    position: 'absolute',
    zIndex: 2,
    bottom: 8,
    right: 8,
  },
});