import { Image } from 'react-native';
import React from 'react';
import { IAvatar } from '../../../types';
import imagepath from '../../../constant/imagepath';

const Avatar = ({ imageSource, width, height, borderRadius }: IAvatar) => {
  return (
    <Image
      source={imageSource ? imageSource : imagepath.defaultImage}
      defaultSource={imagepath.defaultImage}
      resizeMode="cover"
      style={{ width, height, borderRadius }}
    />
  );
};

export default Avatar;
