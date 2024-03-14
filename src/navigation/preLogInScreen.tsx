import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ONCE_LOGIN_STACK, PRE_LOGIN_STACK} from '../screens';
import {useAuth} from '../hooks';

const Stack = createStackNavigator();

const PreLogInScreen = () => {
  const {isCheckStateLogout} = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isCheckStateLogout
        ? ONCE_LOGIN_STACK.map(item => (
            <Stack.Screen
              key={item.name}
              name={item.name}
              component={item.component}
            />
          ))
        : PRE_LOGIN_STACK.map(item => (
            <Stack.Screen
              key={item.name}
              name={item.name}
              component={item.component}
            />
          ))}
    </Stack.Navigator>
  );
};

export default PreLogInScreen;
