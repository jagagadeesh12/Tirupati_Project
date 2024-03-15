// import {View, Text, TouchableOpacity, Image} from 'react-native';
// import React from 'react';
// import {Avatar} from '../../../components';
// import {Like1, Message, More, Repeat, Send2} from 'iconsax-react-native';
// import styles from './styles';
// import imagepath from '../../../constant/imagepath';
// import BottomModal from '../../../components/BottomModal';
// import useHooks from './useHooks';
// import moment from 'moment-timezone';
// import {SCREEN_WIDTH} from '../../../utils';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// import CustomTextWithUrl from '../../../components/CustomTextWithUrl';
// import MyCarousel from '../../../components/MyCarousel';

// const RenderFeedItem = ({
//   item,
//   isPostFeed = false,
//   totalComment,
//   onPressComment = () => {},
//   isCreateFeed = false,
//   isSavedScreen = false,
//   imgContainerStyle = {},
// }: {
//   item: any;
//   index?: number;
//   isPostFeed?: boolean;
//   totalComment?: number;
//   onPressComment?: () => void;
//   isCreateFeed?: boolean;
//   isSavedScreen?: boolean;
//   imgContainerStyle?: {};
// }) => {
//   const {user, updatedAt, feed, feedImage, likes, feedId, createdAt, repost} =
//     item;

//   let repostFeed, repostUserName, repostTime, respostUserProfile, repostImage;

//   if (repost?.feeds) {
//     repostFeed = repost.feeds[0].feed;
//     repostUserName = repost.feeds[0]?.user?.fullName;
//     repostTime = moment(repost.feeds[0].createdAt).fromNow();
//     // respostUserProfile = repost.feeds[0]?.user?.profileImage;
//     repostImage = repost.feeds[0].feedImage;
//   }
//   const {
//     setShowModal,
//     showModal,
//     updatedUrl,
//     currentUser,
//     time,
//     isLiked,
//     repostUserProfile,
//     onPressDelete,
//     onShare,
//     closeModal,
//     onPressRePost,
//     onPressToggleSave,
//     onPressCommentInFeedPage,
//     onLike,
//     likeCount,
//     handleImageDoubleClick,
//   } = useHooks(item);

