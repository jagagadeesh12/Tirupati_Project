import {ArrowLeft2, Calendar, Note1} from 'iconsax-react-native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  setisList: (e: boolean) => void;
}

const ListofScreen = ({setisList}: Props) => {
  return (
    <View>
      <View style={styles.downarrow}>
        <ArrowLeft2 size="20" color="#454C52" />
        <Text style={styles.holidays}>Holidays</Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity
          onPress={() => {
            setisList(true);
          }}>
          <View style={styles.iconflex}>
            <Note1 size="20" color="#454C52" />
            <Text style={styles.list}>List</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setisList(false);
          }}>
          <View style={styles.calender}>
            <Calendar size="20" color="#454C52" />
            <Text style={styles.list}>Calendar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ListofScreen;

export const styles = StyleSheet.create({
  downarrow: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 16,
  },
  holidays: {
    marginLeft: 14,
    color: '#454C52',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Rubik',
  },
  icons: {
    color: '#454C52',
    flexDirection: 'row',
    marginLeft: 112,
    marginTop: 33,
  },
  calender: {
    marginHorizontal: 24,
    flexDirection: 'row',
  },
  iconflex: {
    flexDirection: 'row',
  },
  list: {
    marginLeft: 6.5,
    color: '#454C52',
  },
});
