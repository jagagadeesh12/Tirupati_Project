import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createJSONStorage, persist} from 'zustand/middleware';
import moment from 'moment-timezone';

import {IUserBearSwipe} from '../../types';
import {INITIAL_STATE_SWIPE} from '../initialState';
import {
  combineDateAndTime,
  convertUTCtoTime,
  convertUtcToLocal,
  formatTime,
  validateDuration,
} from '../../utils';

const useBearSwipe = create<IUserBearSwipe>()(
  persist(
    (set, get) => {
      return {
        ...INITIAL_STATE_SWIPE,
        onCheckIn: () => {
          set({checkInDate: new Date(), isCheckedIn: true});
        },
        onCheckOut: () => {
          set({checkOutDate: new Date(), isCheckedIn: false});
        },
        setUserTimeTracker(data) {
          const newList = [...get().userTimeTrackerList];
          if (data?.checkIn) {
            newList[0].primaryText = convertUTCtoTime(data.checkIn.checkIn);
            newList[0].secondaryText =
              'Last Checked In\n' +
              moment(data.checkIn.checkIn).format('ddd Do MMM ');
            // const {} = setDateInList(newList, 0, 'checkIn');
            set({
              userTimeTrackerList: newList,
              timeSheetId: data.checkIn.timeSheetId,
            });
          } else if (data?.checkOut) {
            newList[1].primaryText = convertUTCtoTime(data.checkOut.checkOut);
            newList[1].secondaryText =
              'Last Checked Out\n' +
              moment(data.checkOut.checkOut).format('ddd Do MMM ');
            set({
              userTimeTrackerList: newList,
              timeSheetId: data.checkOut.timeSheetId,
              isDisabledSwipe: true,
            });
          } else if (data.getMonthlyUserTimeSheet) {
            newList[2].primaryText =
              String(
                data.getMonthlyUserTimeSheet.attendedDays -
                  data.getMonthlyUserTimeSheet.punctualDays,
              ) + ' Days';
            console.log('number of days', data.getMonthlyUserTimeSheet.punctualDays);
            set({
              userTimeTrackerList: newList,
            });
          }
          // set({userTimeTrackerList: newList});
          // set({

          // });
        },
        setDisableSwipe(b) {
          set({isDisabledSwipe: b});
        },
        setUpCheckInDetails(lastCheckedInOut) {
          if (lastCheckedInOut) {
            const {checkIn, checkOut, timeSheetId} = lastCheckedInOut;
            const newList = [...get().userTimeTrackerList];
            // console.log('d', );
            let isDisabledSwipe = false;
            let checkInDate: Date | null = checkIn ? new Date(checkIn) : null;
            let checkOutDate: Date | null = checkOut
              ? new Date(checkOut)
              : null;
            let isCheckedIn = false;

            if (checkInDate) {
              newList[0].primaryText = convertUTCtoTime(checkIn);
              newList[0].secondaryText =
                'Last Checked In\n' + moment(checkInDate).format('ddd Do MMM ');
            }
            if (checkOutDate && checkOut) {
              newList[1].primaryText = convertUTCtoTime(checkOut);
              newList[1].secondaryText =
                'Last Checked Out\n' + moment(checkOut).format('ddd Do MMM ');
            }

            if (checkIn && checkOut === null) {
              isCheckedIn = true;
            } else if (
              checkOutDate &&
              checkInDate &&
              moment(checkInDate).isBefore(moment(checkOutDate))
            ) {
              isCheckedIn = false;
              isDisabledSwipe = !validateDuration(new Date(checkInDate), 12);
            } else if (
              checkOutDate &&
              checkInDate &&
              moment(checkOutDate).isBefore(moment(checkInDate))
            ) {
              isCheckedIn = true;
            }
            set({
              isDisabledSwipe,
              checkOutDate,
              checkInDate,
              isCheckedIn,
              timeSheetId,
              userTimeTrackerList: newList,
            });
          }
        },
      };
    },
    {
      name: 'Swipe_storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useBearSwipe;
