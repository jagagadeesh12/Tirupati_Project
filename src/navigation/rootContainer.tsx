import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';

import {SCREENS} from '../screens';
import color from '../theme/color';
import StackSelector from './stackSelector';

const linking = {
  prefixes: ['perch://'],
  config: {
    initialRouteName: SCREENS.LOADER,
    screens: {
      [SCREENS.LOADER]: {
        path: 'load/*',
      },
      // [SCREENS.onBoard]: {
      //   path: 'onBoard/:token',
      // },
    },
  },
};

const RootContainer = () => {
  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color={color.LIGHT_MODE.primary} />}>
      <StackSelector />
    </NavigationContainer>
  );
};

export default RootContainer;
