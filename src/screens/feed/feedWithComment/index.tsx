// import {
//   View,
//   Text,
//   SafeAreaView,
//   FlatList,
//   TouchableOpacity,
//   TextInput,
//   Keyboard,
//   KeyboardAvoidingView,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import BackHeader from '../../../components/backHeader';
// import RenderFeedItem from '../../../template/feedListView/renderFeedItem';
// import useBearFeedData from '../../../data/slices/useBearFeedData';
// import RenderComment from '../../../template/feedWithComment/renderComment';
// import {useLazyQuery, useMutation} from '@apollo/client';
// import {GET_ALL_COMMENTS} from '../../../graphql/queries/feeds';
// import {CREATE_FEED, LIKE_FEED} from '../../../graphql/mutations';
// import PerchIcon from '../../../components/PerchIcon';
// import {useHooks} from './useHooks';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import WrapperContainer from '../../../components/WrapperContainer/WrapperContainer';

// const FeedWithComment = (props: any) => {
//   const feedId = props?.route?.params?.feedId;
//   const {
//     navigation,
//     onPressBack,
//     item,
//     totalComment,
//     setCurrentFeedId,
//     currentFeedId,
//     onPressLike,
//     originalComment,
//     shouldRefetchComment,
//     onPressComment,
//     parentComment,
//     commentData,
//     replyText,
//     setReplyText,
//     onReply,
//   } = useHooks(feedId);

//   return (
//     <WrapperContainer containerStyle={{padding: 0}}>
//       <BackHeader
//         containerStyle={{padding: 16}}
//           onPressBack={onPressBack}
//           navigation={navigation}
//           title={'Post'}
//         />
//       <KeyboardAwareScrollView
//         contentContainerStyle={{flexGrow: 1}}
//         style={{backgroundColor: 'white', marginBottom: 4}}>
        
//         <View style={{flex: 1}}>
//           <RenderFeedItem
//             item={item}
//             isPostFeed={true}
//             totalComment={totalComment}
//             onPressComment={() => {
//               setCurrentFeedId(feedId);
//             }}
//           />
//           {currentFeedId == feedId ? (
//             <FlatList
//               data={originalComment}
//               extraData={shouldRefetchComment}
//               renderItem={({item, index}) => (
//                 <RenderComment
//                   index={index}
//                   onPressLike={onPressLike}
//                   onPressComment={onPressComment}
//                   item={item}
//                 />
//               )}
//               ItemSeparatorComponent={() => (
//                 <View style={{borderWidth: 0.5, borderColor: '#CED2D6'}} />
//               )}
//               ListEmptyComponent={() => (
//                 <View
//                   style={{
//                     flex: 1,
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                   }}>
//                   <Text style={{color: 'black', fontWeight: 'bold'}}>
//                     No Comments Yet
//                   </Text>
//                   <Text style={{color: '#202124', fontSize: 12}}>
//                     Start the conversation
//                   </Text>
//                 </View>
//               )}
//               contentContainerStyle={{padding: 10}}
//               keyExtractor={(item, index) => index.toString()}
//             />
//           ) : (
//             <FlatList
//               data={[parentComment, ...commentData]}
//               extraData={shouldRefetchComment}
//               renderItem={({item, index}) => (
//                 <RenderComment
//                   index={index}
//                   onPressLike={onPressLike}
//                   isSubComment={true}
//                   // onPressComment={onPressComment}
//                   item={item}
//                 />
//               )}
//               contentContainerStyle={{padding: 10}}
//               keyExtractor={(item, index) => index.toString()}
//             />
//           )}
//         </View>
//         <View
//           style={{
//             backgroundColor: 'white',
//             width: 'auto',
//             marginHorizontal: 16,
//             flexDirection: 'row',
//             alignItems: 'center',
//             borderBottomWidth: 1,
//             borderColor: '#0074B7',
//           }}>
//           <TextInput
//             onChangeText={text => setReplyText(text)}
//             value={replyText}
//             placeholder={
//               currentFeedId == feedId
//                 ? 'Add your comment'
//                 : `Replying to @${parentComment?.user?.fullName}`
//             }
//             style={{
//               height: 48,
//               flex: 1,
//               marginRight: 12,
//             }}
//           />
//           <TouchableOpacity disabled={/^\s*$/.test(replyText)} onPress={onReply}>
//             <PerchIcon name="Send" color="#0074B7" size={28} />
//           </TouchableOpacity>
//         </View>
//       </KeyboardAwareScrollView>
//     </WrapperContainer>
//   );
// };

// export default FeedWithComment;
