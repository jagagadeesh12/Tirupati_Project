import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import styles from './style';

interface Props {
  title: string;
  placeholder: string;
  onChangeText: (e) => void;
  isError: boolean;
  error: string;
}

const CustomTextInput = ({
  title,
  placeholder,
  onChangeText,
  isError,
  error,
}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1, justifyContent: 'flex-start', marginTop: 36}}>
        <Text style={styles.labelStyle}>{title}</Text>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          autoCapitalize="none"
          // defaultValue={}
          placeholderTextColor={'#B3B3B3'}
          style={[
            styles.inputText,
            {
              borderColor: isError ? 'red' : '#E1E1E1',
            },
          ]}
        />
        {/* </View> */}
        {error ? <Text style={styles.errText}>{error}</Text> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomTextInput;
