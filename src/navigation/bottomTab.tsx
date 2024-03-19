import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home2,
  Calendar,
  Note1,
  ProfileCircle,
  Briefcase,
} from 'iconsax-react-native';

import {SCREENS, BOTTOM_TAB_SCREENS} from '../screens';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={{
        tabBarActiveTintColor: '#0074B7',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
      }}>
      {BOTTOM_TAB_SCREENS.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: TabBarIcon[item.name],
            tabBarLabel: ({focused, color}) => (
              <Text
                style={{
                  color: focused ? '#0074B7' : 'black',
                  fontFamily: 'Rubik',
                  fontWeight: '400',
                  fontSize: 10,
                }}>
                {item.name}
              </Text>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTab;
