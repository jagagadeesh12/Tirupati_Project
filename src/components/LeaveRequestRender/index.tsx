import React from 'react';
import {LeaveRequest} from '../../types/component';
import {StyleSheet, Text, View} from 'react-native';

const LeaveRequestcard = ({label, value}: LeaveRequest) => {
  return (
    <View style={styles.MainView}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};
export default LeaveRequestcard;

const styles = StyleSheet.create({
  label: {
    color: '#B9B9B9',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Rubik',
  },
  value: {
    fontWeight: '400',
    fontSize: 12,
    fontFamily: 'Rubik',
    color: '#202124',
    marginVertical: 0,
  },
  MainView: {
    // marginHorizontal: 20,
    paddingTop: 16,
  },
});
