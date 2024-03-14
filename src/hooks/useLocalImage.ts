import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {checkPhotoLibraryPermission} from '../utils';
import {useEffect, useState} from 'react';
import {
  androidCameraNGalleryPermission,
  pickImage,
} from '../utils/attachmentHelper';
import {Platform} from 'react-native';
import ImagePicker, {
  ImageCropPicker,
  ImageOrVideo,
} from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';

const useLocalImage = () => {
  const [localAssets, setLocalAssets] = useState<ImageOrVideo[] | []>([]);
  const onLaunchCamera = async (options = {}) => {
    if (localAssets.length >= 10) {
      Toast.show({
        type: 'error',
        text1: 'Maximum 10 image is allowed at a time.',
      });
      return;
    }
    const isPermissionGranted = await androidCameraNGalleryPermission();
    if (isPermissionGranted || Platform.OS === 'android') {
      ImagePicker.openCamera({
        width: 1080,
        height: 1080,
        cropping: true,
        // freeStyleCropEnabled: true,
        // cropperCircleOverlay: true,
        compressImageQuality: 0.8,
        ...options,
      }).then(image => {
        console.log(image, 'this is image from camera');
        if (image.size <= 5 * 1024 * 1024) {
          setLocalAssets([...localAssets, image]);
        } else {
          Toast.show({
            type: 'error',
            text1: 'File size should be less than 5MB',
          });
        }
        // setLocalAssets(imageArray)
        // SetchangedImage(image.path);
        // setUploadedStatus(true);
      });
    }
    // const result: ImagePickerResponse = await launchCamera({
    //   mediaType: 'photo',
    // });
    // console.log('result', result);
    // setLocalAssets(result);
  };
  const onImagePicker = async (options = {}) => {
    if (localAssets.length >= 10) {
      Toast.show({
        type: 'error',
        text1: 'Maximum 10 image is allowed at a time.',
      });
      return;
    }
    const isPermissionGranted = await androidCameraNGalleryPermission();
    if (isPermissionGranted || Platform.OS === 'android') {
      ImagePicker.openPicker({
        width: 1080,
        height: 1080,
        cropping: true,
        // freeStyleCropEnabled: true,
        // cropperCircleOverlay: true,
        compressImageQuality: 0.8,
        multiple: true,
        ...options,
      }).then(imageArray => {
        imageArray?.map(image => {
          if (image.size > 5 * 1024 * 1024) {
            Toast.show({
              type: 'error',
              text1: 'Image size should be less than 5MB',
            });
            return;
          }
        });
        let tempAssets = [...localAssets, ...imageArray];
        tempAssets = tempAssets.slice(0, 10);
        setLocalAssets(tempAssets);

        // SetchangedImage(image.path);
        // setUploadedStatus(true);
      });
    }
    // console.log('res', res);
    // setLocalAssets(res);

    // console.log('onImagePicker result', result);
  };

  // useEffect(() => {
  // if (Platform.OS === 'android') {
  //   checkPhotoLibraryPermission();
  // }
  // }, []);

  const onResetImage = (index: number) => {
    // console.log(localAssets, 'this is local assets')
    let tempAssets = [...localAssets];
    tempAssets.splice(index, 1);
    setLocalAssets([...tempAssets]);
  };
  return {onLaunchCamera, onImagePicker, localAssets, onResetImage};
};

export default useLocalImage;
