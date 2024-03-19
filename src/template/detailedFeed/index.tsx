/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import Header from './header';
import {IFeed} from '../../screens/BottomTab/Feed/dummy';
import LikeAndComment from '../../components/likeAndComment';
import ProfileStack from './ProfileStack';
import feed from '../../screens/BottomTab/Feed';
import {LikeCommentAndRepost} from '../../components';

const {width} = Dimensions.get('screen');
// const DetailedFeed=({feed}:any)=>{

const DetailedFeed = ({
  name,
  time,
  profilePic,
  feed,
  postType,
  feedImage,
  lastLikedBy,
  likeCount,
  respondedProfile,
  allResponsesCount,
}: IFeed) => {
  return (
    <View>
      <Header name={name} time={time} profilePic={profilePic} />
      <Text style={{fontSize: 14}}>{feed}</Text>
      {postType === 'Image' && feedImage ? (
        <Image
          source={{uri: feedImage}}
          width={width - 40}
          height={192}
          style={{borderRadius: 8, marginTop: 16}}
        />
      ) : null}

      <LikeCommentAndRepost
        isLikedByUser={false}
        toggleLike={function (): void {
          throw new Error('Function not implemented.');
        }}
        onComment={function (): void {
          throw new Error('Function not implemented.');
        }}
        onRepost={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Text>
        Liked by {lastLikedBy} and {likeCount} others
      </Text>
      <ProfileStack
        respondedProfile={respondedProfile}
        allResponsesCount={allResponsesCount}
      />
    </View>
  );
};

export default DetailedFeed;
