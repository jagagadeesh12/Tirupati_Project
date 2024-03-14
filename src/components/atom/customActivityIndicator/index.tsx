import {Dimensions, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native';

import color, {APP_COLOR} from '../../../theme/color';
import styles from './styles';

const CustomActivityIndicator = ({
  isLoading,
  size = 20,
}: {
  isLoading: boolean;
  size?: number;
}) => {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={size} color={color.LIGHT_MODE.litePrimary} />
      </View>
    );
  }
  return null;
};

export default CustomActivityIndicator;
