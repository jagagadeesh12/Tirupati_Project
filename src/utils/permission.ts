import {Alert, Platform} from 'react-native';
import {
  PERMISSIONS,
  Permission,
  RESULTS,
  checkMultiple,
  openSettings,
  request,
  requestMultiple,
} from 'react-native-permissions';

export const checkStoragePermission = async () => {
  let permissions = [];
  let result = false;
  if (Platform.OS === 'android') {
    permissions = [
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ];
  } else {
    permissions = [PERMISSIONS.IOS.PHOTO_LIBRARY];
  }
  let res = await checkMultiplePermissions(permissions).then(result => {
    return result;
  });
  return res;
};

export const checkMultiplePermissions = async (permissions: Permission[]) => {
  let res = await checkMultiple(permissions).then((result: any) => {
    if (result) {
      let allReqRes = 0;
      Object.keys(result).forEach(permission => {
        if (result[permission] === RESULTS.GRANTED) {
          allReqRes++;
        }
      });
      return allReqRes === permissions.length;
    }
  });
  return res;
};

export const requestSinglePermission = async (permission: Permission) => {
  let res = await request(permission).then((result: any) => {
    return permissionResult(result);
  });
  return res;
};

export const requestMultiplePermission = async (permission: Permission[]) => {
  let res = await requestMultiple(permission).then((result: any) => {
    let allReqRes = 0;
    if (result) {
      Object.keys(result).forEach(permissionKey => {
        if (result[permissionKey] === RESULTS.GRANTED) {
          allReqRes++;
        }
      });
      return allReqRes === permission.length;
    }
    return false;
  });
  return res;
};

const permissionResult = (result: string) => {
  if (result === RESULTS.UNAVAILABLE) {
    Alert.alert('Please check device settings ');
  }
  if (result === RESULTS.BLOCKED && Platform.OS === 'ios') {
    openSettings().catch(() => console.warn('cannot open settings'));
  }
  if (result === RESULTS.GRANTED) {
    return true;
  } else {
    return false;
  }
};

export const requestStoragePermissions = async () => {
  let permissions = [];
  if (Platform.OS === 'android') {
    permissions = [
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ];
  } else {
    permissions = [PERMISSIONS.IOS.PHOTO_LIBRARY];
  }
  let res = await requestMultiplePermission(permissions);
  return res;
};
