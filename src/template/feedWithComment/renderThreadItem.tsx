import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import moment from 'moment';

import {Avatar, CommentUserAndTime, LikeComponent} from '../../components';
import {IRenderComment, IRenderFeedItem} from '../../types';
import {useImage} from '../../hooks';
import styles from './styles';
import CommentUserImg from './commentUserImg';
import {useBearUserDetails} from '../../data/slices';
import {useMutation} from '@apollo/client';
import PerchIcon from '../../components/PerchIcon';
import IconWithCount from './iconWithCount';
import color from '../../theme/color';

const RenderThreadComment = ({
  item,
  onComment,
  toggleLike,
  isLastIndex,
}: IRenderComment) => {
  console.log('isLastIndex', isLastIndex);
  const {user, updatedAt, feed, likes, likeCount} = item;
  const time = moment(updatedAt).fromNow();
  // const {currentUser} = useBearUserDetails();
  const onPressLike = () => {
    toggleLike(item.feedId);
  };
  const onCommentPress = () => {
    onComment(item);
  };
  const isLikedByCurrentUser = false;
  // likes && likeCount.length > 0 ? likes.includes(currentUser?.userId) : false;

  return (
    <>
      <View
        style={[styles.commentItemContainer, {marginTop: 0, marginBottom: 0}]}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <CommentUserImg profileImage={user.profileImage} />
          {!isLastIndex ? <View style={styles.line} /> : null}
        </View>
        <View style={{flex: 1, marginLeft: 8, paddingBottom: 15,marginTop:4}}>
          <CommentUserAndTime fullName={user?.fullName} feedTime={time} />

          <Text style={styles.replyText}>{feed}</Text>
          <View style={styles.iconsInComments}>
            <IconWithCount
              onPress={onCommentPress}
              name={'Message'}
              color={color.LIGHT_MODE.text}
            />
            <IconWithCount
              onPress={onPressLike}
              name={'Like1'}
              variant={isLikedByCurrentUser ? 'Bold' : 'Outline'}
              count={likes?.length}
              color={
                isLikedByCurrentUser
                  ? color.LIGHT_MODE.primary
                  : color.LIGHT_MODE.text
              }
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default RenderThreadComment;
