import React from 'react';
import context from './context';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import moment from 'moment';

const SeeMoreHolidays = ({
  festivalname,
  startDate,
  titleTournament,
  imageSource,
  backgroundColor,
}: context) => {
  const dateObject = moment(startDate);
  const dayWithSuffix = dateObject.format('Do');
  const month = dateObject.format('MMMM');
  const formattedDate = `${dayWithSuffix} ${month}`;
  return (
    // <View>
    <View style={[styles.mainContainer, {backgroundColor}]}>
      <View style={styles.flex}>
        <Text numberOfLines={2} style={styles.titleTournamentStyle}>
          {festivalname}
        </Text>

        <View style={styles.tournamentDateViewStyle}>
          <Text style={styles.dateTextStyle}>{formattedDate}</Text>
        </View>
      </View>
      <View style={{width: '62%'}}>
        <Text multiplelines={true} style={styles.TitleContent}>
          {titleTournament}
        </Text>
      </View>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.imageStyle}
          source={{uri: imageSource}}
          height={150}
          width={150}
          resizeMethod="resize"
        />
      </View>
    </View>
    // </View>
  );
};
export default SeeMoreHolidays;
