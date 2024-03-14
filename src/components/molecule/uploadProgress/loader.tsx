import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';

const Loader = () => {
  return (
    <>
      {/* Loader Line */}
      <LinearGradient
        style={styles.loaderLine}
        colors={[
          'rgba(255, 255, 255, 0.00)',
          'rgba(0, 0, 0, 0.00)',
          'rgba(0, 69, 223, 0.80)',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
      />

      <View style={styles.glowCycle}>
        <BlurView
          style={styles.blur}
          blurType="light"
          blurAmount={2}
          reducedTransparencyFallbackColor="white"
        />
        {/* Your additional content for the glow cycle goes here */}
      </View>

      {/* Another Layout */}
      <View style={styles.anotherLayout}>
        <BlurView
          style={styles.blur}
          blurType="light"
          blurAmount={2}
          reducedTransparencyFallbackColor="white"
        />
        {/* Your additional content for another layout goes here */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  // loaderContainer: {
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  loaderLine: {
    width: 280,
    height: 8,
    // borderTopRightRadius: 4,
    // borderBottomRightRadius: 4,
    flexShrink: 0,
    zIndex: 1,
  },
  glowCycle: {
    position: 'absolute',
    width: 100,
    height: 8,
    zIndex: 8,
    transform: [{rotate: '270deg'}],
    borderRadius: 8,
    flexShrink: 0,
    justifyContent: 'center',
    overflow: 'hidden', // Ensure the blur doesn't bleed outside the circle
  },
  anotherLayout: {
    position: 'absolute',
    width: 40,
    height: 8,
    zIndex: 3,
    borderRadius: 99,
    flexShrink: 0,
    overflow: 'hidden', // Ensure the blur doesn't bleed outside the circle
  },
  blur: {
    // ...StyleSheet.absoluteFillObject,
  },
});

export default Loader;
