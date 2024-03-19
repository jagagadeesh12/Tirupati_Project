import React from 'react';
import {Image, Text} from 'react-native';
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

interface ITabBarIcon {
  focused: boolean;
  color: string;
  size: number;
}

const TabBarIcon = {
  [SCREENS.FEED]: ({color, size}: ITabBarIcon) => (
    <Home2 color={color} size={size} />
  ),
  [SCREENS.INTERNAL_JOB]: ({color, size}: ITabBarIcon) => (
    <Note1 color={color} size={size} />
  ),
  //   [SCREENS.INTERNAL_JOBS]: ({color, size}: ITabBarIcon) => (
  //     <Briefcase color={color} size={size} />
  //   ),
  //   [SCREENS.PROFILE]: ({color, size}: ITabBarIcon) => (
  //     <ProfileCircle color={color} size={size} />
  //   ),
  //   [SCREENS.FEED]: ({color, size}: ITabBarIcon) => (
  //     <Image
  //       source={require('../assets/images/feed.png')}
  //       style={{tintColor: color, width: size + 2, height: size + 2}}
  //       resizeMode="cover"
  //     />
  //   ),
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.FEED}
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

// import React from 'react';
// import { Image } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Home2, Note1, Briefcase, ProfileCircle } from 'iconsax-react-native'; // Assuming iconsax-react-native provides these icons
// import { SCREENS, BOTTOM_TAB_SCREENS } from '../screens'; // Assuming you have defined SCREENS and BOTTOM_TAB_SCREENS

// const Tab = createBottomTabNavigator();

// const TabBarIcon = {
//   [SCREENS.HOME]: Home2,
//   [SCREENS.TIME_SHEET]: Note1,
//   [SCREENS.INTERNAL_JOBS]: Briefcase,
//   [SCREENS.PROFILE]: ProfileCircle,
//   [SCREENS.FEED]: Image, // Assuming you're using Image for custom icon
// };

// const BottomTab = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName={SCREENS.HOME}
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           const Icon = TabBarIcon[route.name];
//           let iconColor = focused ? color : 'black'; // Change the color when focused

//           if (route.name === SCREENS.FEED) {
//             return (
//               <Icon
//                 source={require('../assets/images/feed.png')}
//                 style={{ tintColor: iconColor, width: size + 2, height: size + 2 }}
//                 resizeMode="cover"
//               />
//             );
//           }

//           return <Icon color={iconColor} size={size} />;
//         },
//       })}
//       tabBarOptions={{
//         tabBarActiveTintColor: '#0074B7', // Active icon color
//         tabBarInactiveTintColor: '#888', // Inactive icon color
//         headerShown: false,
//       }}>
//       {BOTTOM_TAB_SCREENS.map(item => (
//         <Tab.Screen
//           key={item.name}
//           name={item.name}
//           component={item.component}
//         />
//       ))}
//     </Tab.Navigator>
//   );
// };

// export default BottomTab;
