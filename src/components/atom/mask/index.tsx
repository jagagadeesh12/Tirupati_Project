import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

import {IMask} from '../../../types';
import CustomActivityIndicator from '../customActivityIndicator';
import styles from './styles';
import color from '../../../theme/color';

const Mask = ({isLoading}: IMask) => {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={color.LIGHT_MODE.litePrimary} />
      </View>
    );
  }
  return null;
};

export default Mask;
