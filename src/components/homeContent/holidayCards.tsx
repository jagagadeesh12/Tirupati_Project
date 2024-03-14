import {View, Text, Image} from 'react-native';
import React from 'react';

const HolidayCards = ({img, info, date}) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: 190,
        // width: 160,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginRight: 8,
        marginTop: 8,
      }}>
      <Image
        source={{
          uri: img,
        }}
        width={148}
        height={118}
        resizeMode="cover"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{borderRadius: 8}}
      />
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginTop: 8,
          fontSize: 14,
          fontWeight: '500',
          color: '#454C52',
        }}>
        {date}
      </Text>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginTop: 2,
          fontSize: 10,
          fontWeight: '400',
          color: '#454C52',
        }}>
        {info}
      </Text>
    </View>
  );
};

export default HolidayCards;
