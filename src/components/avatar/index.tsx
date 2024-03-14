import {Image} from 'react-native';
import React from 'react';

const Avatar = ({ uri, width, height, borderRadius }) => {
  return (
    <Image
      source={{
        uri,
      }}
      resizeMode="cover"
      style={{width, height, borderRadius}}
    />
  );
};

export default Avatar;
