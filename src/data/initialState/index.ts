import {IUserBearSwipeState, IUserBearUserState} from '../../types';
import {USER_TIMINGS} from '../../utils';

export const INITIAL_STATE_SWIPE: IUserBearSwipeState = {
  checkInDate: null,
  checkOutDate: null,
  userTimeTrackerList: [...USER_TIMINGS],
  isCheckedIn: false,
  timeSheetId: null,
  isDisabledSwipe: false,
  skills: null,
};

export const INITIAL_STATE_USER: IUserBearUserState = {
  currentUser: null,
};
