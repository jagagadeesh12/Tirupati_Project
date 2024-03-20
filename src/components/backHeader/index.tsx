import React from 'react';
import {ArrowLeft2} from 'iconsax-react-native';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {IBackHeader} from '../../types';
import imagepath from '../../constant/imagepath';

const BackHeader = ({
  navigation,
  title,
  onPressBack,
  image,
  containerStyle = {},
  onPressMenu = () => {},
}: IBackHeader) => {
  return (
    // <View>
    <View
      // style={styles.backButton}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingHorizontal: 14,
        // paddingVertical: 10,
        ...containerStyle,
      }}>
      <TouchableOpacity
        style={{flexDirection: 'row', marginLeft: -4, alignItems: 'center'}}
        onPress={onPressBack ? onPressBack : () => navigation.goBack()}>
        <ArrowLeft2 size="24" color="#454C52" />
        <Text style={styles.backTitle}>{title}</Text>
      </TouchableOpacity>
      {image && (
        <TouchableOpacity onPress={onPressMenu}>
          <Image style={{tintColor: 'black'}} source={image} />
        </TouchableOpacity>
      )}
    </View>
    // </View>
  );
};

export default BackHeader;
