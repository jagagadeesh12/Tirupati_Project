import {Platform} from 'react-native';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';

// const res = await DocumentPicker.pick({
//   type: [DocumentPicker.types.images],
// });

export const pickImage = async () => {
  try {
    // if (Platform.OS === 'ios') {
    const response = await launchImageLibrary({
      selectionLimit: 1,
      mediaType: 'photo',
      // maxWidth: 1080,
      // maxHeight: 1080,
      // includeBase64: false,
    });
    //  {}, (response: ImagePickerResponse) => {
    if (response && response.assets) {
      const image = response?.assets[0];

      let res = {
        uri: image.uri,
        type: image.type,
        size: image.fileSize,
        name: image.fileName,
        fileCopyUri: image.uri,
        copyError: response.errorMessage,
      };
      return res;
    }
    // } else {
    //   const res = await DocumentPicker.pick({
    //     type: [DocumentPicker.types.images],
    //   });
    //   console.log('DocumentPicker res', res);
    //   if (res) {
    //     return res;
    //   }
    //   setFileDetails(res);
    //   uploadMedia({ result: res, onUpload, onUploadProgress });
    // }
  } catch (err) {
    console.log('Image Picker', err);
  }
};

export const androidFileFormat = (result: DocumentPickerResponse) => {
  let type = 'document';
  const imageFormats = ['.jpg', '.png', '.jpeg'];
  const videoFormats = ['.mp4', '.mov'];
  const audioFormats = ['.mp3', '.opus', '.m4a'];
  let fileName = result.name ? result.name : result.uri;

  if (fileName) {
    if (imageFormats.some(el => fileName.includes(el))) {
      type = 'image';
    } else if (videoFormats.some(el => fileName.includes(el))) {
      type = 'video';
    } else if (audioFormats.some(el => fileName.includes(el))) {
      type = 'audio';
    }
  }
  if (!fileName) {
    fileName = type;
  }
  const uriParts = fileName.split('.');
  const fileType = uriParts[uriParts.length - 1];

  return {
    type,
    fileType,
  };
};
