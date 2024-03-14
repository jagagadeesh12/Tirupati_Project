/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React from 'react';
import {NotificationBing} from 'iconsax-react-native';
import {SCREENS} from '../../screens';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({navigation}: any) => {
  const handleNotificationPress = () => {
    navigation.navigate(SCREENS.NOTIFICATION);
  };
  return (
    // <SafeAreaView>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
      }}>
      <View style={{width: 20}} />
      <Image source={require('../../assets/images/Perch.png')} />
      {/* <NotificationBing
        width={24}
        height={24}
        color="#454C52"
        onPress={handleNotificationPress}
      /> */}
    </View>
    // </SafeAreaView>
  );
};

export default Header;
