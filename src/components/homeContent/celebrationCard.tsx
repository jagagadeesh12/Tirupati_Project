import {View, Text} from 'react-native';
import React from 'react';
import Avatar from '../atom/avatar';
import styles from './styles';

const CelebrationCard = ({img, info, name, date}) => {
  return (
    <View style={styles.Container}>
      <Avatar width={60} height={60} uri={img} borderRadius={60} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.content}>{info}</Text>
    </View>
  );
};

export default CelebrationCard;
