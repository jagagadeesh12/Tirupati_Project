import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {IFabButton} from '../../../types';
import {Add} from 'iconsax-react-native';

const FabButton = ({onPress}: IFabButton) => {
  return (
    <TouchableOpacity style={styles.fabButtonImg} onPress={onPress}>
      <View style={styles.fabContainer}>
        <Add size="24" color="#FEFEFE" />
      </View>
    </TouchableOpacity>
  );
};
export default FabButton;
