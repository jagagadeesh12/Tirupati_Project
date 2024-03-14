import React, {useEffect} from 'react';
// import SplashScreen from 'react-native-splash-screen';

import PreLogInScreen from './preLogInScreen';
import MainStack from './mainStack';
import {useAuth} from '../hooks';

const StackSelector = () => {
  const isSignIn = useAuth().isSignIn;
  if (isSignIn) {
    return <MainStack />;
  }
  return <PreLogInScreen />;
};

export default StackSelector;
