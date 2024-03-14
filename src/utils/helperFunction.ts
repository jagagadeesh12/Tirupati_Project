import {Platform} from 'react-native';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

// import {jwtDecode} from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment-timezone';

// import 'core-js/stable/atob';

import {APP_CONSTANT} from './constant';
// import {refreshToken} from '../data';

export const getToken = async () => {
  let token = await AsyncStorage.getItem(APP_CONSTANT.ACCESS_TOKEN);
  if (token) {
    // const {exp = 0} = jwtDecode(token);
    // subtracts a minute to account for latency
    // const expirationTime = exp * 1000 - 60000;
    // if (Date.now() >= expirationTime) {
    //   token = await refreshToken();
    // }
  }
  return token;
};

export const getRefreshToken = async () => {
  const token = await AsyncStorage.getItem(APP_CONSTANT.REFRESH_TOKEN);
  return token;
};

export const setToken = async (token: string, refresh: string) => {
  console.log('set token', token, '===', refresh);
  await AsyncStorage.setItem(APP_CONSTANT.ACCESS_TOKEN, token);
  await AsyncStorage.setItem(APP_CONSTANT.REFRESH_TOKEN, refresh);
  return true;
};

export const checkPhotoLibraryPermission = async () => {
  const permission =
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
      : PERMISSIONS.IOS.PHOTO_LIBRARY;

  try {
    const result = await check(permission);
    handlePermissionResult(result, permission);
    return result;
  } catch (error) {
    console.error(
      'Error checking photo library permission:-checkPhotoLibraryPermission',
      error,
    );
    throw error;
  }
};

export const requestNativePermission = async reqPermission => {
  try {
    const result = await request(reqPermission);
    console.log(
      'requestNativePermission result - requestNativePermission',
      result,
    );
    return result;
  } catch (error) {
    console.error(
      'Error requesting permission: - requestNativePermission',
      error,
    );
    throw error;
  }
};

const handlePermissionResult = (result, permission) => {
  switch (result) {
    case RESULTS.UNAVAILABLE:
      console.log(
        'This feature is not available (on this device / in this context)-handlePermissionResult',
      );
      break;
    case RESULTS.DENIED:
      requestNativePermission(permission);
      console.log(
        'The permission has not been requested / is denied but requestable-handlePermissionResult',
      );
      break;
    case RESULTS.LIMITED:
      console.log(
        'The permission is limited: some actions are possible-handlePermissionResult',
      );
      break;
    case RESULTS.GRANTED:
      console.log('The permission is granted-handlePermissionResult');
      break;
    case RESULTS.BLOCKED:
      console.log(
        'The permission is denied and not requestable anymore-handlePermissionResult',
      );
      break;
    default:
      break;
  }
};

// import {
//   check,
//   request,
//   PERMISSIONS,
//   RESULTS,
//   PermissionStatus,
//   Platform,
// } from 'react-native';

// // type PermissionType = 'camera' | 'photo' | 'location' | '...'; // Add more as needed

// interface PermissionResult {
//   type: PermissionType;
//   status: PermissionStatus;
// }

// const mapPermissionTypeToConstant = (type: PermissionType): string => {
//   switch (type) {
//     case 'camera':
//       return Platform.OS === 'android'
//         ? PERMISSIONS.ANDROID.CAMERA
//         : PERMISSIONS.IOS.CAMERA;
//     case 'photo':
//       return Platform.OS === 'android'
//         ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
//         : PERMISSIONS.IOS.PHOTO_LIBRARY;
//     case 'location':
//       return Platform.OS === 'android'
//         ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
//         : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
//     // Add more cases for other permissions as needed
//     default:
//       throw new Error(`Unsupported permission type: ${type}`);
//   }
// };

// const requestPermission = async (
//   type: PermissionType,
// ): Promise<PermissionResult> => {
//   const permissionType = mapPermissionTypeToConstant(type);

//   try {
//     const result = await check(permissionType);

//     if (result === RESULTS.GRANTED || result === RESULTS.BLOCKED) {
//       return {type, status: result};
//     } else {
//       const requestResult = await request(permissionType);
//       return {type, status: requestResult};
//     }
//   } catch (error) {
//     console.error(`Error handling ${type} permission:`, error);
//     throw error;
//   }
// };

// export default requestPermission;

//To check whether duration between given date and currentDate is greater than or equal to given hrs
export const validateDuration = (date: Date, hrs: number) => {
  'worklet';
  const givenDate = new Date(date);
  const currentDate = new Date();
  const durationInMillis: number = currentDate.getTime() - givenDate.getTime();
  const durationInHours = durationInMillis / (1000 * 60 * 60);

  return durationInHours >= hrs;
};

export const clearAsyncStorage = async () => {
  await AsyncStorage.setItem(APP_CONSTANT.ACCESS_TOKEN, '');
  await AsyncStorage.setItem(APP_CONSTANT.REFRESH_TOKEN, '');
  // await AsyncStorage.clear();
};

export const formatRelativeTime = (dateString: string): string => {
  const currentDate: Date = new Date();
  const targetDate: Date = new Date(dateString);
  const timeDifference: number = currentDate.getTime() - targetDate.getTime();

  // Calculate the relative time in minutes, hours, and days
  const minutes: number = Math.floor(timeDifference / (1000 * 60));
  const hours: number = Math.floor(timeDifference / (1000 * 60 * 60));
  const days: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // Use Intl.RelativeTimeFormat to format the relative time
  const rtf: Intl.RelativeTimeFormat = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
  });

  if (minutes < 60) {
    return rtf.format(-minutes, 'minute');
  } else if (hours < 24) {
    return rtf.format(-hours, 'hour');
  } else if (days < 7) {
    return rtf.format(-days, 'day');
  } else {
    // If more than a week, display the actual date
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    return targetDate.toLocaleDateString('en-US', options);
  }
};

