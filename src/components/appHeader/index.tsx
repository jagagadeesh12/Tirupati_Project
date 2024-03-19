import {View, Text} from 'react-native';
import React from 'react';

import Avatar from '../atom/avatar';
import {IAppHeader} from '../../types';
import {SCREENS} from '../../screens';
import styles from './style';
import {useImage} from '../../hooks';

const fallBackImg = require('../../assets/images/appProfilePic.png');

const AppHeader = ({
  profilePic,
  name,
  designation,
  navigation,
  onPressProfile = () => navigation.navigate(SCREENS.PROFILE),
}: IAppHeader) => {
  const handleNotificationPress = () => {
    navigation.navigate(SCREENS.NOTIFICATION);
  };
  const {updatedUrl} = useImage(profilePic, fallBackImg);
  const truncatedName = name ? name.slice(0, 7) : '';
  return (
    <View style={styles.AppHeader}>
      <View style={styles.AppHeaderStyles}>
        <Avatar
          imageSource={updatedUrl}
          width={40}
          height={40}
          borderRadius={50}
        />
        {/* </TouchableOpacity> */}
        <View style={styles.headerStyles}>
          {/* <View style={{marginTop: 4}}>
            <Text style={styles.primaryText}>Hi,</Text>
            <Text style={styles.name}>
              {truncatedName}
              {name && name.length > 7 && '...'}
            </Text>
          </View> */}
          <Text style={styles.perchTextLogo}>Tirupati</Text>
        </View>
      </View>

      {/* <NotificationBing
      width={24}
      height={24}
      color="#454C52"
      onPress={handleNotificationPress}
    /> */}
    </View>
  );
};

export default AppHeader;
