import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowDown2} from 'iconsax-react-native';
import {IFeedPostType} from '../../types';
import styles from './styles';
import Avatar from '../../components/atom/avatar';

const PostType = ({onToggle, selectedType, url}: IFeedPostType) => {
  return (
    <View style={styles.postTypeContainer}>
      <Avatar imageSource={url} width={42} height={42} borderRadius={60} />
      {/* <TouchableOpacity style={styles.postSelector} onPress={onToggle} disabled>
        <Text style={styles.text}>{selectedType}</Text>
        <ArrowDown2 size="20" color="#0074B7" />
      </TouchableOpacity> */}
    </View>
  );
};

export default PostType;
