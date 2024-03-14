import {View, Text} from 'react-native';
import React from 'react';

const SwipeComp = () => {
  return (
    <View
      style={{
        borderRadius: 60,
        backgroundColor: '#16306060',
        // opacity:0.15,
        flex: 1,
        margin: 8,
        padding: 20,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Text>Swipe to Check-in</Text>
    </View>
  );
};

export default SwipeComp;
