// import {View, Text, BackHandler, Keyboard} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {gql, useLazyQuery, useMutation} from '@apollo/client';
// import {useNavigation} from '@react-navigation/native';

// import {useBearFeedWithComment} from '../data/slices';
// import {GET_ALL_COMMENTS} from '../graphql/queries/feeds';
// import {CREATE_FEED, LIKE_FEED} from '../graphql/mutations';
// import {SCREENS} from '../screens';

// import {CreateFeedInput} from '../../__generated__/globalTypes';
// import {paginatedFeeds_paginatedFeeds} from '../graphql/queries/__generated__/paginatedFeeds';
// import useBearFeedData from '../data/slices/useBearFeedData';

// const useFeedWithComment = () => {
//   const {
//     commentFeedKVP,
//     currentFeedId,
//     popFromCommentStack,
//     commentStack,
//     setCommentStack,
//     rootFeed,
//   } = useBearFeedWithComment();
//   const updateFeedStore = useBearFeedData(state => state.updateParticularFeed);
//   const navigation = useNavigation();

//   const [toggleLike, {data: feedLikeData, error: err}] = useMutation(LIKE_FEED);

//   const [
//     getComment,
//     {data: comments, loading: isCommentsLoading, error: commentsErr, refetch},
//   ] = useLazyQuery(GET_ALL_COMMENTS);

//   const [postFeed, {data, loading: isSendCommentLoading, error}] = useMutation(
//     CREATE_FEED,
//     {
//       refetchQueries: [GET_ALL_COMMENTS],
//     },
//   );
//   // console.log('data, loading, error', comments, loading, error);
//   const [replyText, setReplyText] = useState('');

//   useEffect(() => {
//     console.log('useffect with comments');
//     getComment({
//       variables: {
//         feedId: currentFeedId ? currentFeedId : rootFeed?.feedId,
//       },
//     });
//   }, [currentFeedId, getComment, rootFeed?.feedId]);

//   useEffect(() => {
//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       onBackBtn,
//     );

//     return () => backHandler.remove();
//   }, []);

//   const onBackBtn = () => {
//     // popFromCommentStack();
//     console.log('onBackBtn', commentStack);
//     if (commentStack.length > 0) {
//       popFromCommentStack();
//     } else if (commentStack.length === 0) {
//       navigation.goBack();
//       // navigation.navigate(SCREENS.FEED);
//     } else {
//       navigation.navigate(SCREENS.FEED);
//     }
//     return true;
//   };

//   const onReply = () => {
//     let inp: CreateFeedInput = {};
//     if (replyText) {
//       inp.feed = replyText.trim();
//       inp.parentId = currentFeedId ? currentFeedId : rootFeed?.feedId;
//     }
//     setReplyText('');
//     Keyboard.dismiss();
//     postFeed({variables: {inp: inp}});
//     // .then(res => {
//     console.log('Sending Text', inp.feed);
//     //   setReplyText('');
//     //   refetch();
//     // });
//   };

//   const onLike = async (feedId: string) => {
//     const {data, errors} = await toggleLike({
//       variables: {
//         feedId,
//       },
//     });
//     updateFeedStore(data, feedId);
//   };
//   const onReplyComment = (feed: paginatedFeeds_paginatedFeeds) => {
//     setCommentStack(feed);
//     navigation.navigate(SCREENS.FEED_WITH_COMMENTS);
//   };

  
//   return {
//     parentFeed: commentStack.length > 0 ? commentFeedKVP[currentFeedId] : null,
//     comments,
//     isCommentsLoading,
//     onBackBtn,
//     setReplyText,
//     onReply,
//     onLike,
//     onReplyComment,
//     replyText,
//     rootFeed,
//     commentStack,
//     isSendCommentLoading,
//     replyTo:
//       commentStack.length > 0
//         ? commentFeedKVP[currentFeedId]?.user?.fullName
//         : rootFeed?.user?.fullName,
//   };
// };

// export default useFeedWithComment;
