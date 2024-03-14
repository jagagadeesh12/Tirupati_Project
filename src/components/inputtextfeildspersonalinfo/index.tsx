import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {Lock1} from 'iconsax-react-native';

interface IPersonalInfo {
  label: string;
  text: string;
}
const InputText = ({label, text}: IPersonalInfo) => {
  return (
    <View>
      <View style={styles.view}>
        <View style={styles.content}>
          <Text style={styles.backTitle}>{label}</Text>
          <Lock1 size="20" color="gray" style={styles.icon} />
        </View>
        <Text style={styles.inputText}>{text}</Text>
      </View>
    </View>
  );
};
export default InputText;
