/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Like1, Message, Repeat} from 'iconsax-react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LikeAndComment = () => {
  const [isLiked, setIsLiked] = useState(false);
  // const [isCommented, setIsCommented] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.engagement}>
      <TouchableOpacity style={styles.EngagementFlex}>
        <Like1
          color={isLiked ? '#0074B7' : '#454C52'}
          size={isLiked ? 20 : 20}
          variant={isLiked ? 'Bold' : 'Regular'}
          style={{marginRight: 8}}
          onPress={handleLikeToggle}
        />
        <Text style={{color: isLiked ? '#0074B7' : '#454C52', fontSize: 16}}>
          Like
        </Text>
      </TouchableOpacity>
      <View style={styles.EngagementFlex}>
        <Message color="#454C52" size={20} style={{marginRight: 16}} />
        <Text style={{color: '#454C52', fontSize: 16}}>Comment</Text>
      </View>
      <View style={styles.EngagementFlex}>
        <Repeat color="#454C52" size={20} style={{marginRight: 8}} />
        <Text style={{color: '#454C52', fontSize: 16}}>Repost</Text>
      </View>
    </View>
  );
};

export default LikeAndComment;
