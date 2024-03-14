import {create} from 'zustand';
import {
  IAnniversaryByMonth,
  IHolidaysByMonth,
  IUseBearMasterData,
} from '../../types';
import {INITIAL_MASTER_DATA} from './initialState';
import {getAllHolidays_getAllHolidays} from '../service/__generated__/getAllHolidays';
import {Alert} from 'react-native';

const useBearMasterData = create<IUseBearMasterData>((set, get) => ({
  ...INITIAL_MASTER_DATA,
  setHolidaysByMonth(holidays) {
    const result: IHolidaysByMonth = {};
    let newComingHolidays: getAllHolidays_getAllHolidays[] = [];
    holidays.forEach(holiday => {
      if (newComingHolidays.length < 5) {
        const currentDate = new Date(); // Current date and time
        const holidayDate = new Date(holiday.holidayDate);
        if (holidayDate >= currentDate) {
          newComingHolidays.push(holiday);
        }
      }
      const month = new Date(holiday.holidayDate).toLocaleString('en-US', {
        month: 'long',
      });
      //   upComingHolidays

      if (!result[month]) {
        result[month] = [];
      }

      result[month].push(holiday);
    });
    // console.log('rrrrr', result);
    // console.log('j1', newComingHolidays);
    set({holidaysByMonth: result, upComingHolidays: newComingHolidays});
  },
  setAnniversaryObject(users) {
    // let birthdaysByMonth: IUpComingAniversary[] = [];
    let birthdaysByMonth: IAnniversaryByMonth = {};
    let anniversariesByMonth: IAnniversaryByMonth = {};

    // console.log(users, 'this is the user of device')
    // users.forEach(user => {
    //   const dob = new Date(user.dob);
    //   const anniversaryDate = new Date(user.dateOfJoining);
    //   if (
    //     dob.getMonth() === new Date().getMonth() &&
    //     dob.getDate() >= new Date().getDate()
    //   ) {
    //     // Categorize birthdays by month
    //     const birthMonth = dob.toLocaleString('en-US', {month: 'long'});
    //     birthdaysByMonth[birthMonth] = birthdaysByMonth[birthMonth] || [];
    //     birthdaysByMonth[birthMonth].push({
    //       ...user,
    //       isBirthday: true,
    //       isAnniversary: false,
    //     });
    //   }
    //   if (
    //     anniversaryDate.getMonth() === new Date().getMonth() &&
    //     anniversaryDate.getDate() >= new Date().getDate()
    //   ) {
    //     const currentDate = new Date(); // Current date
    //     const workExperience =
    //       currentDate.getFullYear() - anniversaryDate.getFullYear();

    //     // Categorize work anniversaries by month
    //     const anniversaryMonth = anniversaryDate.toLocaleString('en-US', {
    //       month: 'long',
    //     });
    //     anniversariesByMonth[anniversaryMonth] =
    //       anniversariesByMonth[anniversaryMonth] || [];
    //     if (workExperience > 0) {
    //       anniversariesByMonth[anniversaryMonth].push({
    //         ...user,
    //         isBirthday: false,
    //         isAnniversary: true,
    //         workExperience,
    //       });
    //     }
    //   }
    // });
    let combinedEvents: any = [];

    const findCombinedEvent = (
      currentDate: string,
      nextDate: string,
      users: [],
    ) => {
      users.forEach((user: any) => {
        const dob = user.dob.slice(5, 10);
        const anniversaryDate = user.dateOfJoining.slice(5, 10);
        // Get the current date
        // let newDate = new Date();
        // const currentDate = newDate.toISOString().slice(5, 10);
        // newDate = new Date();
        // let oneMonthFromNow = new Date(newDate.setMonth(newDate.getMonth() + 1))
        //   .toISOString()
        //   .slice(5, 10);
        if (dob >= currentDate && dob < nextDate) {
          combinedEvents.push({
            ...user,
            isBirthday: true,
            isAnniversary: false,
          });
        }
        if (anniversaryDate >= currentDate && anniversaryDate < nextDate) {
          combinedEvents.push({
            ...user,
            isBirthday: false,
            isAnniversary: true,
          });
        }
      });
      return combinedEvents
    };
    
    function convertToTwoDigit(number:number) {
      // Check if the number is a single digit
      if (number >= 0 && number < 10) {
        // If it's a single digit, add a leading zero
        return `0${number}`;
      } else {
        // If it's already two digits or more, return the original number
        return `${number}`;
      }
    }
    // Get the current date
        let newDate = new Date();
        let currentDate = newDate.toISOString().slice(5, 10);
        newDate = new Date();
        let oneMonthFromNow = new Date(newDate.setMonth(newDate.getMonth() + 1))
          .toISOString()
          .slice(5, 10);

    while(combinedEvents.length<5){
      combinedEvents = findCombinedEvent(currentDate, oneMonthFromNow, users)
      currentDate = oneMonthFromNow;
      let [monthA, dayA] = oneMonthFromNow.split('-').map(Number);
      let newMonth  = convertToTwoDigit(monthA+1)
      let newDay = convertToTwoDigit(dayA)
       oneMonthFromNow = `${newMonth}-${newDay}`
    }

    // Sort the combined events based on the upcoming date
    combinedEvents.sort((eventA, eventB) => {
      let a = eventA.isBirthday ? eventA.dob : eventA.dateOfJoining;
      let b = eventB.isBirthday ? eventB.dob : eventB.dateOfJoining;
      const [monthA, dayA] = a.slice(5, 10).split('-').map(Number);
      const [monthB, dayB] = b.slice(5, 10).split('-').map(Number);
      if (monthA !== monthB) {
        return monthA - monthB;
      }
      return dayA - dayB;
    });
    console.log('combinedEvents333333', JSON.stringify(combinedEvents));
    // Take the top 5 events
    const upcomingAnniversaries = combinedEvents.slice(0,5);
    console.log('upcomingAnniversaries', JSON.stringify(upcomingAnniversaries));
    console.log('birthdaysByMonth', JSON.stringify(birthdaysByMonth));
    console.log('anniversariesByMonth', JSON.stringify(anniversariesByMonth));
    set({upcomingAnniversaries, anniversariesByMonth, birthdaysByMonth});
  },
}));

export default useBearMasterData;
