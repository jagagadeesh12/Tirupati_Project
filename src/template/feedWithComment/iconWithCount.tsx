import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import PerchIcon from '../../components/PerchIcon';
import {IIconWithCount} from '../../types';
import styles from './styles';

const IconWithCount = ({
  onPress,
  name,
  count,
  color,
  variant = 'Outline',
}: IIconWithCount) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconWithCountContainer}>
      <PerchIcon name={name} size={16} color={color} variant={variant} />
      {count ? <Text style={styles.countText}>{count}</Text> : null}
    </TouchableOpacity>
  );
};

export default IconWithCount;
