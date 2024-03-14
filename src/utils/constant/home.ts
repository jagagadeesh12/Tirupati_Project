// export const USER_TIMINGS_TEMPLATE = [
//   {
//     id: 1,
//     primaryText: '',
//     secondaryText: '',
//     Icon: 'ImportSquare',
//   },
//   {
//     id: 2,
//     primaryText: '',
//     secondaryText: '',
//     Icon: 'ExportSquare',
//   },
//   {
//     id: 3,
//     primaryText: '98',
//     secondaryText: 'onTime',
//     Icon: 'Clock',
//   },
//   {
//     id: 4,
//     primaryText: '28',
//     secondaryText: 'Last Checked-In wed 30th Aug',
//     Icon: 'Calendar',
//   },
// ];
 
import moment from 'moment';
 
interface UserTiming {
  id: number;
  primaryText: string;
  secondaryText: string;
  Icon: string;
}
 
// export const USER_TIMINGS_TEMPLATE: UserTiming[] = [
//   {
//     id: 1,
//     primaryText: '',
//     secondaryText: '',
//     Icon: 'ImportSquare',
//   },
//   {
//     id: 2,
//     primaryText: '',
//     secondaryText: '',
//     Icon: 'ExportSquare',
//   },
//   {
//     id: 3,
//     primaryText: '98',
//     secondaryText: 'onTime',
//     Icon: 'Clock',
//   },
//   {
//     id: 4,
//     primaryText: '28',
//     secondaryText: 'Last Checked-In Wed 30th Aug',
//     Icon: 'Calendar',
//   },
// ];
const updateTemplate = (
  checkInTime: string | null,
  checkInDate: string | null,
  checkOutTime: string | null,
  checkOutDate: string | null,
): UserTiming[] => {
  return [
    {
      id: 1,
      primaryText: checkInTime || 'Not yet swipe',
      secondaryText: checkInDate || '',
      Icon: 'ImportSquare',
    },
    {
      id: 2,
      primaryText: checkOutTime || '',
      secondaryText: checkOutDate || '',
      Icon: 'ExportSquare',
    },
    {
      id: 3,
      primaryText: '98',
      secondaryText: 'On Time',
      Icon: 'Clock',
    },
    {
      id: 4,
      primaryText: '28',
      secondaryText: `${checkInDate || ''}`,
      Icon: 'Calendar',
    },
  ];
};
 
export default updateTemplate;