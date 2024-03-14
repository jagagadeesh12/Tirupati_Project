import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import color from '../../theme/color';
import styles from './style';

interface Props {
  title: string;
  placeholder: string;
  onChangeText: (e) => void;
  isError: boolean;
  error: string;
}

const InputField = ({
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
          placeholderTextColor={color.DARK_MODE.liteText}
          style={[
            styles.inputText,
            {
              borderColor: isError
                ? color.LIGHT_MODE.error
                : color.LIGHT_MODE.strokes,
            },
          ]}
        />
        {/* </View> */}
        {error ? <Text style={styles.errText}>{error}</Text> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InputField;
