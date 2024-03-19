import {IListOfScreens} from '../types';
import Loader from './loader';
import OnBoard from './onBoarding';
import SignIn from './signIn';
import WelcomeScreen from './welcom';
import SignUp from './SignUP';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import { from } from '@apollo/client';

export {default as OnBoard} from './onBoarding';
export {default as SignIn} from './signIn';
export {default as Loader} from './loader';
export {default as WelcomeScreen} from './welcom';
export {default as SignUp} from './SignUP';
export {default as ForgotPassword} from './ForgotPassword';
export {default as ResetPassword} from './ResetPassword';

export const SCREENS: {[key: string]: never} = {
  ONBOARD: 'OnBoard',
  SIGN_IN: 'SignIn',
  LOADER: 'Loader',
  WELCOME_SCREENS: 'WelcomeScreen',
  SIGN_UP: 'SignUp',
  FORGOT_PASSWORD: 'ForgotPassword',
  RESET_PASSWORD: 'ResetPassword',
};

export const STACKED_SCREENS: IListOfScreens[] = [
  {
    name: SCREENS.NOTIFICATION,
    component: Notification,
  },
  {
    name: SCREENS.CREATE_FEED,
    component: CreateFeed,
  },
  {
    name: SCREENS.SEE_MORE_HOLIDAYS,
    component: SeeMoreHolidays,
  },

  {
    name: SCREENS.ADD_SKILLTYPE,
    component: AddSkillType,
  },
  {
    name: SCREENS.FEED_WITH_COMMENTS,
    component: FeedWithComment,
  },
];

export const PRE_LOGIN_STACK: IListOfScreens[] = [
  // {
  //   name: SCREENS.ONBOARD,
  //   component: OnBoard,
  // },

  {
    name: SCREENS.WELCOME_SCREENS,
    component: WelcomeScreen,
  },
  {
    name: SCREENS.SIGN_IN,
    component: SignIn,
  },
  {
    name: SCREENS.SIGN_UP,
    component: SignUp,
  },
  {
    name: SCREENS.FORGOT_PASSWORD,
    component: ForgotPassword,
  },
  {
    name: SCREENS.RESET_PASSWORD,
    component: ResetPassword,
  },
  {
    name: SCREENS.LOADER,
    component: Loader,
  },
];
export const ONCE_LOGIN_STACK: IListOfScreens[] = [
  {
    name: SCREENS.SIGN_IN,
    component: SignIn,
  },
  {
    name: SCREENS.LOADER,
    component: Loader,
  },
];
export const BOTTOM_TAB_SCREENS: IListOfScreens[] = [
  {
    name: SCREENS.FEED,
    component: Feed,
  },
  {
    name: SCREENS.INTERNAL_JOBS,
    component: InternalJobs,
  },
];
