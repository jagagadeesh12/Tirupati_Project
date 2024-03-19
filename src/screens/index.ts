import {IListOfScreens} from '../types';
import Loader from './loader';
import SignIn from './signIn';
import WelcomeScreen from './welcom';
import SignUp from './SignUP';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Feed from './feed';
import InternalJob from './JobPosting';
import Events from './Event';

export {default as OnBoard} from './onBoarding';
export {default as SignIn} from './signIn';
export {default as Loader} from './loader';
export {default as WelcomeScreen} from './welcom';
export {default as SignUp} from './SignUP';

export {default as Feed} from './feed';

export const SCREENS: {[key: string]: never} = {
  FEED: 'Feed',
  SIGN_IN: 'SignIn',
  LOADER: 'Loader',
  WELCOME_SCREENS: 'WelcomeScreen',
  SIGN_UP: 'SignUp',
  FORGOT_PASSWORD: 'ForgotPassword',
  RESET_PASSWORD: 'ResetPassword',
  INTERNAL_JOB: 'InternalJob',
  EVENT: 'Events',
};

export const STACKED_SCREENS: IListOfScreens[] = [
  {
    name: SCREENS.FEED,
    component: Feed,
  },
];

export const PRE_LOGIN_STACK: IListOfScreens[] = [
  // {
  //   name: SCREENS.ONBOARD,
  //   component: OnBoard,
  // },
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
  // {
  //   name: SCREENS.EVENT,
  //   component: Events,
  // },
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
    name: SCREENS.INTERNAL_JOB,
    component: InternalJob,
  },
  // {
  //   name: SCREENS.INTERNAL_JOBS,
  //   component: InternalJobs,
  // },
];
