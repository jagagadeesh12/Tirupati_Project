import {View, Text} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import {USER_CHECK_IN_OUT_INFO} from '../graphql/queries/userCheckInOutInfo';
import {useLazyQuery, useQuery} from '@apollo/client';
import SplashScreen from 'react-native-splash-screen';
import {
  useBearMasterData,
  useBearSwipe,
  useBearUserDetails,
} from '../data/slices';
import {getToken} from '../utils';
import {
  FETCH_HOLIDAYS,
  GET_LOCATION_ID,
  PROFILE_USER_INFO,
} from '../data/service/user';
import {ALL_USER_DATA} from '../graphql/queries/setUp';

const useSetup = () => {
  const {setCurrentUser, currentUser} = useBearUserDetails();
  const {setAnniversaryObject, setHolidaysByMonth} = useBearMasterData();
  const {data} = useQuery(PROFILE_USER_INFO, {
    onCompleted: userData => {
      setCurrentUser(userData?.getUserById);
      console.log('LOCATIONID=====',userData?.getUserById.locationId);
      
      // console.log('userData', userData);
      fetchHolidays({
        variables: {
          inp: userData?.getUserById.locationId,
        },
      });
    },
  });
  const {error: holidayErr, data: checkInInfo} = useQuery(
    USER_CHECK_IN_OUT_INFO,
    {
      onCompleted: data => {
        SplashScreen.hide();
      },
    },
  );
  const [fetchHolidays, {loading, error, data: holidaysList}] = useLazyQuery(
    FETCH_HOLIDAYS,
    {
      onCompleted: data => setHolidaysByMonth(data.getAllHolidays),
    },
  );
  const {} = useQuery(ALL_USER_DATA, {
    onCompleted: data => {
      setAnniversaryObject(data.getAllUpcomingAnniversaries);
    },
  });


  const {setUpCheckInDetails} = useBearSwipe();
  useEffect(() => {
    if (checkInInfo && checkInInfo.lastCheckedInOut) {
      setUpCheckInDetails(checkInInfo.lastCheckedInOut);
    }
  }, [checkInInfo, setUpCheckInDetails]);
  return {};
};

export default useSetup;
