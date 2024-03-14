import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {Like1, Message, Repeat} from 'iconsax-react-native';

import {ILikeCommentAndRepost} from '../../../types';
import useLikeCommentPost from './useLikeCommentRepost';
import styles from './styles';

const LikeCommentAndRepost = (props: ILikeCommentAndRepost) => {
  const {
    isLiked,
    onPressLike,
    onPressComment,
    isPostFeed,
    likesCount,
    commentCount,
    repostCount,
    // likeColor,
  } = useLikeCommentPost(props);
  return (
    <View
      style={[
        styles.iconWithNameContainer,
        // isPostFeed ? styles.flexStart : {},
      ]}>
      {/* <LikeComponent onPressLike={onPressLike } isLiked={isLiked} label={'Like'} /> */}
      <TouchableOpacity style={styles.touchableContainer} onPress={onPressLike}>
        <Like1
          color={isLiked ? '#0074B7' : '#454C52'}
          size={20}
          variant={isLiked ? 'Bold' : 'Outline'}
          // style={{marginRight: 8}}
        />
        <Text
          style={[
            styles.text,
            {
              color: isLiked ? '#0074B7' : '#454C52',
            },
          ]}>
          {isPostFeed ? likesCount : 'Like'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={onPressComment}>
        <Message color="#454C52" size={20} />
        <Text style={styles.text}>
          {Number(commentCount) === commentCount ? commentCount : 'Comment'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.touchableContainer, {opacity: 0.3}]}
        disabled
        onPress={onPressLike}>
        {/* <Repeat color="#454C52" size={20} style={{}} />
        <Text style={styles.text}>
          {Number(repostCount) === repostCount ? repostCount : 'Repost'}
        </Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default LikeCommentAndRepost;
