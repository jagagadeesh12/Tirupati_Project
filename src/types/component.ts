import {ReactNode} from 'react';
import {
  ColorValue,
  ImageProps,
  ImageSourcePropType,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {getAllHolidays_getAllHolidays} from '../data/service/__generated__/getAllHolidays';
import {getAllAnniversaries_getAllUpcomingAnniversaries} from '../graphql/queries/__generated__/getAllAnniversaries';
import {StringSchema} from 'yup';

export interface IButton {
  text: string;
  onPress: () => void;
  isDisabled?: boolean;
  loading: boolean;
}
export interface IAvatar {
  imageSource: ImageSourcePropType;
  width: number;
  height: number;
  borderRadius?: number;
}
export interface IAppHeader {
  profilePic: string | null | undefined;
  name?: string;
  designation?: string;
  // onPress: () => void;
  navigation?: any;
  onPressProfile?: () => void | boolean;
}
export interface NotificationsDetailsType {
  imageSource: string;
  content: string;
  button: string;
  present: string;
  icon: string;
  heading: string;
}
export interface CardsDetails {
  festivalname: string;
  startDate: string;
  imageSource: string;
  titleTournament: string;
  backgroundColor: string;
}

export interface IBackHeader {
  onPressBack?: any;
  navigation: any;
  title: string;
  image?: ImageProps;
  onPressMenu?: () => void;
  containerStyle?: {};
}

export interface IInputText {
  label: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  handleOnchange: (e: string) => void;
  value: string;
}
export interface IButtonLoader {
  label: string;
  onPress: () => void;
  containerStyle?: {};
}
export interface INotificationsDetails {
  imageSource: string;
  heading: any;
  content: any;
  button: string;
  present: string;
  icon: string;
}

export interface IFabButton {
  onPress: () => void;
}
export interface SkillandExperience {
  title: string;
  buttontitle: string;
  onpress: () => void;
}

export interface Experience {
  jobRole?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  skills?: string;
  organisationName?: string;
  experienceId?: string;
}
export interface BirthdaysDetails {
  title: string;
  imageSource: string;
  number?: number;
  date: number;
  isBagde?: boolean;
  userId: string;
  user?: any;
}

export interface ITextBtn {
  label: string;
  onPress: () => void;
}

export interface ICustomBtn extends ITextBtn {
  isDisabled?: boolean;
}

export interface IFeedPostType {
  selectedType: string;
  onToggle: () => void;
  url: ImageSourcePropType;
}

export interface ICommentUserAndTime {
  fullName: string;
  feedTime: string;
}
export interface IFeedByUser extends ICommentUserAndTime {
  imageSource: ImageSourcePropType;
}

export interface ILikeCommentAndRepost {
  isLikedByUser: boolean;
  feedId: string;
  toggleLike: (feedId: string) => void;
  onComment: () => void;
  onRepost: () => void;
  likesCount?: number;
  commentCount?: number;
  repostCount?: number;
  isPostFeed?: boolean;
}

export interface ILikeComp {
  onPressLike: () => void;
  isLiked: boolean;
  label: string;
}

export interface IReplyToFeed {
  onChangeText: (e: string) => void;
  onSend: () => void;
  containerPosition: number;
  replyTo: string;
  replyText: string;
}

export interface IZoomView {
  children: ReactNode;
  onZoomStart: () => void;
  onZoomEnd: () => void;
  onZoomProgress: (e: number) => void;
}

export interface Badges {
  number: number;
}
export interface IDropdown {
  options: (string | null)[];
  selectedItem: string | null;
  placeHolder: string;
  onSelect: (d: string) => void;
  dropdownContainerStyle?: StyleProp<ViewStyle>;
  isShowImgIcon?: boolean;
  isplaceHolderColor?: boolean;
  isBorderColor?: boolean;
  isDisable?: boolean;
  isColoredText?: boolean;
  placeHolderColor?: string;
  value: string;
}

// export interface ITimingCardsProps extends IUserTimingCard {
//   onPress: (id: number) => void;
// }

export interface IUserTiming {
  id: number;
  primaryText: string;
  secondaryText: string;
  Icon: string;
}

export interface IUserTimingCard {
  item: IUserTiming;
  index: number;
  isCheckInLoading: boolean;
  isCheckOutLoading: boolean;
  onPress: (id: number) => void;
}

export interface IMask {
  isLoading: boolean;
}

export interface ISwipeCheck {
  onCheckIn: () => void;
  onCheckOut: () => void;
  checkInDate: Date | null;
  isCheckedIn: boolean;
  isDisabledSwipe: boolean;
  setDisableSwipe: (b: boolean) => void;
}
export interface IItemSeparator {
  styles?: StyleProp<ViewStyle>;
}

export interface IAddressItem {
  // addressItem: IAddressItem;
  label: string;
  key: string;
  keyboardType?: KeyboardTypeOptions | undefined;
}

export interface IAddressValue {
  [key: string]: string;
}

export interface IAddressComponent {
  list: IAddressItem[];
  onChangeAddress: (e: string, key: string) => void;
  value: IAddressValue;
}

export interface IRenderAddress {
  addressItem: IAddressItem;
  onChangeAddress: (e: string, key: string) => void;
  value: string;
}

export interface ICustomCheckbox {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  size?: number;
  disabled: boolean;
}

export interface ICustomCheckboxWithText extends ICustomCheckbox {
  onChange: (checked: boolean) => void;
  label: string;
}

export interface IUploadProgressBar {
  uri: string;
  progress: number;
  lineColor: ColorValue;
}
export interface AddButtonType {
  Content: string;
  imageSource: ImageSourcePropType;
}
export interface AddExperienceButtonType {
  onpress: () => void;
  buttonTitle: string;
}

export type TypeOfMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';
export interface IHolidaysByMonth {
  [key: string]: getAllHolidays_getAllHolidays[];
}

export interface IAnniversaryByMonth {
  [key: string]: IUpComingAniversary[];
}

export interface IUpComingAniversary
  extends getAllAnniversaries_getAllUpcomingAnniversaries {
  profilePhoto(profilePhoto: IUpComingAniversary): unknown;
  profilePhoto: IUpComingAniversary | undefined;
  birthdayDate(birthdayDate: any): unknown;
  isBirthday: boolean;
  isAnniversary: boolean;
}
export interface IJobCardComponent {
  item: any;
  // {
  //   title: string;
  //   location: string;
  //   experienceRequired: string;
  //   jobType: string;
  //   description: string;
  //   qualificationRequired: string;
  //   project: string;
  //   responsibility: string;
  //   budget: string | number;
  //   hiringManager: string;
  //   expirationDate: string;
  // };
  id: number;
  jobTitle: string;
  jobLocation: string;
  experience: string;
  jobType: string;
  jobDescription: string;
  jobQualification: string;
  projectName: string;
  responsibilities: string;
  fixedBudget: string;
  variableBudget: string;
  manager: string;
  expireDate: string;
}
export interface LeaveManagementComponent {
  item: {
    startDate: string;
    endDate: string;
    numberOfDays: string;
    leaveType: string;
    createdAt: string;
    manager: string;
    reason: string;
    requestStatus: string;
    isChechStatus?: boolean;
  };
}
export interface LeaveCards {
  imageSource: ImageSourcePropType;
  Name: string;
  Leave: string;
  endDate: string;
  days: string;
  startDate: string;
  createdAt: string;
  reason: string;
}
export interface LeaveRequest {
  label: string;
  value: string;
}
export interface SwitchOptionsCard {
  switchoptions: {
    label: string;
    value: string | number;
  }[];
  onPress?: (data: any) => void;
}
export interface CustombuttonsType {
  label?: string;
  containerStyle?: {};
  labelStyle?: {};
  onPress?: () => void;
  iconStyle?: {};
  enabled?: boolean;
  disabledStyle?: {};
  disabledLabelStyle?: {};
  disabledIconStyle?: {};
  icon?: boolean;
  isDisabled?: boolean;
  loading?: boolean;
  ref?: any;
  borderRadius?: {};
  image?: ImageSourcePropType;
  imageStyle?: {};
}

export interface TextInputtypes {
  label?: string;
  placeholder?: string;
  containerStyles?: {};
  labelStyles?: {};
  placeholderStyles?: TextStyle;
  image?: ImageSourcePropType;
  imageStyles?: {};
  keyboardType?: KeyboardType;
  iconStyles?: {};
  icon?: React.ReactNode;
  textInputStyle?: {};
  multiline?: boolean;
  onChangeText?: () => void;
  value?: string;
  textAlignVertical?: string;
}
