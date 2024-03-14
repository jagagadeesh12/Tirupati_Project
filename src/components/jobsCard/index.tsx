import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import SeeMore from '../atom/seeMore';
import {ArrowDown2, ArrowDown3, ArrowUp2} from 'iconsax-react-native';
import {IJobCardComponent} from '../../types';
import imagepath from '../../constant/imagepath';
import ReferJob from '../../template/ReferJobBottomSheet';

const JobsCard = ({item}: IJobCardComponent) => {
  const [expanded, setExpanded] = useState(false);
  const {
    title,
    location,
    experienceRequired,
    jobType,
    description,
    qualificationRequired,
    project,
    responsibility,
    budget,
    hiringManager,
    expirationDate,
  } = item;

  const handleExpandCollapse = () => {
    setExpanded(!expanded);
  };
  const dateObject = new Date(expirationDate);

  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  const formattedDate = `${day < 10 ? '0' : ''}${day}/${
    month < 10 ? '0' : ''
  }${month}/${year}`;
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const closeModal = () => setShowBottomSheet(false);

  return (
    <View style={styles.contentContainer}>
      {/* <ScrollView> */}
      <Text style={styles.jobTitle}>{title}</Text>
      <View style={styles.jobDetailsView}>
        <Text style={styles.jobDetails}>{location}</Text>
        <View style={styles.MonthContainer} />
        <Text style={styles.jobDetails}>{experienceRequired}</Text>
        <View style={styles.MonthContainer} />
        <Text style={styles.jobDetails}>{jobType}</Text>
      </View>
      {expanded && (
        <View>
          <View style={styles.description}>
            <Text style={styles.jobDescriptionHeader}>Description</Text>
            <SeeMore text={description} />
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.jobTitle}>Qualification Required</Text>
            <Text style={styles.qualificationStyle}>
              {qualificationRequired}
            </Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.jobTitle}>Project</Text>
            <Text style={styles.qualificationStyle}>{project}</Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.jobTitle}>Roles & Responsibilities </Text>
            <Text style={styles.qualificationStyle}>{responsibility}</Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.jobTitle}>Budget</Text>
            <Text style={styles.qualificationStyle}>Fixed - {budget}</Text>
            <Text style={styles.qualificationStyle}>Variable - {budget}</Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.jobTitle}>Hiring Manager</Text>
            <Text style={styles.qualificationStyle}>{hiringManager}</Text>
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.activeTill}>
              Active till : {formattedDate}{' '}
            </Text>
            {/* <TouchableOpacity onPress={() => setShowBottomSheet(true)}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.refer}>Refer</Text>
                <Image style={styles.referImage} source={imagepath.referIcon} />
              </View>
            </TouchableOpacity> */}
          </View>
        </View>
      )}
      {/* <View> */}
      <TouchableOpacity
        style={styles.expandButtonBottom}
        onPress={handleExpandCollapse}>
        {expanded ? (
          <ArrowUp2 style={{color: '#B9B9B9', top: 8}} />
        ) : (
          <ArrowDown2 style={{color: '#B9B9B9', top: 8}} />
        )}
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={showBottomSheet}
        onRequestClose={closeModal}>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 16,
          }}>
          <ReferJob closeModal={closeModal} jobTitle={title} />
        </View>
      </Modal>
    </View>
  );
};

export default JobsCard;
