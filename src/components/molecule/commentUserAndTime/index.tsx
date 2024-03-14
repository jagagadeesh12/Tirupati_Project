import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {ICommentUserAndTime} from '../../../types';

const CommentUserAndTime = ({fullName, feedTime}: ICommentUserAndTime) => {
  return (
    <View style={styles.headerTitleContainer}>
      <Text style={styles.primaryText}>{fullName}</Text>
      <Text style={styles.time}>{feedTime}</Text>
    </View>
  );
};

export default CommentUserAndTime;
