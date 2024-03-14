import {View, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import React from 'react';
import color, {APP_COLOR} from '../../theme/color';
import {SCREENS} from '../../screens';
import {IContextHeader} from '../../types/component';

const ContentHeader = ({title, navigation}: IContextHeader) => {
  const handleSeeMore = () => {
    if (title === 'Upcoming Holidays') {
      navigation.navigate(SCREENS.SEE_MORE_HOLIDAYS);
    } else if (title === 'Birthdays & Anniversaries') {
      navigation.navigate(SCREENS.SEE_MORE_ANNIVERSARIES);
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}>
      <Text style={{fontSize: 14, color: APP_COLOR.black, fontWeight: '500'}}>
        {title}
      </Text>
      <TouchableOpacity onPress={handleSeeMore}>
        <Text style={{fontSize: 10, color: color.LIGHT_MODE.primary}}>
          See more
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContentHeader;
