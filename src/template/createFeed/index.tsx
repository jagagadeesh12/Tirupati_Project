// import {View, TextInput} from 'react-native';
// import React, {useCallback, useRef} from 'react';

// import Header from './header';
// import PostType from './postType';
// import styles from './styles';
// import ImageAndGallery from './imageAndGallery';
// import {useCreateFeed} from '../../hooks';
// import {BottomSheetRefProps} from './bottomsheet';
// import ImageViewer from './imageViewer';
// import RenderFeedItem from '../feedListView/renderFeedItem';
// // import WrapperContainer from '../../components/WrapperContainer/WrapperContainer';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// const CreateFeed = ({feed}: {feed: any}) => {
//   const {
//     onGroupPicker,
//     selectedGroupType,
//     onCancelPost,
//     onPost,
//     toggleGroupModal,
//     textPost,
//     setTextPost,
//     isDropdownVisible,
//     onImagePicker,
//     onLaunchCamera,
//     localAssets,
//     onResetImage,
//     uri,
//     updatedUrl,
//   } = useCreateFeed();

//   // console.log(feed, 'this is params')
//   const ref = useRef<BottomSheetRefProps>(null);

//   const onPress = useCallback(() => {
//     const isActive = ref?.current?.isActive();
//     // console.log('isActive', isActive);
//     if (isActive) {
//       ref?.current?.scrollTo(0);
//     } else {
//       ref?.current?.scrollTo(-200);
//     }
//   }, []);

//   const onPressPost = () => {
//     onPost(feed?.feedId);
//   };

//   return (
//     <WrapperContainer>
//       <Header
//         shouldButtonDisable={!!textPost || localAssets.length>0}
//         onCancelPost={onCancelPost}
//         onPost={onPressPost}
//       />
//       <PostType
//         selectedType={selectedGroupType}
//         onToggle={onPress}
//         url={updatedUrl}
//       />
//       <KeyboardAwareScrollView style={{flex: 1, flexGrow: 1}}>
//         <TextInput
//           placeholder={"What's on your mind?"}
//           style={styles.inputText}
//           onChangeText={setTextPost}
//           value={textPost}
//           multiline={true}
//           textAlignVertical="top"
//         />
//         {feed && (
//           <View
//             style={{
//               borderRadius: 6,
//               borderWidth: 1,
//               borderColor: 'whitesmoke',
//               padding: 8,
//               // marginTop: 16,
//             }}>
//             <RenderFeedItem
//               imgContainerStyle={{borderRadius: 8}}
//               isCreateFeed={true}
//               item={feed}
//             />
//           </View>
//         )}
//         {localAssets.length>0 &&<ImageViewer onResetImage={onResetImage} localAssets={localAssets} />}
//       </KeyboardAwareScrollView>
//       <View style={{padding: 16}}>
//         {!feed && (
//           // <KeyboardAvoidingView
//           //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//           <ImageAndGallery
//             onImagePicker={()=>onImagePicker({multiple: true})}
//             onLaunchCamera={onLaunchCamera}
//             containerPosition={0}
//           />
//           // </KeyboardAvoidingView>
//         )}
//       </View>
//     </WrapperContainer>
//   );
// };

// export default CreateFeed;
