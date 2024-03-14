import {create} from 'zustand';
import {AxiosProgressEvent} from 'axios';

import {IUserBearCreateFeed} from '../../types';
import {INITIAL_CREATE_FEED} from './initialState';

const useBearFeed = create<IUserBearCreateFeed>((set, get) => ({
  ...INITIAL_CREATE_FEED,
  onFeedUploadProgress: (uploadStatus: AxiosProgressEvent) =>
    set({uploadStatus}),
  onSuccess: () => {
    set({...INITIAL_CREATE_FEED});
  },
  onImage: image => set({image}),
}));
export default useBearFeed;
