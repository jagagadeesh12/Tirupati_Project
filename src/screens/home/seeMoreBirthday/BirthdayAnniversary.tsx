import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {BirthdaysDetails} from '../../../types';
import styles from './style';
import moment from 'moment';
import Badge from '../../../components/atom/Badges';
import {useHome, useImage} from '../../../hooks';
import {useBearUserDetails} from '../../../data/slices';
import {Avatar} from '../../../components';
import {getExperienceSuffix} from '../../../utils';

const generateBoxShadowStyle = (
  xOffset: number,
  yOffset: number,
  shadowColorIos: string,
  shadowOpacity: number,
  shadowRadius: number,
  elevation: number,
  shadowColorAndroid: string,
) => {
  if (Platform.OS === 'ios') {
    styles.BoxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: {width: xOffset, height: yOffset},
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === 'android') {
    styles.BoxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};
const fallbackImage = require('../../../assets/images/appProfilePic.png');

const BirthdayAniversary = ({
  title,
  imageSource,
  userId,
  date,
  isBagde = false,
  user,
}: BirthdaysDetails) => {
  //console.log("title",title)
  // generateBoxShadowStyle(-3, 2, 'white', 0.2, 4, 0.5, '#00000017');
  // const currentYear = moment().year(); // Get the current year
  // const formatDate = moment(date).format(`MMM DD ${currentYear}`);

  // const formattedDate = moment(date).format('MMMM D');
  const dateObject = moment(date);
  const {currentUser} = useBearUserDetails();

  const month = dateObject.format('MMMM');
  const dayWithSuffix = dateObject.format('Do');
  const formattedDate = ` ${month}, ${dayWithSuffix}`;
  // console.log(
  //   '  userId == currentUser?.userId ',
  //   currentUser?.userId,
  //   userId,
  //   userId == currentUser?.userId,
  // );
  const pic =
    userId == currentUser?.userId ? currentUser.profileImage : imageSource;

  const {updatedUrl} = useImage(pic, fallbackImage);
  // const yearsOfExperience = getExperienceSuffix(user?.dateOfJoining)?.slice(0,1);

  return (
    <View
      style={[
        styles.ContainerCard,
        {borderWidth: 1, borderColor: 'whitesmoke'},
      ]}>
      <View style={styles.HorizontalLine} />
      <View style={{marginHorizontal: 8}}>
        {/* <Image source={updatedUrl} style={styles.ImagStyles} /> */}
        <Avatar
          width={45}
          height={45}
          imageSource={updatedUrl}
          borderRadius={60}
        />
      </View>
      <View style={styles.ImagesFlex}>
        <View>
          <Text style={styles.Titles} numberOfLines={3}>
            {title}
          </Text>
          <Text style={styles.Dates}>{formattedDate}</Text>
        </View>
      </View>
      {isBagde ? (
        <View style={styles.ImagesStyles}>
          {/* <Image
              source={imageSources ? {uri: imageSources} : defaultImage}
              style={styles.Image}
            /> */}
          <Image
            style={{height: 24, width: 36, top: -15, right: -6}}
            source={require('../../../assets/images/Rectangles.png')}
          />
          {/* <Badge /> */}
          <Text style={styles.Experience}>
            {getExperienceSuffix(user?.dateOfJoining)?.slice(0, 1)}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default BirthdayAniversary;
