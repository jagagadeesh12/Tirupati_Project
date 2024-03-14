import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Animated, Easing} from 'react-native';

const texts = [
  'Hello 👋',
  'Namaste 🙏',
  'Hola 👋',
  // 'Bonjour 👋',
  'Ciao 👋',
  'Konnichiwa 🙋🏻‍♂️'
];

const SlideUpTextAnimation = ({fullName=''}:{fullName:string|undefined}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateY = new Animated.Value(50);
  const opacity = new Animated.Value(0);
  // const {currentUser} = useHome();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    opacity.setValue(1);
    translateY.setValue(3);

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start();
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.text,
          {
            opacity,
            transform: [
              {
                translateY,
              },
            ],
          },
        ]}>
        {texts[currentIndex]}
      </Animated.Text>
      <Text style={styles.fullNameText}>{fullName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  //   title: {
  //     fontSize: 24,
  //     fontWeight: 'bold',
  //     // marginBottom: 20,
  //   },
  fullNameText: {
    marginTop: -5,
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 16,
    color: '#202124',
  },
  text: {
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '400',
    color: '#0074B7',
    lineHeight: 40,
    // marginBottom: 10,
  },
});

export default SlideUpTextAnimation;
