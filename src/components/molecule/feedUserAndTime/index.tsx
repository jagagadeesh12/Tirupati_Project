import {View, Text} from 'react-native';
import React from 'react';
import {More} from 'iconsax-react-native';

import styles from './styles';
import Avatar from '../../atom/avatar';
import {IFeedByUser} from '../../../types';

const FeedUserAndTime = ({imageSource, fullName, feedTime}: IFeedByUser) => {
  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection: 'row'}}>
        <Avatar
          width={42}
          height={42}
          borderRadius={60}
          imageSource={imageSource}
        />
        <View style={styles.headerTitleContainer}>
          <Text style={styles.primaryText}>{fullName}</Text>
          <Text style={styles.time}>{feedTime}</Text>
        </View>
      </View>
      {/* <More style={styles.moreIcon} color="#454C52" size={20} /> */}
    </View>
  );
};

export default FeedUserAndTime;
