//import React from 'react';
import {AppHeader} from '../../components';
import HomeContent from '../../template/homeContent';
import React, {useRef, useState} from 'react';
import {useHome} from '../../hooks';
import WrapperContainer from '../../components/WrapperContainer/WrapperContainer';
import {SCREENS} from '..';

const Home = ({navigation, route}: any) => {
  // const initialProfileFunc = route?.params?.onPressProfile;
  // let shouldShowDrawer = useRef(false).current;
  // const onPressProfile = () => {
  //   initialProfileFunc(false);
  //   // shouldShowDrawer = !shouldShowDrawer;
  // };
  const {currentUser} = useHome();
  return (
    <WrapperContainer containerStyle={{padding: 0}}>
      <AppHeader
        // onPressProfile={() => navigation.navigate(SCREENS.PROFILE)}
        // onPressProfile={onPressProfile}
        profilePic={currentUser?.profileImage}
        name={currentUser?.fullName}
        designation={'currentUser'}
        navigation={navigation}
      />
      <HomeContent navigation={navigation} />
    </WrapperContainer>
  );
};

export default Home;
