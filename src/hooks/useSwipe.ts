import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BIRTHDAYSANNIVERSARIES,
  CHECK_IN,
  CHECK_OUT,
  FETCH_HOLIDAYS,
  GET_LOCATION_ID,
} from '../data/service/user';
import {useMutation, useQuery} from '@apollo/client';
import {useBearSwipe} from '../data/slices';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';
import {USER_TIMINGS} from '../utils';

const useSwipe = () => {
  const {
    loading: locLoader,
    error: locErr,
    data: LocData,
  } = useQuery(GET_LOCATION_ID);
  const {data: birthdayDate} = useQuery(BIRTHDAYSANNIVERSARIES, {});

  const {
    loading,
    error,
    data: holidaysList,
  } = useQuery(FETCH_HOLIDAYS, {
    variables: {
      inp: LocData?.getUserById.locationId,
    },
  });

  const [userTimeTracker, setUserTimeTracker] = useState(USER_TIMINGS);

  const [
    checkInMutation,
    {data: CheckInData, loading: CheckInLoading, error: CheckInError},
  ] = useMutation(CHECK_IN);
  const [
    checkOutMutation,
    {data: CheckOutData, loading: CheckOutLoading, error: CheckOutError},
  ] = useMutation(CHECK_OUT, {
    onCompleted: data => console.log('onCompleted', data),
  });
  console.log('CheckInData sdsd', CheckInData, error);

  const SendCheckIn = async () => {
    try {
      const data = await getCurrentPosition();
      const latitude = data.coords.latitude;
      const longitude = data.coords.longitude;
      console.log('longitude', longitude);
      console.log('latitude', latitude);

      // checkInMutation({
      //   variables: {
      //     inp: {
      //       checkInLocation: {
      //         latitude: latitude + '',
      //         longitude: longitude + '',
      //       },
      //     },
      //   },
      // });
      console.log('User updated:', CheckInData);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // console.log('checkInnn', CheckInData);

  const SendCheckOut = async () => {
    // console.log('createfeed');

    try {
      const data = await getCurrentPosition();
      const latitude = data.coords.latitude;
      const longitude = data.coords.longitude;
      console.log('longitude', longitude);
      console.log('latitude', latitude);
      //   const {CheckOutData} = await checkOutMutation({
      //     variables: {
      //       inp: {
      //         checkOut: checkOutTime + checkOutDate,
      //         latitude: latitude,
      //         longitude: longitude,
      //       },
      //     },
      //   });

      // console.log('User updated:', CheckOutData);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          resolve(position);
        },
        error => {
          reject(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });
  };

  return {
    userTimeTracker,
    LocData,
    holidaysList,
    birthdayDate,
    SendCheckIn,
    SendCheckOut,
  };
};

export default useSwipe;
