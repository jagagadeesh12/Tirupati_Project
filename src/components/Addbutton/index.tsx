import React from 'react';
import {Text, TouchableOpacity,View} from 'react-native';
import styles from './style';
import {Add} from 'iconsax-react-native';
import {AddExperienceButtonType} from '../../types/component';

const ExperienceButton = ({onpress, buttonTitle}: AddExperienceButtonType) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.btn}>
      <Add size="20" color="white" style={styles.AddIcon} />
      <Text style={styles.ExperienceButton}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};
export default ExperienceButton;
