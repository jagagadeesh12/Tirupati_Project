/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
const Badge = () => {
  return (
    <>
      <View style={{}}>
        <View style={styles.container}>
          <View style={styles.rectangle}></View>
          <View style={styles.trapezium}></View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: 32,
    height: 22,
    marginTop: -7,
    backgroundColor: '#0074B7',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginHorizontal: 10,
  },
  trapezium: {
    borderBottomWidth: 20,
    borderBottomColor: 'transparent',
    borderLeftWidth: 28,
    borderLeftColor: 'transparent',
    borderRightWidth: 26,
    borderRightColor: 'transparent',
    borderTopWidth: 37,
    borderTopColor: '#0074B7',
    position: 'absolute',
    top: -22,
  },
});

export default Badge;
