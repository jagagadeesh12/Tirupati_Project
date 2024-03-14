import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageURISource,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {CloseCircle} from 'iconsax-react-native';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import {SCREEN_WIDTH} from '../../utils';
interface Props {
  onResetImage: () => void;
  localAssets: ImageOrVideo[];
  uri?: string | undefined | null;
}
const ImageViewer = ({onResetImage, uri, localAssets}: Props) => {
  // console.log(localAssets, 'thisi ss ithe local assetas');
  return (
    <ScrollView style={{}} horizontal showsHorizontalScrollIndicator={false}>
      {localAssets.map((item: ImageOrVideo, index: number) => {
        return (
          <View style={styles.imageInFeedContainer}>
            <Image style={styles.imageInFeed} source={{uri: item.path}} />
            {/* <View style={styles.delImgInCreateFeed}> */}
            <TouchableOpacity
              style={styles.delImgInCreateFeed}
              onPress={() => onResetImage(index)}>
              <CloseCircle size="18" color="#FFF" />
            </TouchableOpacity>
            {/* </View> */}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ImageViewer;
