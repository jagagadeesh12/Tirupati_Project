import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Seperator = ({seperator}: any) => {
  return <View style={styles.seperator}></View>;
};
export default Seperator;
const styles = StyleSheet.create({
  seperator: {
    borderWidth: 0.5,
    borderRadius: 1,
    // borderColor: 'black',
    // marginHorizontal: 20,
    marginTop:16,
    borderColor: '#CED2D6',
  },
});
