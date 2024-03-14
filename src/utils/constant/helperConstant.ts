import {Dimensions} from 'react-native';

import {IAddressItem, IUserTiming} from '../../types';

export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const WINDOW_WIDTH = Dimensions.get('window').width;

export const AUDIENCE = ['All Groups', 'Hr Group', 'Leadership Group'];

export const ADDRESS_LIST: IAddressItem[] = [
  {
    label: 'Address Line 1',
    key: 'address1',
  },
  {
    label: 'Address Line 2',
    key: 'address2',
  },
  {
    label: 'City',
    key: 'city',
  },
  {
    label: 'State/Province',
    key: 'state',
  },
  {
    label: 'Postal Code',
    key: 'postalcode',
    keyboardType: 'numeric',
  },
  {
    label: 'Country',
    key: 'country',
  },
];

export const USER_TIMINGS: IUserTiming[] = [
  {
    id: 1,
    primaryText: 'Not Yet',
    secondaryText: 'Starts at 9:30',
    Icon: 'ImportSquare',
  },
  {
    id: 2,
    primaryText: 'Not Yet',
    secondaryText: 'End at 6:30',
    Icon: 'ExportSquare',
  },
  {
    id: 3,
    primaryText: '2 Days',
    secondaryText: 'Attendance Lapse',
    Icon: 'Clock',
  },
  {
    id: 4,
    primaryText: '20 Days',
    secondaryText: 'Available Leaves',
    Icon: 'Calendar',
  },
];

export const DROPDOWN_LIST = [
  'Spouse',
  'Parent',
  'Sibling',
  'Friend',
  'Cousin',
  'Guardian',
];
export const LEAVE_LIST = [
  'Casual Leave',
  'Sick Leave',
  'Bereavement Leave',
  'Maternity Leave',
];
