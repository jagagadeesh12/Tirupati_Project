import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import SeeMore from '../atom/seeMore';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {ArrowDown2, ArrowDown3, ArrowUp2} from 'iconsax-react-native';
import {IJobCardComponent} from '../../types';

const JobsCard = ({
  id,
  jobTitle,
  jobLocation,
  experience,
  jobType,
  jobDescription,
  jobQualification,
  projectName,
  responsibilities,
  fixedBudget,
  variableBudget,
  manager,
  expireDate,
}: IJobCardComponent) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandCollapse = () => {
    setExpanded(!expanded);
  };
  return (
    <View style={styles.contentContainer}>
      {/* <ScrollView> */}
      <Text style={styles.jobTitle}>{jobTitle}</Text>
      <View style={styles.jobDetailsView}>
        <Text style={styles.jobDetails}>{jobLocation}</Text>
        <View style={styles.MonthContainer} />
        <Text style={styles.jobDetails}>{experience}</Text>
        <View style={styles.MonthContainer} />
        <Text style={styles.jobDetails}>{jobType}</Text>
      </View>
      {expanded && (
        <View>
          <View style={styles.description}>
            <SeeMore text={jobDescription} />
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.jobTitle}>Qualification Required</Text>
            <Text style={styles.qualificatioStyle}>{jobQualification}</Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.jobTitle}>Project</Text>
            <Text style={styles.qualificatioStyle}>{projectName}</Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.jobTitle}>Roles & Responsibilities </Text>
            <Text style={styles.qualificatioStyle}>{responsibilities}</Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.jobTitle}>Budget</Text>
            <Text style={styles.qualificatioStyle}>Fixed - {fixedBudget}</Text>
            <Text style={styles.qualificatioStyle}>
              Variable - {variableBudget}
            </Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={styles.jobTitle}>Hiring Manager</Text>
            <Text style={styles.qualificatioStyle}>{manager}</Text>
            {/* <Text style={styles.qualificatioStyle}>Rama V</Text> */}
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.activeTill}>Active till : {expireDate} </Text>
            <TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                {/* <Text style={styles.refer}>Refer</Text> */}
                {/* <Image
                  style={styles.referImage}
                  source={require('/Users/dws/Desktop/Perch/perch-app/src/assets/images/send.png')}
                /> */}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View>
        <TouchableOpacity onPress={handleExpandCollapse}>
          <View style={styles.expandButtonBottom}>
            {expanded ? (
              <ArrowUp2 style={{color: '#B9B9B9'}} />
            ) : (
              <ArrowDown2 style={{color: '#B9B9B9'}} />
            )}
          </View>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default JobsCard;
