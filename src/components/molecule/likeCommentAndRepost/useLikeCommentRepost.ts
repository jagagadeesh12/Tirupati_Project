import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {ILikeCommentAndRepost} from '../../../types';

const useLikeCommentPost = ({
  isLikedByUser,
  onComment,
  toggleLike,
  feedId,
  ...rest
}: ILikeCommentAndRepost) => {
  // const [isLiked, setIsLiked] = useState(isLikedByUser);

  const onPressLike = () => {
    // setIsLiked(!isLiked);
    toggleLike(feedId);
  };

  return {
    ...rest,
    // isLiked,
    onPressLike,
    onPressComment: onComment,
    // likeColor: isLiked ? '#0074B7' : '#454C52',
  };
};

export default useLikeCommentPost;
