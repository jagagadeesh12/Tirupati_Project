import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import color from '../../../theme/color';
import PerchIcon from '../../PerchIcon';

interface props {
  text1: string;
  isError: boolean;
  iconName?: string;
}

const ToastMessage = ({text1, isError, iconName}: props) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isError
            ? color.LIGHT_MODE.error
            : color.LIGHT_MODE.success,
        },
      ]}>
      {iconName ? (
        <PerchIcon
          name={iconName}
          size={20}
          color="#FFFFFF"
          style={{marginRight: 10}}
        />
      ) : null}
      <Text style={styles.text}>{text1}</Text>
    </View>
  );
};

export default ToastMessage;
