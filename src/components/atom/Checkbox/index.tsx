import React from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';

import color, {APP_COLOR} from '../../../theme/color';
import {ICustomCheckbox} from '../../../types';
import styles from './style';

const CustomCheckbox = ({isChecked, onChange}: ICustomCheckbox) => {
  const toggleCheckbox = () => {
    onChange(!isChecked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <View
        style={[
          styles.checkBox,
          {
            borderColor: isChecked
              ? color.LIGHT_MODE.primary
              : color.LIGHT_MODE.text,
          },
        ]}>
        {isChecked ? <View style={styles.checkMark} /> : null}
      </View>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
