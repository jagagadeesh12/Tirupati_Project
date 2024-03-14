/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const ProfileStack = ({allResponsesCount}) => {
  return (
    <View style={{margin: 8}}>
      <View style={styles.responseContainer}>
        <Text style={styles.text}>{allResponsesCount} responses</Text>
      </View>
    </View>
  );
};

export default ProfileStack;
