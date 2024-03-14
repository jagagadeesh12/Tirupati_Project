import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {IFabButton} from '../../../types';
import {Add} from 'iconsax-react-native';
// import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const FabButton = ({onPress}: IFabButton) => {
  // const bottomTabBarHeight = useBottomTabBarHeight();
  return (
    <TouchableOpacity style={styles.fabButtonImg} onPress={onPress}>
      <View style={styles.fabContainer}>
        <Add size="24" color="#FEFEFE" />
      </View>
    </TouchableOpacity>
  );
};
export default FabButton;
