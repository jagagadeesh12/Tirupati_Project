import {View, Text, Image} from 'react-native';
import React from 'react';
import {SCREEN_WIDTH, WINDOW_WIDTH} from '../../../utils';
import {useImage} from '../../../hooks';
import styles from './styles';
import {CustomActivityIndicator} from '../../../components';

const fallbackImage = require('../../../assets/images/appProfilePic.png');

const FeedImage = ({feedImage}: {feedImage: string | null}) => {
  const {isImageLoading, updatedUrl} = useImage(feedImage, fallbackImage);
  if (!feedImage) {
    return null;
  }
  return (
    <View style={styles.feedImageContainer}>
      <View style={{}}>
        <Image
          source={updatedUrl}
          width={WINDOW_WIDTH}
          height={WINDOW_WIDTH}
          blurRadius={1}
          resizeMode="cover"
        />
      </View>
      <View style={styles.loaderContainer}>
        <CustomActivityIndicator size={40} isLoading={isImageLoading} />
      </View>
    </View>
  );
};

export default FeedImage;