//   const renderFeedImage = ({
//     item: uri,
//     index,
//   }: {
//     item: string;
//     index: number;
//   }) => {
//     // console.log()
//     return (
//       <TouchableWithoutFeedback onPress={handleImageDoubleClick}>
//         <Image
//           source={{uri}}
//           style={{
//             ...styles.feedImage,
//             height: repost || isCreateFeed ? SCREEN_WIDTH - 50 : SCREEN_WIDTH,
//             borderRadius: repost || isCreateFeed ? 6 : 0,
//             width: repost || isCreateFeed ? SCREEN_WIDTH - 50 : SCREEN_WIDTH,
//             ...imgContainerStyle,
//           }}
//           blurRadius={1}
//         />
//       </TouchableWithoutFeedback>
//     );
//   };
//   return (
//     <View style={{marginTop: 12}}>
//       <View style={{paddingHorizontal: 16}}>
//         <View style={styles.rowCenter}>
//           <Avatar
//             width={42}
//             height={42}
//             borderRadius={60}
//             imageSource={updatedUrl}
//           />
//           <View style={styles.nameContainer}>
//             <Text style={styles.bold}>{user?.fullName}</Text>
//             <Text style={styles.fontSize10}>{time}</Text>
//           </View>
//           {!isCreateFeed && !isSavedScreen && !isPostFeed && (
//             <TouchableOpacity onPress={() => setShowModal(true)}>
//               <More
//                 style={{
//                   transform: [{rotate: '90deg'}],
//                 }}
//                 color="#454C52"
//                 size={20}
//               />
//             </TouchableOpacity>
//           )}
//           {isSavedScreen && (
//             <TouchableOpacity onPress={onPressToggleSave}>
//               <Image source={imagepath.savePostFilled} />
//             </TouchableOpacity>
//           )}
//         </View>
//         {
//           feed && (
//             // <ShowMoreText
//             //   styles={{marginTop: 8, color: '#454C52'}}
//             //   text={item.feed}
//             // />
//             <CustomTextWithUrl text={feed} />
//           )
//           // <Text style={{marginTop: 8, color: '#454C52'}}>{feed}</Text>
//         }
//       </View>
//       {repost && (
//         <View
//           style={{
//             marginHorizontal: 16,
//             marginTop: 8,
//             borderRadius: 6,
//             borderWidth: 1,
//             borderColor: 'whitesmoke',
//             padding: 8,
//           }}>
//           <View style={styles.rowCenter}>
//             <Avatar
//               width={42}
//               height={42}
//               borderRadius={60}
//               imageSource={repostUserProfile}
//             />
//             <View style={styles.nameContainer}>
//               <Text style={styles.bold}>{repostUserName}</Text>
//               <Text style={styles.fontSize10}>{repostTime}</Text>
//             </View>
//           </View>
//           {repostFeed && (
//             // <ShowMoreText
//             //   styles={{marginTop: 8, color: '#454C52'}}
//             //   text={item.feed}
//             // />
//             <CustomTextWithUrl text={repostFeed} />
//             // <Text style={{marginTop: 8, color: '#454C52'}}>{repostFeed}</Text>
//           )}
//           {repostImage && (
//             <MyCarousel renderItem={renderFeedImage} feedImage={repostImage} />
//           )}
//         </View>
//       )}
//       {feedImage && (
//         <MyCarousel renderItem={renderFeedImage} feedImage={feedImage} />
//       )}
//       {!isCreateFeed && (
//         <View style={styles.likeShareContainer}>
//           <TouchableOpacity
//             style={{
//               alignItems: 'center',
//               flexDirection: isPostFeed ? 'row' : 'column',
//             }}
//             onPress={() => onLike(feedId)}>
//             <Like1
//               color={isLiked ? '#0074B7' : 'black'}
//               size={20}
//               variant={isLiked ? 'Bold' : 'Outline'}
//               style={{marginRight: isPostFeed ? 8 : 0}}
//             />
//             <Text
//               style={[
//                 // styles.text,
//                 {
//                   color: isLiked ? '#0074B7' : '#454C52',
//                 },
//               ]}>
//               {isPostFeed ? likeCount || 0 : 'Like'}
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               alignItems: 'center',
//               flexDirection: isPostFeed ? 'row' : 'column',
//             }}
//             onPress={isPostFeed ? onPressComment : onPressCommentInFeedPage}>
//             <Message
//               color="#454C52"
//               size={20}
//               style={{marginRight: isPostFeed ? 8 : 0}}
//             />
//             <Text style={{}}>{isPostFeed ? totalComment || 0 : 'Comment'}</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={{
//               alignItems: 'center',
//               flexDirection: isPostFeed ? 'row' : 'column',
//             }}
//             onPress={() => onPressRePost(item)}>
//             <Repeat
//               color="#454C52"
//               size={20}
//               style={{marginRight: isPostFeed ? 8 : 0}}
//             />
//             <Text style={{}}>{isPostFeed ? 0 : 'Repost'}</Text>
//           </TouchableOpacity>
//           {!isPostFeed && (
//             <TouchableOpacity
//               style={{
//                 alignItems: 'center',
//                 flexDirection: isPostFeed ? 'row' : 'column',
//               }}
//               onPress={onShare}>
//               <Send2
//                 color="#454C52"
//                 size={20}
//                 style={{marginRight: isPostFeed ? 8 : 0}}
//               />
//               <Text style={{color: 'black'}}>{isPostFeed ? '' : 'Share'}</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       )}
//       {isPostFeed ? (
//         <View
//           style={{marginTop: 16, borderWidth: 0.5, borderColor: '#CED2D6'}}
//         />
//       ) : isCreateFeed ? null : (
//         <Text style={styles.likeText}>Liked by {likeCount || 0}</Text>
//       )}
//       <BottomModal
//         onDelete={onPressDelete}
//         onPressToggleSave={onPressToggleSave}
//         visible={showModal}
//         closeModal={closeModal}
//         feed={item}
//         user={item?.user}
//         currentUser={currentUser}
//       />
//     </View>
//   );
// };

// export default React.memo(RenderFeedItem);
