// /* eslint-disable react-native/no-inline-styles */
// import React from 'react';

// import {View, FlatList, ActivityIndicator} from 'react-native';
// import SeeMoreHolidays from './ImageScreen';
// // import Listofscreen from './Listofscreen';
// import {HOLIDAYSCARDLIST} from '../../../theme/color';
// // import {tournaments} from './data';
// import BackHeader from '../../../components/backHeader';
// import {FETCH_HOLIDAYS, GET_LOCATION_ID} from '../../../data/service/user';
// import {useQuery} from '@apollo/client';
// import Loader from '../../loader';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';

// const ImageScreen = ({navigation}: any) => {
//   //   const [islist, setisList] = useState(true);
//   const {
//     loading: locLoader,
//     error: locErr,
//     data: LocData,
//   } = useQuery(GET_LOCATION_ID);
//   // console.log("dddd",LocData)

//   const {loading, error, data} = useQuery(FETCH_HOLIDAYS, {
//     variables: {
//       inp: LocData?.getUserById.locationId,
//     },
//   });

//   // console.log('sneha', data?.getAllHolidays);

//   // if (loading) {
//   //   return <Loader />;
//   // }

//   // if (error || !data?.getAllHolidays || data.getAllHolidays.length === 0) {
//   //   return (
//   //     <View>
//   //       <Text>There are no holidays</Text>
//   //     </View>
//   //   );
//   // }

//   // const dateObject = new Date(item.holidayDate);
//   // const formattedDate = dateObject.toLocaleDateString('en-US', {
//   //   weekday: 'short',
//   //   month: 'short',
//   //   day: 'numeric',
//   //   year: 'numeric',
//   // });
//   if (loading) {
//     return (
//       <View
//         style={{
//           justifyContent: 'center',
//           alignItems: 'center',
//           flex: 1,
//         }}>
//         <ActivityIndicator size="small" color="#0074B7" />
//       </View>
//     );
//   }
  
//   return (
//     <WrapperContainer containerStyle={{}}>
//       <BackHeader navigation={navigation} title={'Holidays'} />
//       <FlatList
//         data={data?.getAllHolidays}
//         keyExtractor={item => item.id}
//         // contentContainerStyle={{padding: 16}}
//         showsVerticalScrollIndicator={false}
//         renderItem={({item, index}) => {
//           return (
//             <SeeMoreHolidays
//               titleTournament={item.holidayDescription}
//               startDate={item.holidayDate}
//               festivalname={item.holidayName}
//               imageSource={item.holidayImage}
//               backgroundColor={
//                 HOLIDAYSCARDLIST[index % HOLIDAYSCARDLIST.length]
//               }
//             />
//           );
//         }}
//       />
//     </WrapperContainer>
//   );
// };

// export default ImageScreen;
