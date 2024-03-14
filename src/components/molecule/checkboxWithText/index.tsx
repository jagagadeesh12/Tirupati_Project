import { Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {CustomCheckbox} from '../../atom';
import {ICustomCheckboxWithText} from '../../../types';
import styles from './style';

const CustomCheckboxWithText = ({
  label,
  isChecked,
  onChange,
}: ICustomCheckboxWithText) => {
  console.log('text', label);
  return (
    <TouchableOpacity style={styles.container}>
      <CustomCheckbox isChecked={isChecked} onChange={onChange} />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomCheckboxWithText;
