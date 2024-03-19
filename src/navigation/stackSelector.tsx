import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS, SignIn, SignUp, WelcomeScreen} from '../screens';
import BottomTab from '../../src/navigation/bottomTab';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';

const Stack = createStackNavigator();

function StackSelector() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.WELCOME_SCREENS} component={WelcomeScreen} />
      <Stack.Screen name={SCREENS.SIGN_IN} component={SignIn} />
      <Stack.Screen name={SCREENS.SIGN_UP} component={SignUp} />
      <Stack.Screen name={SCREENS.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={SCREENS.RESET_PASSWORD} component={ResetPassword} />
      <Stack.Screen name={SCREENS.FEED} component={BottomTab} />
    </Stack.Navigator>
  );
}

export default StackSelector;

{
  /* <Stack.Navigator>
      <Stack.Screen name={SCREENS.SIGN_IN} component={SignIn} />
      <Stack.Screen name={SCREENS.FEED} component={BottomTab} />
    </Stack.Navigator> */
}
