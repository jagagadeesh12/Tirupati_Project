import React from 'react-native';
import {Text, View, Image} from 'react-native';
import {AddButtonType} from '../../../types/component';
import styles from './style';

const EmptyScreen = ({Content, imageSource}: AddButtonType) => {
  return (
    <View style={styles.MainContainer}>
      <Image source={imageSource} style={styles.ImageStyles} />
      <Text style={styles.TitleContent}>{Content}</Text>
    </View>
  );
};
export default EmptyScreen;
