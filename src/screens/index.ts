import {SeeMoreHolidays} from '.';
import {IListOfScreens} from '../types';
import CreateFeed from './feed/createFeed';
import Notification from './notification';
// import SeeMoreBirthday from './home/seeMoreBirthday';
// import PersonalInfo from './profile/personalInfo';
// import MyActivity from './profile/MyActivity';
// import MySavedPost from './profile/MySavedPost';
// import ContactInfo from './profile/contactinfo/Contactdetails';
// import Adressinfo from './profile/adressinfo';
import Loader from './loader';
import OnBoard from './onBoarding';
import SignIn from './signIn';
import Home from './home';
import Feed from './feed';
// import Profile from './profile';
// import Experience from './profile/Experience';
// import AddingExperience from './profile/Experience/Addexperience';
import FeedWithComment from './feed/feedWithComment';
import AddSkillType from '../components/AddSkillType';
import InternalJobs from './internalJobs';
import WelcomeScreen from './welcom';
// import Skills from './profile/Skills';
// import AddingSkills from './profile/Skills/AddSkills';
// import LeaveManagement from './profile/LeaveManagement';
// import LeaveApprovals from './profile/LeaveApproval';
// import LeaveRequest from './profile/LeaveApproval/LeaveRequest';
// import AddLeaveRequest from './profile/AddLeaveRequest';
// import Tickets from './profile/Tickets/Tickets';
// import ManagerTicket from './profile/Tickets/ManagerTicket/ManagerTcket';
// import TicketStatus from './profile/Tickets/TicketStatus/TicketStatus';
// import {Calendar} from 'iconsax-react-native';
// import Calender from './profile/LeaveManagement/Calender/Calender';
// import Policies from './profile/Polices/Policies';
// import PdfViewer from './profile/PdfViewer/PdfViewer';

export {default as TimeSheet} from './timeSheet';
export {default as Feed} from './feed';
export {default as Leave} from './leave';
export {default as Home} from './home';
export {default as Detailed} from './detailed';
export {default as OnBoard} from './onBoarding';
export {default as SignIn} from './signIn';
export {default as Loader} from './loader';
// export {default as Profile} from './profile';
// export {default as personalInfo} from './profile/personalInfo';
export {default as CreateFeed} from './feed/createFeed';
export {default as Notification} from './notification';
export {default as WelcomeScreen} from './welcom';
// export {default as SeeMoreHolidays} from './home/seeMoreHolidays';
// export {default as SeeMoreBirthday} from './home/seeMoreBirthday';

export const SCREENS: {[key: string]: never} = {
  HOME: 'Home',
  FEED: 'Feed',
  ONBOARD: 'OnBoard',
  SIGN_IN: 'SignIn',
  LOADER: 'Loader',
  PROFILE: 'My Profile',
  PERSONAL_INFO: 'PersonalInfo',
  MY_ACTIVITY: 'MyActivity',
  POLICIES: 'Polices',
  PDF_VIEWR: 'PdfViewr',
  MY_SAVED_POST: 'MySavedPost',
  NOTIFICATION: 'Notification',
  CREATE_FEED: 'CreateFeed',
  SEE_MORE_HOLIDAYS: 'SeeMoreHolidays',
  SEE_MORE_ANNIVERSARIES: 'SeeMoreBirthday',
  DETAILED_FEED: 'DetailedFeed',
  WELCOME_SCREENS: 'WelcomeScreen',
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
  // {
  //   name: SCREENS.SEE_MORE_ANNIVERSARIES,
  //   component: SeeMoreBirthday,
  // },
  {
    name: SCREENS.SEE_MORE_HOLIDAYS,
    component: SeeMoreHolidays,
  },
  // {
  //   name: SCREENS.PERSONAL_INFO,
  //   component: PersonalInfo,
  // },
  // {
  //   name: SCREENS.MY_ACTIVITY,
  //   component: MyActivity,
  // },
  // {
  //   name: SCREENS.POLICIES,
  //   component: Policies,
  // },
  // {
  //   name: SCREENS.PDF_VIEWR,
  //   component: PdfViewer,
  // },
  // {
  //   name: SCREENS.MY_SAVED_POST,
  //   component: MySavedPost,
  // },
  // {
  //   name: SCREENS.CONTACT_INFO,
  //   component: ContactInfo,
  // },
  // {
  //   name: SCREENS.ADDRESS_INFO,
  //   component: Adressinfo,
  // },
  // {
  //   name: SCREENS.LOADER,
  //   component: Loader,
  // },
  // {
  //   name: SCREENS.EXPERIENCE,
  //   component: Experience,
  // },
  // {
  //   name: SCREENS.ADD_EXPERIENCE,
  //   component: AddingExperience,
  // },
  // {
  //   name: SCREENS.SKILLS,
  //   component: Skills,
  // },
  // {
  //   name: SCREENS.ADD_SKILLS,
  //   component: AddingSkills,
  // },
  {
    name: SCREENS.ADD_SKILLTYPE,
    component: AddSkillType,
  },
  {
    name: SCREENS.FEED_WITH_COMMENTS,
    component: FeedWithComment,
  },
  // {
  //   name: SCREENS.LEAVE_MANAGEMENT,
  //   component: LeaveManagement,
  // },
  // {
  //   name: SCREENS.LEAVE_APRROVALS,
  //   component: LeaveApprovals,
  // },
  // {
  //   name: SCREENS.LEAVE_REQUEST,
  //   component: LeaveRequest,
  // },
  // {
  //   name: SCREENS.ADD_LEAVEREQUEST,
  //   component: AddLeaveRequest,
  // },
  // {
  //   name: SCREENS.TICKET,
  //   component: Tickets,
  // },
  // {
  //   name: SCREENS.MANAGER_TICKET_SCREEN,
  //   component: ManagerTicket,
  // },
  // {
  //   name: SCREENS.TICKET_STATUS,
  //   component: TicketStatus,
  // },
  // {
  //   name: SCREENS.CALENDER,
  //   component: Calender,
  // },
];

export const PRE_LOGIN_STACK: IListOfScreens[] = [
  {
    name: SCREENS.ONBOARD,
    component: OnBoard,
  },

  {
    name: SCREENS.WELCOME_SCREENS,
    component: WelcomeScreen,
  },
  {
    name: SCREENS.SIGN_IN,
    component: SignIn,
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
    name: SCREENS.HOME,
    component: Home,
  },
  // {
  //   name: SCREENS.TIME_SHEET,
  //   component: TimeSheet,
  // },
  {
    name: SCREENS.FEED,
    component: Feed,
  },
  {
    name: SCREENS.INTERNAL_JOBS,
    component: InternalJobs,
  },
  // {
  //   name: SCREENS.PROFILE,
  //   component: Profile,
  // },
];
