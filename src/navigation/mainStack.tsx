import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ApolloProvider} from '@apollo/client';

import BottomTab from './bottomTab';
import {SCREENS, STACKED_SCREENS} from '../screens';
import {useMainStack} from '../hooks';
import {AppSetup} from '../template';

const Stack = createStackNavigator();

const MainStack = () => {
  const {client} = useMainStack();

  if (!client) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <AppSetup />
      <Stack.Navigator
        initialRouteName={SCREENS.BOTTOM_TAB}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={SCREENS.BOTTOM_TAB}
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        /> 
        {STACKED_SCREENS.map(item => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    </ApolloProvider>
  );
};

export default MainStack;
