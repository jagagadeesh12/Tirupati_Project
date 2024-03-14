import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Modal,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  AppState,
  ActivityIndicator,
} from 'react-native';
import moment from 'moment';
import {CloseSquare} from 'iconsax-react-native';
import ContentHeader from './contentHeader';
import {CelebrationCard, TimingCards} from '../../components';
import HolidayCards from '../../components/holidayCards';
import SwipeCheck from '../../components/swipeCheck';
import {useHome} from '../../hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import imagepath from '../../constant/imagepath';
import styles from './styles';
import BirthdayPopupModal from './BirthdayPopupModal';
import SlideUpTextAnimation from './slideUpText';

const {width, height} = Dimensions.get('window');

const HomeContent = ({navigation}: {navigation: any}) => {
  const {
    userTimeTrackerList,
    upComingHolidays,
    upcomingAnniversaries,
    onHandleCheckIn,
    onHandleCheckOut,
    checkInDate,
    isCheckedIn,
    isCheckInLoading,
    isCheckOutLoading,
    isDisabledSwipe,
    setDisableSwipe,
    currentUser
  } = useHome();

  const [loading, setLoading] = useState(true);
  const [checkInLoading, setCheckInLoading] = useState(true);
  const [checkOutLoading, setCheckOutLoading] = useState(true);
  const [holidaysLoading, setHolidaysLoading] = useState(true);
  const [birthdaysLoading, setBirthdaysLoading] = useState(true);

  useEffect(() => {
    if (
      !isCheckInLoading &&
      !isCheckOutLoading &&
      !holidaysLoading &&
      !birthdaysLoading
    ) {
      setLoading(false);
    }
  }, [isCheckInLoading, isCheckOutLoading, holidaysLoading, birthdaysLoading]);

  useEffect(() => {
    setCheckInLoading(isCheckInLoading);
  }, [isCheckInLoading]);

  useEffect(() => {
    setCheckOutLoading(isCheckOutLoading);
  }, [isCheckOutLoading]);

  useEffect(() => {
    if (upComingHolidays.length > 0) {
      setHolidaysLoading(false);
    }
  }, [upComingHolidays]);

  useEffect(() => {
    if (upcomingAnniversaries.length > 0) {
      setBirthdaysLoading(false);
    }
  }, [upcomingAnniversaries]);

  const renderTimeCards = (props: any) => {
    return (
      <TimingCards
        isCheckInLoading={isCheckInLoading}
        isCheckOutLoading={isCheckOutLoading}
        {...props}
      />
    );
  };

  const renderLoader = () => (
    <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="small" color="#0074B7" />
    </View>
  );

  if (loading) {
    return renderLoader();
  }
  return (
    <ScrollView bounces={false} style={{flex: 1}}>
      <View style={styles.HomeContentContainer}>
        <BirthdayPopupModal upcomingAnniversaries={upcomingAnniversaries} />

        <View style={{paddingHorizontal: 20}}>
          <SlideUpTextAnimation fullName={currentUser?.fullName} />
          <SwipeCheck
            onCheckIn={onHandleCheckIn}
            onCheckOut={onHandleCheckOut}
            checkInDate={checkInDate}
            isCheckedIn={isCheckedIn}
            isDisabledSwipe={isDisabledSwipe}
            setDisableSwipe={setDisableSwipe}
          />
          <FlatList
            bounces={false}
            data={userTimeTrackerList}
            keyExtractor={item => item?.id?.toString()}
            renderItem={renderTimeCards}
            numColumns={2}
          />
        </View>

        <View style={{marginTop: 8}}>
          <>
            <ContentHeader title="Upcoming Holidays" navigation={navigation} />
            <FlatList
              contentContainerStyle={styles.HolidayContainer}
              data={upComingHolidays}
              keyExtractor={item => item.holidayDate}
              renderItem={({item, index}) => (
                <HolidayCards key={item.holidayDate} {...item} index={index} />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </>
        </View>
        <View style={{marginTop: height * 0.01}}>
          <>
            <ContentHeader
              title="Birthdays & Anniversaries"
              navigation={navigation}
            />
            <FlatList
              contentContainerStyle={styles.UseTimeContainer}
              data={upcomingAnniversaries}
              keyExtractor={item => item.userId}
              renderItem={({item, index}) => (
                <CelebrationCard key={item.userId} {...item} index={index} />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </>
        </View>
        <View style={{padding: 8}} />
      </View>
    </ScrollView>
  );
};

export default HomeContent;
