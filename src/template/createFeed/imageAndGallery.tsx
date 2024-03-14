import {View, Text, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import {Camera, Gallery} from 'iconsax-react-native';

import styles from './styles';

interface props {
  onImagePicker: () => void;
  onLaunchCamera: () => void;
  containerPosition: number;
}

const ImageAndGallery = ({
  onLaunchCamera,
  onImagePicker,
  containerPosition,
}: props) => {
  return (
    <View
      style={[styles.ImageAndGalleryContainer, {bottom: containerPosition}]}>
      <TouchableOpacity style={styles.card} onPress={onLaunchCamera}>
        <Camera size="20" color="#0074B7" />
        <Text style={styles.cardText}>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={onImagePicker}>
        <Gallery size="20" color="#0074B7" />
        <Text style={styles.cardText}>Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageAndGallery;
