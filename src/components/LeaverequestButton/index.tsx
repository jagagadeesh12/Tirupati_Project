import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export interface RequestLeaveType {
  RequestLeave: string;
  onpress: () => void;
}
const LeaveRequestButtonRendering = ({
  RequestLeave,
  onpress,
}: RequestLeaveType) => {
  return (
    <View>
      <TouchableOpacity style={styles.RequestButton} onPress={onpress}>
        <Text style={styles.RequestLeave}>{RequestLeave}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LeaveRequestButtonRendering;

const styles = StyleSheet.create({
  RequestButton: {
    backgroundColor: '#0074B7',
    borderRadius: 8,
    height: 48,
    // padding:10,
    // marginBottom: 20,
  },
  RequestLeave: {
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Rubik',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingTop: 12,
  },
});
