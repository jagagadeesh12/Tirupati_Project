import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {IReplyToFeed} from '../../../types';
import {Icon} from 'iconsax-react-native';
import styles from './styles';
import PerchIcon from '../../PerchIcon';

const ReplyToFeed = ({
  onChangeText,
  onSend,
  containerPosition,
  replyTo,
  replyText,
}: IReplyToFeed) => {
  const textOpacity = replyText.length > 0 ? 1 : 0.5;
  return (
    <>
      {containerPosition ? (
        <View style={{flex: 1, bottom: 18, backgroundColor: '#ffffff'}}>
          <Text style={styles.replyTo}>Replying to @{replyTo}</Text>
        </View>
      ) : null}
      <View>
        <View style={styles.container}>
          <View style={{width: '90%'}}>
            <TextInput
              placeholder="Add your comment"
              placeholderTextColor={'#B9B9B9'}
              value={replyText}
              onChangeText={onChangeText}
              style={{bottom: 2}}
            />
          </View>
          {/* <TouchableOpacity onPress={onSend} style={{opacity: 0.3}}> */}
          <TouchableOpacity
            onPress={onSend}
            style={{opacity: textOpacity, marginLeft: 10, bottom: 2}}>
            <PerchIcon name="Send" color="#0074B7" size={28} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ReplyToFeed;
