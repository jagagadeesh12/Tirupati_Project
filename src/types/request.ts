import {AxiosRequestConfig} from 'axios';

export type IUploadType = 'feed' | 'profile' | 'system' |'multi';
export interface IUploadFileRequest {
  data?: any;
  axiosConfig: AxiosRequestConfig;
}
