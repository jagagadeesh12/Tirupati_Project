import {
  IUseBearAuthState,
  IUseBearLoginState,
  IUseBearMasterData,
  IUseBearMasterDataState,
  IUserBearCreateFeedState,
  IUserBearFeedWithCommentState,
  IUserBearStoreFeed,
} from '../../types';
// import {getAllHolidays_getAllHolidays} from '../service/__generated__/getAllHolidays';

export const INITIAL_AUTH_STATE: IUseBearAuthState = {
  isCheckStateLogout: false,
  isSignIn: false,
  isShowFlash: true,
};

export const INITIAL_LOGIN_STATE: IUseBearLoginState = {
  isEmailSent: false,
  error: '',
  isLoading: false,
};

export const INITIAL_FEED_WITH_COMMENT_STATE: IUserBearFeedWithCommentState = {
  currentFeedId: '',
  commentFeedKVP: {},
  commentStack: [],
  rootFeed: null,
};

export const INITIAL_CREATE_FEED: IUserBearCreateFeedState = {
  uploadStatus: {
    loaded: 0,
    bytes: 0,
  },
  image: '',
};

export const FEED_DATA: IUserBearStoreFeed = {
  feedData: [],
};
export const INITIAL_MASTER_DATA: IUseBearMasterDataState = {
  holidaysByMonth: {},
  upComingHolidays: [],
  anniversariesByMonth: {},
  upcomingAnniversaries: [],
  birthdaysByMonth: {},
};
