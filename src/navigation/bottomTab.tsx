import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../../src/screens/feed';
import InternalJob from '../screens/JobPosting';
import {Image} from 'react-native';
import { PlaceAround, Services } from '../screens';
import Events from '../screens/Event';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/images/Feed.png')}
              style={{width: 20, height: 20, tintColor: '#EAC953'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Job"
        component={InternalJob}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/images/Job.png')}
              style={{width: 20, height: 20, tintColor: '#EE8659'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Places Around"
        component={PlaceAround}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/images/PacesAround.png')}
              style={{width: 30, height: 20, tintColor: '#00BABA'}}
            />
          ),
        }}
      />
       <Tab.Screen
        name="Events"
        component={Events}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/images/Events.png')}
              style={{width: 40, height: 40, tintColor: '#000000'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/images/Services.png')}
              style={{width: 23, height: 23, tintColor: '#CC5500'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
