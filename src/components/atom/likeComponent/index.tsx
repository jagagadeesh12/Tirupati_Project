import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {Like1} from 'iconsax-react-native';

import {ILikeComp} from '../../../types';
import styles from './styles';

const LikeComponent = ({isLiked, onPressLike, label}: ILikeComp) => {
  return (
    <TouchableOpacity style={styles.touchableContainer} onPress={onPressLike}>
      <Like1
        color={isLiked ? '#0074B7' : '#454C52'}
        size={20}
        variant={isLiked ? 'Bold' : 'Outline'}
        style={{marginRight: 8}}
      />
      {label ? (
        <Text style={{color: isLiked ? '#0074B7' : '#454C52', fontSize: 16}}>
          {label}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default LikeComponent;
