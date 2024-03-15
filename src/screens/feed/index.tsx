// import {FlatList, View, RefreshControl, ActivityIndicator} from 'react-native';
// import React from 'react';
// import {AppHeader, UploadProgress} from '../../components';
// import {SCREENS} from '..';
// import {useFeed} from '../../hooks';
// import RenderFeedItem from '../../template/feedListView/renderFeedItem';
// import WrapperContainer from '../../components/WrapperContainer/WrapperContainer';
// import CustomButtonScreen from '../../components/CustomButton';
// import imagepath from '../../constant/imagepath';

// const index = ({navigation, route}: any) => {
//   const initialProfileFunc = route?.params?.onPressProfile;
//   // let shouldShowDrawer = useRef(false).current;
//   const onPressProfile = () => {
//     initialProfileFunc(false);
//     // shouldShowDrawer = !shouldShowDrawer;
//   };
//   const {
//     currentUser,
//     uploadStatus,
//     image,
//     feedDataStore,
//     fetchNext,
//     fetchLatest,
//     isLoading,
//     refreshing,
//     hasMore,
//   } = useFeed();

//   const onRefresh = () => fetchLatest();

//   const loadMoreData = () => fetchNext(feedDataStore);

//   return (
//     <WrapperContainer containerStyle={{padding: 0}}>
//       <AppHeader
//         onPressProfile={onPressProfile}
//         profilePic={currentUser?.profileImage}
//         name={currentUser?.fullName}
//         designation={''}
//         navigation={navigation}
//       />
//       {uploadStatus.progress ? (
//         <UploadProgress
//           uri={image}
//           progress={
//             uploadStatus.progress > 0.5
//               ? uploadStatus.progress - 0.2
//               : uploadStatus.progress
//           }
//           lineColor={''}
//         />
//       ) : null}
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         data={feedDataStore || []}
//         renderItem={({item, index}) => (
//           <RenderFeedItem item={item} index={index} />
//         )}
//         ItemSeparatorComponent={() => (
//           <View
//             style={{
//               borderWidth: 0.5,
//               marginHorizontal: 16,
//               marginVertical: 4,
//               borderColor: '#CED2D6',
//             }}
//           />
//         )}
//         ListFooterComponent={() => (
//           <View
//             style={{
//               paddingVertical: 40,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             {isLoading && hasMore && (
//               <ActivityIndicator size="small" color="#0000ff" />
//             )}
//           </View>
//         )}
//         onEndReachedThreshold={0.7}
//         onEndReached={hasMore ? loadMoreData : null}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }
//         keyExtractor={(item, index) => index.toString()}
//       />

//       <CustomButtonScreen
//         onPress={() => navigation.navigate(SCREENS.CREATE_FEED, {feed: null})}
//         image={imagepath.plusimage}
//         imageStyle={{height: 20, width: 20}}
//         iconStyle={{marginRight: 0}}
//         containerStyle={{
//           width: 56,
//           height: 56,
//           position: 'absolute',
//           borderRadius: 35,
//           right: 16,
//           bottom: 16,
//         }}
//         borderRadius={100}
//       />
//     </WrapperContainer>
//   );
// };

// export default index;
import {View, Text} from 'react-native';
import React from 'react';

const index = () => {
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default index;
