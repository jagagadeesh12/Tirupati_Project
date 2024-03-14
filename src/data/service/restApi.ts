import axios, {AxiosRequestConfig} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {API_URL, BASE_URL, UPLOAD_BASE_URL} from '../../utils/urls';
import {IUploadType} from '../../types';
import {APP_CONSTANT, clearAsyncStorage, setToken} from '../../utils';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const loginService = async (destination: string) => {
  try {
    const res = await axiosInstance.post(API_URL.login, {destination});
    return res.data;
  } catch (e) {
    return e;
  }
};

export const refreshToken = async () => {
  try {
    const RefreshToken = await AsyncStorage.getItem(APP_CONSTANT.REFRESH_TOKEN);
    if (RefreshToken) {
      const res = await axiosInstance.post(
        API_URL.refreshToken,
        {},
        {
          headers: {
            Authorization: `Bearer ${RefreshToken}`,
          },
        },
      );
      if (res && res.data?.access_token && res.data?.refresh_token) {
        const isSetToken = await setToken(
          res.data.access_token,
          res.data.refresh_token,
        );
        return isSetToken ? res.data?.access_token : null;
      }
    }
    return null;
  } catch (e) {
    if (e?.response?.data?.statusCode === 403) {
      clearAsyncStorage();
    }
    return null;
  }
};

export const magicLinkService = async (token: string) => {
  try {
    const res = await axios.get(BASE_URL + API_URL.magicLink + token);
    //  const res = await axiosInstance.post(API_URL.refreshToken);
    if (res.status === 200) {
      await setToken(res.data?.access_token, res.data?.refresh_token);
      return res.data;
    }
    return null;
  } catch (e) {
    console.log('err', e);
    return null;
  }
};

export const uploadImage = async (req: FormData, type: IUploadType) => {
  try {
    const response = await fetch(`${UPLOAD_BASE_URL}${type}`, {
      method: 'POST',
      body: req,
    });

    const responseBody = await response.text();
    console.log('responseBody', responseBody);
    return responseBody;
  } catch (e) {
    console.error('uploadImage error', JSON.stringify(e));
    return null;
  }
};

//check  AxiosRequestConfig to setConfig
export const uploadImageWithProgress = async (
  req: FormData,
  type: IUploadType,
  config: AxiosRequestConfig,
) => {
  const res = await axios.post(`${UPLOAD_BASE_URL}${type}`, req, config);
  if (res.status === 201) {
    return res.data;
  }
  return res;
};
