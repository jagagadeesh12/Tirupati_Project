import React from 'react';
import {View, Text, Image} from 'react-native';
import {CardsDetails} from '../../../types';
import styles from './style';

const Viewofcards = ({
  festivalname,
  startDate,
  titleTournament,
  imageSource,
  backgroundColor,
}: CardsDetails) => {
  return (
    <View>
      <View style={[styles.mainContainer, {backgroundColor}]}>
        <View style={styles.flex}>
          <Text numberOfLines={2} style={styles.titleTournamentStyle}>
            {festivalname}
          </Text>

          <View style={styles.tournamentDateViewStyle}>
            <Text style={styles.dateTextStyle}>{startDate}</Text>
          </View>
        </View>
        <View>
          <Text numberOfLines={3} style={styles.titlecontent}>
            {titleTournament}
          </Text>
        </View>
        <View style={styles.imagecontainer}>
          <Image style={styles.imageStyle} source={imageSource} />
        </View>
      </View>
    </View>
  );
};
export default Viewofcards;
