import {AxiosProgressEvent} from 'axios';
import {getProfileUsers_getUserById} from '../data/service/__generated__/getProfileUsers';
import {lastCheckedInOut_lastCheckedInOut} from '../graphql/queries/__generated__/lastCheckedInOut';
import {paginatedFeeds_paginatedFeeds} from '../graphql/queries/__generated__/paginatedFeeds';
import {
  IAnniversaryByMonth,
  IHolidaysByMonth,
  IUpComingAniversary,
  IUserTiming,
  IUserTimingCard,
} from './component';
import {getAllHolidays_getAllHolidays} from '../data/service/__generated__/getAllHolidays';
import {getAllAnniversaries_getAllUpcomingAnniversaries} from '../graphql/queries/__generated__/getAllAnniversaries';
export interface IUseBearMagicLinkState {
  isVerified: Boolean;
  error: any;
}

export interface IUseBearMagicLink extends IUseBearMagicLinkState {
  verifyMagicLink: (e: string) => void;
}

export interface IUseBearAuthState {
  isCheckStateLogout: boolean;
  isSignIn: boolean;
  isShowFlash: boolean;
}

export interface IUseBearAuth extends IUseBearAuthState {
  setSignIn: (e: string) => void;
  setConfig: () => void;
  logout: () => void;
}

export interface IUseBearLoginState {
  isEmailSent: boolean;
  error: string;
  isLoading: boolean;
}

export interface IUserBearLogin extends IUseBearLoginState {
  login: (req: string) => void;
  reset: () => void;
}
export interface IUserBearSwipeState {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  userTimeTrackerList: IUserTiming[];
  isCheckedIn: boolean;
  timeSheetId: string | null;
  isDisabledSwipe: boolean;
  skills: [] | null;
}

export interface IUserBearSwipe extends IUserBearSwipeState {
  onCheckIn: () => void;
  onCheckOut: () => void;
  setDisableSwipe: (b: boolean) => void;
  setUserTimeTracker: (data: any) => void;
  setUpCheckInDetails: (e: lastCheckedInOut_lastCheckedInOut) => void;
}

export interface IUserBearUserState {
  currentUser: getProfileUsers_getUserById | null;
}
export interface IUserBearUser extends IUserBearUserState {
  setCurrentUser: (e: getProfileUsers_getUserById) => void;
  setProfileImage: (img: string) => void;
  setSkills: (data: any) => void;
}

//KVP key-value pair
export interface commentFeedKVP {
  [key: string]: paginatedFeeds_paginatedFeeds;
}

export interface IUserBearFeedWithCommentState {
  currentFeedId: string;
  commentStack: string[];
  commentFeedKVP: commentFeedKVP;
  rootFeed: paginatedFeeds_paginatedFeeds | null;
}

export interface IUserBearFeedWithComment
  extends IUserBearFeedWithCommentState {
  setRoot: (rootFeed: paginatedFeeds_paginatedFeeds) => void;
  setCommentStack: (currentFeed: paginatedFeeds_paginatedFeeds) => void;
  popFromCommentStack: () => void;
}

// export interface IUserBearCreateFeedState {
//   feedsInProgress: paginatedFeeds_paginatedFeeds[];
// }

// export interface IUserBearCreateFeed extends IUserBearCreateFeedState {
//   set
// }

export interface IUserBearCreateFeedState {
  uploadStatus: AxiosProgressEvent;
  image: string;
}

export interface IUserBearCreateFeed extends IUserBearCreateFeedState {
  onFeedUploadProgress: (uploadStatus: AxiosProgressEvent) => void;
  onSuccess: () => void;
  onImage: (url: string) => void;
}

export interface IUserBearStoreFeed {
  feedData: [];
  myFeedData: [];
  mySavedFeedData: [];
  setFeedData: (data: []) => void;
  setMyFeedData: (data: []) => void;
  setMySavedFeedData: (data: []) => void;
  toggleSaveFeed: (feed: any, shouldSave: boolean) => void;
  addParticularFeed: (data: {}) => void;
  updateParticularFeed: (data: {}, feedId: string) => void;
  deleteParticularFeed: (feedId: string) => void;
  saveParticularFeed: (feedId: string) => void;
}

export interface IUserBearStoreExperience {
  experienceData: [];
  setExperienceData: (data: []) => void;
  updateParticularExperience: (data: [], experienceId: string) => void;
  addExperience: (data: {}) => void;
}
export interface IUseBearMasterDataState {
  holidaysByMonth: IHolidaysByMonth;
  upComingHolidays: getAllHolidays_getAllHolidays[];
  anniversariesByMonth: IAnniversaryByMonth;
  birthdaysByMonth: IAnniversaryByMonth;
  upcomingAnniversaries: IUpComingAniversary[];
}

export interface IUseBearMasterData extends IUseBearMasterDataState {
  setHolidaysByMonth: (e: getAllHolidays_getAllHolidays[]) => void;
  setAnniversaryObject: (
    e: getAllAnniversaries_getAllUpcomingAnniversaries[],
  ) => void;
}
