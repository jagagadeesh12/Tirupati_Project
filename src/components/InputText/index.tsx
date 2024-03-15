import React from 'react';
import {KeyboardTypeOptions, TextInput, View} from 'react-native';
import styles from './style';

export interface InputText {
  label?: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  handleOnchange: (e: string) => void;
  value: string;
}

const InputText = ({placeholder, keyboardType}: InputText) => {
  return (
    <View style={styles.inputwidth}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#B3B3B3'}
        keyboardType={keyboardType}
        style={styles.input}
      />
    </View>
  );
};

export default InputText;
