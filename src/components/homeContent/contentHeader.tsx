/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';

const ContentHeader = ({title}: any) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 14, color: '#454C52', fontWeight: '500'}}>
        {title}
      </Text>
      <TouchableHighlight>
        <Text style={{fontSize: 10, color: '#454C52'}}>See more</Text>
      </TouchableHighlight>
    </View>
  );
};

export default ContentHeader;