export const formatLikeCount = (likeCount: number) => {
  if (likeCount < 1000) {
    return likeCount.toString(); // Return the count as is for counts less than 1000
  } else if (likeCount < 1000000) {
    // Display as '1k', '2k', etc. for counts between 1000 and 999999
    return (likeCount / 1000).toFixed(1) + 'k';
  } else {
    // Display in millions as '1M', '2.5M', etc. for counts 1,000,000 and above
    return (likeCount / 1000000).toFixed(1) + 'M';
  }
};

export const formatBytes = (bytes: any, decimals = 0) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const stringifyWithCircular = (obj: any) => {
  const seen = new WeakSet();

  return JSON.stringify(obj, function (key, value) {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        // Circular reference found, discard key
        return '[Circular Reference]';
      }

      // Store value in the set
      seen.add(value);
    }
    return value;
  });
};

export const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        resolve(position);
      },
      error => {
        reject(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
};

export const convertUTCtoTime = (timeString: string) => {
  // Parse the UTC timestamp
  const utcDate = new Date(timeString);

  // Format the time as desired (12-hour clock with AM/PM)
  const formattedTime: string = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(utcDate);

  return formattedTime;
};

// export const getTime = (date: Date) => {
//   // return new Intl.DateTimeFormat('en-US', {
//   //   hour: 'numeric',
//   //   minute: 'numeric',
//   //   hour12: true,
//   // }).format(date);
// };

export const formatDate = (utcDateTimeString: string): string => {
  const dateObject = new Date(utcDateTimeString);

  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  };

  return new Intl.DateTimeFormat('en-US', dateFormatOptions).format(dateObject);
};

// export const formatTime = (utcDateTimeString: string): string => {
//   const dateObject = new Date(utcDateTimeString);

//   const timeFormatOptions: Intl.DateTimeFormatOptions = {
//     hour: '2-digit',
//     minute: '2-digit',
//     hour12: true,
//     timeZone: 'UTC',
//   };

//   return new Intl.DateTimeFormat('en-US', timeFormatOptions).format(dateObject);
// };

export const joinStrings = (str: string, currentValue: string) =>
  str + currentValue;

export const isObjectAsValues = (obj: Object) => {
  const values = Object.values(obj);
  if (values.length === 0) {
    return false;
  }
  return values.reduce(joinStrings).length > 0;
};

export const convertGMTtoLocal = (gmtDate: Date): Date => {
  // Get the UTC time in milliseconds
  const utcTime = gmtDate.getTime();

  // Get the local time zone offset in minutes
  const localTimeZoneOffset = gmtDate.getTimezoneOffset();

  // Calculate the local time using the offset
  const localTime = new Date(utcTime + localTimeZoneOffset * 60 * 1000);

  return localTime;
};

export const combineDateAndTime = (date: Date, timeStr: string): Date => {
  // Parse the time string
  const [hours, minutes, seconds] = timeStr.split(':');

  // Create a new Date object to avoid modifying the original date in-place
  const combinedDateTime = new Date(date);

  // Set the time on the new date object
  combinedDateTime.setUTCHours(parseInt(hours, 10));
  combinedDateTime.setUTCMinutes(parseInt(minutes, 10));
  combinedDateTime.setUTCSeconds(parseInt(seconds, 10));
  console.log('combinedDateTime', combinedDateTime);
  return combinedDateTime;
};

export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout | undefined;

  return function (...args: any[]) {
    const context = this;

    const later = function () {
      timeout = undefined;
      func.apply(context, args);
    };

    clearTimeout(timeout as NodeJS.Timeout);
    timeout = setTimeout(later, wait);
  };
};

export const convertUtcToLocal = (utcTimestamp: string) => {
  const utcDate = new Date(utcTimestamp);
  const localOffset = new Date().getTimezoneOffset();
  const localTimestamp = new Date(utcDate.getTime() - localOffset * 60000);
  const formattedLocalDate = localTimestamp
    .toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    })
    .replace(/(\d)(?=(\d{2})+(\D|$))/g, '$1' + 'th');

  return {formattedLocalDate};
};

export const formatTime = (timeString: string) => {
  const [hours, minutes, seconds] = timeString.split(':');
  const hour = parseInt(hours, 10);
  const amPm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = (hour % 12 === 0 ? 12 : hour % 12)
    .toString()
    .padStart(2, '0');

  return `${formattedHour}:${minutes} ${amPm}`;
};

export const getExperienceSuffix = (dateOfJoining: any) => {
  const currentDate = moment().toISOString().slice(5, 10);
  const userDate = dateOfJoining.slice(5, 10);
  let experience;
  if (currentDate == userDate)
    experience = moment().diff(dateOfJoining, 'years');
  else experience = moment().diff(dateOfJoining, 'years') + 1;
  let result = `${experience}th`;
  if (experience === 1) result = '1st';
  else if (experience === 2) result = '2nd';
  else if (experience === 3) result = '3rd';

  return result + ' Anniversary';
};
