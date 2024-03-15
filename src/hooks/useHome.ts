// import React, {useEffect, useState} from 'react';
// import {useLazyQuery, useMutation, useQuery} from '@apollo/client';
// import {
//   ATTENDANCE_LAPSE,
//   BIRTHDAYSANNIVERSARIES,
//   CHECK_IN,
//   CHECK_OUT,
//   FETCH_HOLIDAYS,
//   GET_LOCATION_ID,
//   PROFILE_USER_INFO,
// } from '../data/service/user';
// import {
//   useBearMasterData,
//   useBearSwipe,
//   useBearUserDetails,
// } from '../data/slices';
// import Geolocation, {
//   GeolocationError,
//   GeolocationResponse,
// } from '@react-native-community/geolocation';
// import Toast from 'react-native-toast-message';

// const useHome = () => {
//   const {currentUser} = useBearUserDetails();
//   const [locations, setLocations] = useState({});
//   const {upComingHolidays, upcomingAnniversaries} = useBearMasterData();
//   const {
//     checkInDate,
//     checkOutDate,
//     onCheckIn,
//     onCheckOut,
//     isCheckedIn,
//     userTimeTrackerList,
//     setUserTimeTracker,
//     timeSheetId,
//     isDisabledSwipe,
//     setDisableSwipe,
//   } = useBearSwipe();
//   const [
//     checkInMutation,
//     {data: CheckInData, loading: isCheckInLoading, error: CheckInError},
//   ] = useMutation(CHECK_IN, {
//     onCompleted: setUserTimeTracker,
//   });
//   const [
//     checkOutMutation,
//     {data: CheckOutData, loading: isCheckOutLoading, error: CheckOutError},
//   ] = useMutation(CHECK_OUT, {
//     onCompleted: setUserTimeTracker,
//   });

//   const {data: daysAttendedLate} = useQuery(ATTENDANCE_LAPSE, {
//     onCompleted(data) {
//       setUserTimeTracker(data);
//     },
//   });
//   console.log('ATTENDANCE_LAPSE', daysAttendedLate);

//   // const {data: timeLapse, loading: loading, error: error} =
//   //   useQuery(ATTENDANCE_LAPSE);
//   // console.log('ATTENDANCE_LAPSE', timeLapse);

//   const onChangeLocation = (position: GeolocationResponse) => {
//     setLocations({
//       latitude: position?.coords?.latitude,
//       longitude: position?.coords?.longitude,
//     });
//   };
//   const onLocationErr = (err: GeolocationError) => {
//     console.log(err.message);
//     Toast.show({
//       type: 'error',
//       text1: err.message,
//     });
//   };

//   useEffect(() => {
//     const watchID = Geolocation.watchPosition(onChangeLocation, onLocationErr);
//     return () => {
//       Geolocation.clearWatch(watchID);
//     };
//   }, []);

//   // useEffect(() => {
//   //   if (data && data.getUserById) {
//   //     setCurrentUser(data.getUserById);
//   //   }
//   // }, [data, setCurrentUser]);

//   const onHandleCheckIn = async () => {
//     // console.log('createfeed');

//     try {
//       if (locations && locations?.latitude) {
//         onCheckIn();
//         checkInMutation({
//           variables: {
//             inp: {
//               checkInLocation: {
//                 latitude: locations.latitude.toString(),
//                 longitude: locations.longitude.toString(),
//               },
//             },
//           },
//         });
//       }
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };

//   const onHandleCheckOut = async () => {
//     try {
//       if (locations && locations?.latitude) {
//         onCheckOut();
//         checkOutMutation({
//           variables: {
//             inp: {
//               timeSheetId,
//               checkOutLocation: {
//                 latitude: locations?.latitude.toString(),
//                 longitude: locations?.longitude.toString(),
//               },
//             },
//           },
//         });
//       }
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };

//   return {
//     upcomingAnniversaries,
//     currentUser,
//     userTimeTrackerList,
//     upComingHolidays,
//     onHandleCheckIn,
//     onHandleCheckOut,
//     onCheckIn,
//     onCheckOut,
//     checkInDate,
//     isCheckedIn,
//     isCheckInLoading,
//     isCheckOutLoading,
//     isDisabledSwipe,
//     setDisableSwipe,
//   };
// };

// export default useHome;
