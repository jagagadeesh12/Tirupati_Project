// import {View, Text, Alert} from 'react-native';
// import React, {useEffect, useRef, useState} from 'react';
// import {useMutation, useQuery} from '@apollo/client';
// import {PAGINATED_FEED} from '../graphql/queries/feeds';
// import {LIKE_FEED} from '../graphql/mutations';
// import {
//   useBearFeed,
//   useBearFeedWithComment,
//   useBearUserDetails,
// } from '../data/slices';
// import {paginatedFeeds_paginatedFeeds} from '../graphql/queries/__generated__/paginatedFeeds';
// import {useNavigation} from '@react-navigation/native';
// import {SCREENS} from '../screens';
// import useBearFeedData from '../data/slices/useBearFeedData';

// const feedMethod = () => {
//   // const [refreshing, setRefreshing] = useState(false);
//   // const [pages, setPages] = useState(1);
//   // const [isLoading, setIsLoading] = useState(false);
//   // const [hasMore, setHasMore] = useState(false);
//   // const [isModalVisible, setIsModalVisible] = useState(false);
//   // const setFeedData = useBearFeedData(state => state.setFeedData);
//   // const {setRoot} = useBearFeedWithComment();
//   // const currentUser = useBearUserDetails(state => state.currentUser);
//   // const uploadStatus = useBearFeed(state => state.uploadStatus);
//   // const image = useBearFeed(state => state.image);
//   // const feedDataStore = useBearFeedData(state => state.feedData);
//   // const navigation = useNavigation();

//   const {
//     data: feedData,
//     loading,
//     error,
//     fetchMore,
//     refetch,
//   } = useQuery(PAGINATED_FEED, {
//     variables: {
//       startIndex: 0,
//       perPage: 20,
//     },
//     onCompleted: data => {
//       setFeedData(data?.paginatedFeeds);
//       if (data.paginatedFeeds.length == 20) setHasMore(true);
//     },
//   });

//   const fetchNext = async (prevData = []) => {
//     if (hasMore) {
//       setIsLoading(true);
//       try {
//         const {data, loading} = await fetchMore({
//           variables: {
//             startIndex: pages * 20,
//             perPage: 20,
//           },
//         });
//         setFeedData([...prevData, ...data?.paginatedFeeds]);
//         setPages(pages + 1);
//         if (data?.paginatedFeeds?.length < 20) setHasMore(false);
//       } catch {
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       setHasMore(false);
//       setPages(1);
//       setIsLoading(false);
//     }
//   };

//   const fetchLatest = async () => {
//     setRefreshing(true);
//     const {data, loading} = await fetchMore({
//       variables: {
//         startIndex: 0,
//         perPage: 20,
//       },
//     });
//     if (data?.paginatedFeeds?.length == 20) setHasMore(true);
//     setPages(1);
//     setFeedData(data?.paginatedFeeds);
//     setRefreshing(false);
//   };

//   const onComment = (feed: paginatedFeeds_paginatedFeeds) => {
//     setRoot(feed);
//     navigation.navigate(SCREENS.FEED_WITH_COMMENTS);
//   };

//   return {
//     feedDataStore,
//     image,
//     uploadStatus,
//     currentUser,
//     fetchNext,
//     fetchLatest,
//     onComment,
//     refreshing,
//     isLoading,
//     hasMore,
//     isModalVisible,
//     setIsModalVisible,
//   };
// };

// export default feedMethod;
