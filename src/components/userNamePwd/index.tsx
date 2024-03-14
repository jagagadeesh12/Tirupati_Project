import {View, Text, TextInput} from 'react-native';
import React from 'react';
import color from '../../theme/color';

const UserNamePwd = () => {
  return (
    <View>
      <InputField
        title="Username"
        placeholder="example@perch.com"
        onChangeText={() => {}}
      />
      <InputField
        title="Password"
        placeholder="******"
        onChangeText={() => {}}
      />
      <Text style={{textAlign: 'right', color: '#3B78EF', marginTop: 16}}>
        Forget Password?
      </Text>
    </View>
  );
};

const InputField = ({title, placeholder, onChangeText}) => {
  return (
    <View style={{marginTop: 36}}>
      <Text>{title}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={color.DARK_MODE.liteText}
        // defaultValue={}
        // style={{borderBottomWidth: 0.5, marginRight: 20}}
        style={{
          borderWidth: 1,
          borderColor: color.DARK_MODE.strokes,
          borderRadius: 8,
        }}
      />
    </View>
  );
};

export default UserNamePwd;
