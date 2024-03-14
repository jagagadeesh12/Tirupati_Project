// import React, {useCallback, useEffect, useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   FlatList,
//   ActivityIndicator,
// } from 'react-native';
// import BackHeader from '../../../components/backHeader';
// import styles from './style';
// import BirthdayAniversary from './BirthdayAnniversary';
// // import {Cake, MedalStar} from 'iconsax-react-native';
// import {
//   GET_UPCOMINGANNIVERSARIES,
//   BIRTHDAYSANNIVERSARIES,
// } from '../../../data/service/user';
// import {useQuery} from '@apollo/client';
// import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';

// const SeeMoreBirthday = ({navigation}: any) => {
//   const monthsInYear = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];

//   const [modifiedBirthdayData, setModifiedBirthdayData] = useState([]);
//   const [modifiedAnniversaryData, setModifiedAnniversaryData] = useState([]);
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [birthdayLoading, setBirthdayLoading] = useState(true);
//   const [anniversaryLoading, setAnniversaryLoading] = useState(true);

//   const {data: birthdaysDate} = useQuery(BIRTHDAYSANNIVERSARIES);
//   const {data: anniversaryData} = useQuery(GET_UPCOMINGANNIVERSARIES);

//   useEffect(() => {
//     if (selectedTab === 0 && birthdaysDate) {
//       const usersByMonth = {};
//       birthdaysDate.getAllUpcomingBirthdays.forEach(user => {
//         const month = new Date(user.dob).getMonth() + 1;
//         if (!usersByMonth[month]) {
//           usersByMonth[month] = [];
//         }
//         usersByMonth[month].push(user);
//       });

//       const dataForFlatList = Object.entries(usersByMonth).map(
//         ([month, users]) => ({
//           month: monthsInYear[parseInt(month) - 1],
//           users,
//         }),
//       );
//       setModifiedBirthdayData(dataForFlatList);
//       setBirthdayLoading(false);
//     } else if (selectedTab === 1 && anniversaryData) {
//       const usersAnniversariesByMonth = {};
//       anniversaryData.getAllUpcomingAnniversaries.forEach(user => {
//         const month = new Date(user.dateOfJoining).getMonth() + 1;
//         if (!usersAnniversariesByMonth[month]) {
//           usersAnniversariesByMonth[month] = [];
//         }
//         usersAnniversariesByMonth[month].push(user);
//       });
//       const anniversariesDataForFlatList = Object.entries(
//         usersAnniversariesByMonth,
//       ).map(([month, users]) => ({
//         month: monthsInYear[parseInt(month) - 1],
//         users,
//       }));
//       setModifiedAnniversaryData(anniversariesDataForFlatList);
//       setAnniversaryLoading(false);
//     }
//   }, [selectedTab, birthdaysDate, anniversaryData]);

//   const renderItem = ({item}) => (
//     <View>
//       <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
//         <View style={styles.MonthContainer} />
//         <Text style={styles.MonthText}>{item.month}</Text>
//       </View>
//       <View
//         style={{
//           left: 3,
//           top: 16,
//           zIndex: -1,
//           height: '100%',
//           width: 0,
//           position: 'absolute',
//           borderColor: '#CED2D6',
//           borderWidth: 1,
//           borderRadius: 1,
//         }}
//       />
//       <View style={{marginLeft: 16}}>
//         {item.users.map(user => (
//           <BirthdayAniversary
//             key={user.userId}
//             user={user}
//             date={selectedTab === 0 ? user.dob : user.dateOfJoining}
//             title={user.fullName}
//             imageSource={user.profileImage}
//             userId={user.userId}
//             isBagde={selectedTab === 1}
//           />
//         ))}
//       </View>
//     </View>
//   );

//   const renderLoader = () => {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <ActivityIndicator size="small" color="#0074B7" />
//       </View>
//     );
//   };
//   return (
//     <WrapperContainer>
//       <BackHeader navigation={navigation} title={'Birthdays & Anniversaries'} />
//       <View style={styles.Container}>
//         <View style={styles.MainContainer}>
//           <TouchableOpacity
//             style={{
//               color: selectedTab === 0 ? 'blue' : 'white',
//               // marginTop: -140,
//             }}
//             onPress={() => {
//               setSelectedTab(0);
//               setBirthdayLoading(true);
//             }}>
//             <View
//               style={[
//                 styles.IconsContent,
//                 {
//                   borderBottomWidth: selectedTab === 0 ? 2 : 0,
//                   borderBottomColor: selectedTab === 0 ? '#0074B7' : '',
//                 },
//               ]}>
//               <Cake size="20" color="#454C52" />
//               <Text
//                 style={[
//                   styles.Content,
//                   {color: selectedTab === 0 ? 'black' : 'gray'},
//                 ]}>
//                 Birthdays
//               </Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               color: selectedTab === 1 ? 'blue' : '',
//               // marginTop: -140,
//             }}
//             onPress={() => {
//               setSelectedTab(1);
//               setAnniversaryLoading(true);
//             }}>
//             <View
//               style={[
//                 styles.IconsContent,
//                 {
//                   borderBottomWidth: selectedTab === 1 ? 2 : 0,
//                   borderBottomColor: selectedTab === 1 ? '#0074B7' : '',
//                 },
//               ]}>
//               <MedalStar size="20" color="#454C52" />
//               <Text
//                 style={[
//                   styles.Content,
//                   {color: selectedTab === 1 ? 'black' : 'gray'},
//                 ]}>
//                 Anniversaries
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={{flex: 1}}>
//           {selectedTab === 0 &&
//             (birthdayLoading && modifiedBirthdayData.length == 0 ? (
//               renderLoader()
//             ) : (
//               <FlatList
//                 data={modifiedBirthdayData}
//                 keyExtractor={item => item.month}
//                 renderItem={renderItem}
//               />
//             ))}
//           {selectedTab === 1 &&
//             (anniversaryLoading && modifiedAnniversaryData.length == 0 ? (
//               renderLoader()
//             ) : (
//               <FlatList
//                 data={modifiedAnniversaryData}
//                 keyExtractor={item => item.month}
//                 renderItem={renderItem}
//               />
//             ))}
//         </View>
//       </View>
//     </WrapperContainer>
//   );
// };

// export default SeeMoreBirthday;
