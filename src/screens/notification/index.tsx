// /* eslint-disable react-native/no-inline-styles */
// import {View, FlatList, SafeAreaView} from 'react-native';
// import React from 'react';
// import BackHeader from '../../components/backHeader';
// import NotificationsContent from '../../components/Notificationscontent';
// import {NOTIFICATION_DATA} from '../../components/Notificationscontent/data';

// const Notification = ({navigation}: any) => {
//   return (
//     <SafeAreaView>
//       <View>
//         <BackHeader navigation={navigation} title={'Notifications'} />
//         <FlatList
//           data={NOTIFICATION_DATA}
//           keyExtractor={item => item.id}
//           contentContainerStyle={{paddingBottom: 100}}
//           renderItem={({item}) => (
//             <NotificationsContent
//               imageSource={item.imageSource}
//               content={item.content}
//               button={item.button}
//               present={item.present}
//               icon={item.icon}
//               heading={item.heading}
//             />
//           )}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Notification;
