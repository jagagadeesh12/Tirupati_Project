import React, {useState, useEffect} from 'react';
import {FloatingLabelInput} from 'react-native-floating-label-input';

import {IRenderAddress} from '../../../types';
import styles, {customLabelStyles} from './style';

const RenderAddress = ({
  addressItem: {label, key, keyboardType},
  onChangeAddress,
  value,
}: IRenderAddress) => {
  const [isFocused, setFocused] = useState(false);
  const onChangeText = (text: string) => {
    if (key === 'postalcode') {
      const sixDigitValue = text.replace(/[^0-9]/g, '').slice(0, 6);
      onChangeAddress(sixDigitValue, key);
    } else if (key === 'city' || key === 'state' || key === 'country') {
      const validatedText = text.replace(/[^A-Za-z\s]/g, '');
      onChangeAddress(validatedText, key);
    } else {
      onChangeAddress(text, key);
    }
  };
  const onFocus = () => {
    if (value) {
      setFocused(false);
    } else {
      setFocused(true);
    }
  };
  return (
    <FloatingLabelInput
      label={label}
      placeholderTextColor="#B9B9B9"
      containerStyles={styles.containerStyles}
      value={value}
      selectionColor="#B9B9B9"
      customLabelStyles={customLabelStyles}
      // labelProps={styles.labelProps}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      isFocused={isFocused}
      onFocus={onFocus}
      maxLength={key === 'postalcode' ? 6 : undefined}
    />
  );
};

export default RenderAddress;
