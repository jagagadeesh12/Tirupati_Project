import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import InternalJob from '../screens/JobPosting';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} options={{headerShown: false}} />
      <Tab.Screen
        name="InternalJob"
        component={InternalJob}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
