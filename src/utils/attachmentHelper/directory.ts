import {Alert, Platform} from 'react-native';
import {DocumentPickerResponse} from 'react-native-document-picker';
import RNFS, {DownloadFileOptions} from 'react-native-fs';
import AlertMessages from '../../Utils/AlertMessages';

import {checkStoragePermission, requestStoragePermissions} from '../permission';
import {APP_CONSTANT} from '../constant';

interface getPathProps {
  name: string;
  type: string;
}

export const createDirectory = () => {
  try {
    let path = '';
    if (Platform.OS === 'android') {
      path = RNFS.ExternalStorageDirectoryPath + APP_CONSTANT.FOLDER_NAME;
    } else {
      path = RNFS.DocumentDirectoryPath + APP_CONSTANT.FOLDER_NAME;
    }
    RNFS.mkdir(path).then(res => {
      RNFS.mkdir(path + 'Images');
      RNFS.mkdir(path + 'Videos');
      RNFS.mkdir(path + 'Documents');
      RNFS.mkdir(path + 'Audios');
      RNFS.mkdir(path + 'Other');
    });
  } catch (err) {
    console.log('createDirectory ', err);
  }
};

export const checkDirectory = async () => {
  var check = await checkStoragePermission();
  if (!check) {
    var permissionGranted = await requestStoragePermissions();
    if (permissionGranted) {
      createDirectory();
    } else {
      Alert.alert(AlertMessages.GENERIC_PERMISSION);
      return false;
    }
  } else {
    let folderExist = await RNFS.exists(
      RNFS.DocumentDirectoryPath + APP_CONSTANT.FOLDER_NAME,
    );
    if (Platform.OS === 'android') {
      folderExist = await RNFS.exists(
        RNFS.ExternalStorageDirectoryPath + APP_CONSTANT.FOLDER_NAME,
      );
    }
    var permissionGranted = await requestStoragePermissions();
    if (!folderExist && permissionGranted) {
      createDirectory();
    }
  }
  return true;
};

export const isFileExists = async (path: string) => {
  let res = await RNFS.exists(path);
  return res;
};

export const getFilePath = (file: getPathProps) => {
  let path = 'Other/' + file.name;
  if (file.type.includes('image')) {
    path = 'Images/' + file.name;
  } else if (file.type.includes('video')) {
    path = 'Videos/' + file.name;
  } else if (file.type.includes('document')) {
    path = 'Documents/' + file.name;
  } else if (file.type.includes('audio')) {
    path = 'Audios/' + file.name;
  }
  if (Platform.OS === 'android') {
    return (
      RNFS.ExternalStorageDirectoryPath +
      APP_CONSTANT.FOLDER_NAME +
      path +
      file.name
    );
  }
  return (
    RNFS.DocumentDirectoryPath + APP_CONSTANT.FOLDER_NAME + path + file.name
  );
};

export const copyToLocalFolder = async (
  file: DocumentPickerResponse,
  callback: () => void,
) => {
  let isFolderExist = await checkDirectory();
  if (isFolderExist && file && file.fileCopyUri) {
    let destPath = getFilePath(file);
    try {
      RNFS.copyFile(file.fileCopyUri, destPath).then(res => callback());
    } catch (err) {
      console.log('err in copying file', err);
    }
  }
};

export const downloadToLocalFolder = (data: DownloadFileOptions) => {
  return RNFS.downloadFile(data).promise;
};
