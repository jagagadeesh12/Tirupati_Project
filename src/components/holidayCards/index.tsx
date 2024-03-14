import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import moment from 'moment';
const dimensions = Dimensions.get('window');
const imageWidth = 160;
const imageHeight = 90 * (dimensions.height / 667);

interface Props {
  holidayImage: string;
  holidayName: string;
  holidayDate: string;
  index: number;
}
const HolidayCards = ({holidayImage, holidayName, holidayDate, index}: Props) => {
  // const formattedDate = moment(holidayDate).format('MMMM D');
  const dateObject = moment(holidayDate);
  const dayWithSuffix = dateObject.format('Do');
  const month = dateObject.format('MMMM');
  const formattedDate = `${dayWithSuffix} ${month}`;
  return (
    <View style={{...styles.container, marginLeft: index==0?20:0, marginRight: 8}}>
      <Image
        source={{
          uri: holidayImage,
        }}
        width={149}
        // height={90}
        // width={imageWidth}
        height={imageHeight}
        resizeMode="stretch"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{borderRadius: 8}}
      />
      <Text style={styles.primaryText}>{formattedDate}</Text>
      <Text style={styles.secondaryText}>{holidayName}</Text>
    </View>
  );
};

export default HolidayCards;
