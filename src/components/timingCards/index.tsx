import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './styles';
import PerchIcon from '../PerchIcon';
import color, {APP_COLOR} from '../../theme/color';
import {IUserTimingCard} from '../../types';
import {CustomActivityIndicator, Mask} from '../atom';

const TimingCards = ({
  item: {primaryText, secondaryText, Icon, id},
  index,
  isCheckInLoading,
  isCheckOutLoading,
  onPress,
}: IUserTimingCard) => {
  const isLoading = index === 0 ? isCheckInLoading : isCheckOutLoading;
  const isClickable = id === 3 || id === 4;
  const handlePress = () => {
    if (isClickable) {
      // Call the callback function with the id when clicked
      // onPress(id);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        marginLeft: (index + 1) % 2 === 0 ? 8 : 0,
        padding: 16,
        backgroundColor: APP_COLOR.cards,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        borderRadius: 8,
        marginBottom: 8,
      }}>
      <TouchableOpacity
        onPress={handlePress}
        disabled={!isClickable}
        style={{flex: 1}}>
        <View style={{flex: 1, marginRight: 16}}>
          <Text style={styles.primaryText}>{primaryText}</Text>
          <Text style={styles.SecondaryText}>{secondaryText}</Text>
        </View>
        <Mask isLoading={isLoading} />
      </TouchableOpacity>
      <PerchIcon
        style={{alignSelf: 'center'}}
        name={Icon}
        size={20}
        color={color.LIGHT_MODE.text}
      />
    </View>
  );
};

export default TimingCards;
