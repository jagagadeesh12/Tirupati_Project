import {View, Text} from 'react-native';
import React from 'react';
import Avatar from '../atom/avatar';
import styles from './styles';
import moment from 'moment';
import {useBearUserDetails} from '../../data/slices';
import {useImage} from '../../hooks';
import {getExperienceSuffix} from '../../utils';

interface Props {
  profileImage: string | null;
  fullName: string;
  dob: string;
  userId: string;
  isBirthday: boolean;
  isAnniversary: boolean;
  workExperience: number | null;
  dateOfJoining: string;
  index?: number;
}

const fallbackImage = require('../../assets/images/appProfilePic.png');

const CelebrationCard = ({
  profileImage,
  fullName,
  dob,
  userId,
  isAnniversary,
  isBirthday,
  dateOfJoining,
  workExperience = 1,
  index,
}: Props) => {
  const dateObject = moment(isAnniversary ? dateOfJoining : dob);
  const dayWithSuffix = dateObject.format('Do');
  const month = dateObject.format('MMMM');
  let formattedDate = `${dayWithSuffix} ${month}`;

  const {currentUser} = useBearUserDetails();

  const pic =
    userId === currentUser?.userId ? currentUser.profileImage : profileImage;

  const {updatedUrl} = useImage(pic, fallbackImage);

  const displayWorkExperience = isAnniversary
    ? getExperienceSuffix(dateOfJoining)
    : 'Birthday';

  return (
    <View
      style={{
        ...styles.Container,
        marginLeft: index == 0 ? 16 : 0,
        marginRight: 8,
      }}>
      <Avatar
        width={60}
        height={60}
        imageSource={updatedUrl}
        borderRadius={60}
      />
      <Text style={styles.name}>{fullName}</Text>
      <Text style={styles.date}>{formattedDate}</Text>
      {isAnniversary && (
        <Text style={styles.infoText}>{displayWorkExperience}</Text>
      )}
      {!isAnniversary && (
        <Text style={styles.infoText}>{displayWorkExperience}</Text>
      )}
    </View>
  );
};

export default CelebrationCard;
