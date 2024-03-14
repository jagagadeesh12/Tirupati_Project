import React from 'react';
import {TextInput, View, Text, KeyboardTypeOptions} from 'react-native';
import styles from './style';

const ReferInputText = ({
  value,
  onChangeText,
  placeholder,
  label,
  keyboardType,
  isMobile
}: {
  value?: string;
  onChangeText?: () => void;
  placeholder: string;
  label?: string;
  keyboardType?:KeyboardTypeOptions;
  isMobile?: boolean;
}) => {
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // marginVertical: 12,
          marginTop: 12,
        }}>
        <Text style={styles.txtContainer}>{label}</Text>
        <Text style={{color: 'red'}}>*</Text>
      </View>

      <TextInput
        style={styles.ReferInputTextcontainer}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={isMobile ? 10 : undefined}
      />
    </View>
  );
};

export default ReferInputText;
