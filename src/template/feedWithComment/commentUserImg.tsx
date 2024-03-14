import {View, Text} from 'react-native';
import React from 'react';

import {useImage} from '../../hooks';
import {Avatar} from '../../components';

const fallbackImage = require('../../assets/images/appProfilePic.png');

const CommentUserImg = ({
  profileImage,
}: {
  profileImage: string | null | undefined;
}) => {
  const {updatedUrl} = useImage(profileImage, fallbackImage);
  // console.log('updatedUrl', updatedUrl);
  return (
    <Avatar imageSource={updatedUrl} width={32} height={32} borderRadius={60} />
  );
};

export default CommentUserImg;
