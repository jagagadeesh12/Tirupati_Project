import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment-timezone';
import {Like1, Message} from 'iconsax-react-native';
import {useBearUserDetails} from '../../data/slices';

const RenderComment = ({
  item,
  index,
  onPressComment = () => {},
  isSubComment = false,
  onPressLike = () => {},
}: {
  item: any;
  index: number;
  onPressComment?: any;
  isSubComment?: boolean;
  onPressLike?: any;
}) => {
  // const [commentData, setCommentData] = useState(item);
  const [childCommentData, setChildCommentData] = useState([]);

  const {user, updatedAt, createdAt, feed, likes, feedId} = item;

  const currentUser = useBearUserDetails(state => state.currentUser);
  const [currentFeedId, setCurrentFeedId] = useState(feedId);
  const time = moment(createdAt).fromNow();
  const isLiked = likes?.includes(currentUser?.userId);
  const likeCount = likes?.length;
  const totalComment = childCommentData?.length;

  return (
    <View style={{paddingVertical: 8, flexDirection: 'row'}}>
      {isSubComment && (
        <View
          style={{
            left: 16,
            top: 16,
            borderColor: '#CED2D6',
            borderStyle: 'dashed',
            borderWidth: 1,
            borderRadius: 1,
          }}
        />
      )}
      <Image
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
          marginRight: 8,
        }}
        source={
          user?.profileImage
            ? {uri: item?.user?.profileImage}
            : require('../../assets/images/appProfilePic.png')
        }
      />
      <View style={{marginTop: 6}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              marginRight: 8,
            }}>
            {user?.fullName}
          </Text>
          <Text style={{fontSize: 10, color: '#202124'}}>{time}</Text>
        </View>
        <Text style={{marginTop: 8}}>{feed}</Text>
        <View style={{flexDirection: 'row', marginTop: 8}}>
          {!isSubComment && (
            <TouchableOpacity
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginRight: 24,
              }}
              onPress={() => onPressComment(item, childCommentData)}>
              <Message color="#454C52" size={20} style={{marginRight: 8}} />
              {/* <Text style={{}}>{totalComment || 0}</Text> */}
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}
            onPress={() => onPressLike(item, index)}>
            <Like1
              color={isLiked ? '#0074B7' : '#454C52'}
              size={20}
              variant={isLiked ? 'Bold' : 'Outline'}
              style={{marginRight: 8}}
            />
            <Text
              style={[
                // styles.text,
                {
                  // color: isLiked ? '#0074B7' : '#454C52',
                },
              ]}>
              {likeCount || 0}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RenderComment;
