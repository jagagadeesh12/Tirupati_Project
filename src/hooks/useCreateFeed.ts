import {useEffect, useState} from 'react';
import {Alert, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {gql, useMutation} from '@apollo/client';

import {AUDIENCE} from '../utils';
import useLocalImage from './useLocalImage';
import {uploadImage, uploadImageWithProgress} from '../data';
import {useBearFeed, useBearUserDetails} from '../data/slices';
import useImage from './useImage';
import {androidFileFormat} from '../utils/attachmentHelper';

import {CreateFeedInput} from '../../__generated__/globalTypes';
import {CREATE_FEED, REPOST_FEED} from '../graphql/mutations/feed';
import useBearFeedData from '../data/slices/useBearFeedData';

const fallbackProfilePic = require('../assets/images/appProfilePic.png');

const useCreateFeed = () => {
  const {onImagePicker, onLaunchCamera, localAssets, onResetImage} =
    useLocalImage();
  const addParticularFeed = useBearFeedData(state => state.addParticularFeed);
  // const feedData = useBearFeedData(state => state.feedData);
  const {onFeedUploadProgress, onSuccess, onImage} = useBearFeed();
  const [postFeed, {data, loading, error}] = useMutation(CREATE_FEED, {
    onCompleted: onSuccess,
  });
  const [rePostFeed] = useMutation(REPOST_FEED);
  const [selectedGroupType, setGroup] = useState(AUDIENCE[0]);
  const [textPost, setTextPost] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const {currentUser} = useBearUserDetails();
  const navigation = useNavigation();
  const {updatedUrl} = useImage(currentUser?.profileImage, fallbackProfilePic);

  const toggleGroupModal = () =>
    setIsDropdownVisible(previousState => !previousState);

  const onGroupPicker = (type: string) => {
    setGroup(type);
  };

  const onPost = async (feedId: string) => {
    // debugger;
    let inp: CreateFeedInput = {};
    if (textPost) {
      inp.feed = textPost;
    }
    navigation.goBack();
    if (feedId) {
      rePostFeed({
        variables: {
          repostid: feedId,
          inp,
        },
        onCompleted(data, clientOptions) {
          addParticularFeed(data.repostFeed);
        },
      });
      return;
    }

    if (localAssets.length > 0) {
      const formData = new FormData();
      console.log(JSON.stringify(formData), 'this is first formdata');
      const tempAssets = [...localAssets];
      tempAssets.forEach(photo => {
        let imgUrl =
          Platform.OS === 'ios'
            ? photo.path?.replace('file://', '')
            : photo.path;
        imgUrl = imgUrl ? imgUrl : '';
        onImage(imgUrl);
        let fileName = photo.path.slice(photo.path.lastIndexOf('/') + 1);
        if (photo) {
          formData.append('files', {
            uri: imgUrl,
            name: fileName ? fileName : photo.filename,
            type: photo.mime,
          });
          // return {
          //   uri: imgUrl,
          //   name: fileName ? fileName : photo.filename,
          //   type: photo.mime,
          // };
        }
      });
      // formData.append('files', readyToUploadImage);
      // console.log(JSON.stringify(formData), 'this is formdata');
      const uploadedUrl = await uploadImageWithProgress(formData, 'multi', {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 10000,
        onUploadProgress: onFeedUploadProgress,
      });
      console.log('upload url', updatedUrl);
      if (updatedUrl) {
        inp.feedImage = uploadedUrl;
      }
    }
    const {data} = await postFeed({
      variables: {inp: inp},
    });
    addParticularFeed(data.createFeed);
  };
  const onCancelPost = () => {
    navigation.goBack();
  };

  let uri = '';
  // if (Platform.OS === 'ios') {
  //   uri = localAssets && localAssets.uri ? localAssets.uri : '';
  // } else {
  //   uri = localAssets && localAssets ? localAssets.uri : '';
  // }

  // console.log('isDropdownVisible', localAssets);
  return {
    selectedGroupType,
    onGroupPicker,
    toggleGroupModal,
    onCancelPost,
    onPost,
    textPost,
    setTextPost,
    isDropdownVisible,
    onLaunchCamera,
    onImagePicker,
    localAssets,
    onResetImage,
    currentUser,
    updatedUrl,
    uri,
  };
};

export default useCreateFeed;
