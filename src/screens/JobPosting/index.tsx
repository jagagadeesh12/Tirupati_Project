import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import JobsCard from '../../components/jobsCard';
import {FlatList} from 'react-native-gesture-handler';

const InternalJob = () => {
  const jobData = [
    {
      id: 1,
      title: 'Engineering Manager',
      location: 'Hyderabad',
      experience: '10-15 Years',
      type: 'Full Time',
      description:
        'We are seeking a talented and experienced React Native Developer to join our dynamic team. As a React Native Developer, you will be responsible for developing and maintaining high-quality mobile applications for both iOS and Android platforms. The ideal candidate has a strong background in mobile application development, a passion for creating innovative solutions, and a commitment to delivering an exceptional user experience.',
      jobQualification: 'B.Tech',
      projectName: 'Perch',
      responsibilities:
        'If you are passionate about mobile application development, possess the required skills, and want to be part of an innovative team,we would love to hear from you. Apply now to join our growing company and contribute to the success of our mobile applications.',
      fixedBudget: '400000',
      variableBudget: '100000',
      manager: 'Mahesh Nayani',
      expireDate: '25/01/2024',
    },
    {
      id: 2,
      title: 'Software Engineer',
      location: 'Bangalore',
      experience: '5-8 Years',
      type: 'Part Time',
      description:
        'We are seeking a talented and experienced React Native Developer to join our dynamic team. As a React Native Developer, you will be responsible for developing and maintaining high-quality mobile applications for both iOS and Android platforms. The ideal candidate has a strong background in mobile application development, a passion for creating innovative solutions, and a commitment to delivering an exceptional user experience.',
      jobQualification: 'B.Tech',
      projectName: 'Perch',
      responsibilities:
        'If you are passionate about mobile application development, possess the required skills, and want to be part of an innovative team,we would love to hear from you. Apply now to join our growing company and contribute to the success of our mobile applications.',
      fixedBudget: '400000',
      variableBudget: '100000',
      manager: 'Mahesh Nayani',
      expireDate: '25/01/2024',
    },
    {
      id: 3,
      title: 'Sales Representative',
      location: 'Mumbai',
      experience: '8-12 Years',
      type: 'Full Time',
      description:
        'We are seeking a talented and experienced React Native Developer to join our dynamic team. As a React Native Developer, you will be responsible for developing and maintaining high-quality mobile applications for both iOS and Android platforms. The ideal candidate has a strong background in mobile application development, a passion for creating innovative solutions, and a commitment to delivering an exceptional user experience.',
      jobQualification: 'B.Tech',
      projectName: 'Perch',
      responsibilities:
        'If you are passionate about mobile application development, possess the required skills, and want to be part of an innovative team,we would love to hear from you. Apply now to join our growing company and contribute to the success of our mobile applications.',
      fixedBudget: '400000',
      variableBudget: '100000',
      manager: 'Mahesh Nayani',
      expireDate: '25/01/2024',
    },
    {
      id: 4,
      title: 'Customer Support Specialist',
      location: 'Delhi',
      experience: '3-5 Years',
      type: 'Contract',
      description:
        'We are seeking a talented and experienced React Native Developer to join our dynamic team. As a React Native Developer, you will be responsible for developing and maintaining high-quality mobile applications for both iOS and Android platforms. The ideal candidate has a strong background in mobile application development, a passion for creating innovative solutions, and a commitment to delivering an exceptional user experience.',
      jobQualification: 'B.Tech',
      projectName: 'Perch',
      responsibilities:
        'If you are passionate about mobile application development, possess the required skills, and want to be part of an innovative team,we would love to hear from you. Apply now to join our growing company and contribute to the success of our mobile applications.',
      fixedBudget: '400000',
      variableBudget: '100000',
      manager: 'Mahesh Nayani',
      expireDate: '25/01/2024',
    },
    {
      id: 5,
      title: 'Project Manager',
      location: 'Chennai',
      experience: '12-15 Years',
      type: 'Full Time',
      description:
        'We are seeking a talented and experienced React Native Developer to join our dynamic team. As a React Native Developer, you will be responsible for developing and maintaining high-quality mobile applications for both iOS and Android platforms. The ideal candidate has a strong background in mobile application development, a passion for creating innovative solutions, and a commitment to delivering an exceptional user experience.',
      jobQualification: 'B.Tech',
      projectName: 'Perch',
      responsibilities:
        'If you are passionate about mobile application development, possess the required skills, and want to be part of an innovative team,we would love to hear from you. Apply now to join our growing company and contribute to the success of our mobile applications.',
      fixedBudget: '400000',
      variableBudget: '100000',
      manager: 'Mahesh Nayani',
      expireDate: '25/01/2024',
    },
    {
      id: 6,
      title: 'Marketing Coordinator',
      location: 'Kolkata',
      experience: '6-10 Years',
      type: 'Part Time',
      description:
        'We are seeking a talented and experienced React Native Developer to join our dynamic team. As a React Native Developer, you will be responsible for developing and maintaining high-quality mobile applications for both iOS and Android platforms. The ideal candidate has a strong background in mobile application development, a passion for creating innovative solutions, and a commitment to delivering an exceptional user experience.',
      jobQualification: 'B.Tech',
      projectName: 'Perch',
      responsibilities:
        'If you are passionate about mobile application development, possess the required skills, and want to be part of an innovative team,we would love to hear from you. Apply now to join our growing company and contribute to the success of our mobile applications.',
      fixedBudget: '400000',
      variableBudget: '100000',
      manager: 'Mahesh Nayani',
      expireDate: '25/01/2024',
    },
    {
      id: 7,
      title: 'Data Analyst',
      location: 'Pune',
      experience: '4-7 Years',
      type: 'Full Time',
      description:
        'We are seeking a talented and experienced React Native Developer to join our dynamic team. As a React Native Developer, you will be responsible for developing and maintaining high-quality mobile applications for both iOS and Android platforms. The ideal candidate has a strong background in mobile application development, a passion for creating innovative solutions, and a commitment to delivering an exceptional user experience.',
      jobQualification: 'B.Tech',
      projectName: 'Perch',
      responsibilities:
        'If you are passionate about mobile application development, possess the required skills, and want to be part of an innovative team,we would love to hear from you. Apply now to join our growing company and contribute to the success of our mobile applications.',
      fixedBudget: '400000',
      variableBudget: '100000',
      manager: 'Mahesh Nayani',
      expireDate: '25/01/2024',
    },
    {
      id: 8,
      title: 'UI/UX Designer',
      location: 'Ahmedabad',
      experience: '7-10 Years',
      type: 'Contract',
      description:
        'We are seeking a talented and experienced React Native Developer to join our dynamic team. As a React Native Developer, you will be responsible for developing and maintaining high-quality mobile applications for both iOS and Android platforms. The ideal candidate has a strong background in mobile application development, a passion for creating innovative solutions, and a commitment to delivering an exceptional user experience.',
      jobQualification: 'B.Tech',
      projectName: 'Perch',
      responsibilities:
        'If you are passionate about mobile application development, possess the required skills, and want to be part of an innovative team,we would love to hear from you. Apply now to join our growing company and contribute to the success of our mobile applications.',
      fixedBudget: '400000',
      variableBudget: '100000',
      manager: 'Mahesh Nayani',
      expireDate: '25/01/2024',
    },
    {
      id: 9,
      title: 'HR Manager',
      location: 'Jaipur',
      experience: '10-12 Years',
      type: 'Full Time',
      description:
        'We are seeking a talented and experienced React Native Developer to join our dynamic team. As a React Native Developer, you will be responsible for developing and maintaining high-quality mobile applications for both iOS and Android platforms. The ideal candidate has a strong background in mobile application development, a passion for creating innovative solutions, and a commitment to delivering an exceptional user experience.',
      jobQualification: 'B.Tech',
      projectName: 'Perch',
      responsibilities:
        'If you are passionate about mobile application development, possess the required skills, and want to be part of an innovative team,we would love to hear from you. Apply now to join our growing company and contribute to the success of our mobile applications.',
      fixedBudget: '400000',
      variableBudget: '100000',
      manager: 'Mahesh Nayani',
      expireDate: '25/01/2024',
    },
    {
      id: 10,
      title: 'Financial Analyst',
      location: 'Lucknow',
      experience: '8-10 Years',
      type: 'Part Time',
      description:
        'We are seeking a talented and experienced React Native Developer to join our dynamic team. As a React Native Developer, you will be responsible for developing and maintaining high-quality mobile applications for both iOS and Android platforms. The ideal candidate has a strong background in mobile application development, a passion for creating innovative solutions, and a commitment to delivering an exceptional user experience.',
      jobQualification: 'B.Tech',
      projectName: 'Perch',
      responsibilities:
        'If you are passionate about mobile application development, possess the required skills, and want to be part of an innovative team,we would love to hear from you. Apply now to join our growing company and contribute to the success of our mobile applications.',
      fixedBudget: '400000',
      variableBudget: '100000',
      manager: 'Mahesh Nayani',
      expireDate: '25/01/2024',
    },
  ];
  const renderItem = ({item}) => (
    <View>
      <JobsCard
        id={item.id}
        jobTitle={item.title}
        jobLocation={item.location}
        experience={item.experience}
        jobType={item.type}
        jobDescription={item.description}
        jobQualification={item.jobQualification}
        projectName={item.projectName}
        responsibilities={item.responsibilities}
        fixedBudget={item.fixedBudget}
        variableBudget={item.variableBudget}
        manager={item.manager}
        expireDate={item.expireDate} // Add other properties as needed
      />
    </View>
  );

  return (
    <FlatList
      data={jobData}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default InternalJob;