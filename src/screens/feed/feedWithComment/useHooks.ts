import {useNavigation} from '@react-navigation/native';
import {Keyboard} from 'react-native';
import {CREATE_FEED, LIKE_FEED} from '../../../graphql/mutations/feed';
import {GET_ALL_COMMENTS} from '../../../graphql/queries/feeds';
import {useLazyQuery, useMutation} from '@apollo/client';
import {useEffect, useState} from 'react';
import useBearFeedData from '../../../data/slices/useBearFeedData';

export const useHooks = (feedId: string) => {
  const navigation = useNavigation();

  const [totalComment, setTotalComment] = useState(0);
  const [originalComment, setOriginalComment] = useState<any>([]);
  const [replyText, setReplyText] = useState('');
  const [currentFeedId, setCurrentFeedId] = useState(feedId);
  const [commentData, setCommentData] = useState<any>([]);
  const [parentComment, setParentComment] = useState({user: {fullName: ''}});
  const [shouldRefetchComment, setShouldRefetchComment] = useState(false);
  const [toggleLike, {data: feedLikeData, error: err}] = useMutation(LIKE_FEED);

  // Hooks call
  const item = useBearFeedData((state: any) => {
    let tempFeedData = state.feedData?.find(
      (item: any) => item.feedId === feedId,
    );
    if (!tempFeedData)
      tempFeedData = state.myFeedData?.find(
        (item: any) => item.feedId === feedId,
      );
    if (!tempFeedData)
      tempFeedData = state.mySavedFeedData?.find(
        (item: any) => item.feedId === feedId,
      );
    return tempFeedData;
  });

  const [
    getComment,
    {data: comments, loading: isCommentsLoading, error: commentsErr, refetch},
  ] = useLazyQuery(GET_ALL_COMMENTS);

  const onPressComment = (item: any, childComment: any) => {
    getComment({
      variables: {
        feedId: item.feedId,
      },
      onCompleted(data) {
        setParentComment(item);
        setCommentData(data.getAllFeeds);
        setCurrentFeedId(item?.feedId);
      },
      onError(error) {},
    });
  };
  useEffect(() => {
    getComment({
      fetchPolicy: 'no-cache',
      variables: {
        feedId: feedId,
      },
      onCompleted(data) {
        setOriginalComment(data?.getAllFeeds);
        setTotalComment(data?.getAllFeeds?.length);
      },
      onError(error) {},
    });
  }, [shouldRefetchComment]);

  const [postFeed, {data, loading: isSendCommentLoading, error}] = useMutation(
    CREATE_FEED,
    {
      refetchQueries: [GET_ALL_COMMENTS],
    },
  );
  const onReply = async () => {
    let inp: {feed?: string; parentId?: string} = {};
    if (replyText) {
      inp.feed = replyText.trim();
      inp.parentId = currentFeedId;
    }
    setReplyText('');
    Keyboard.dismiss();
    postFeed({
      variables: {inp: inp},
      onCompleted(data, clientOptions) {
        // setShouldRefetchComment(!shouldRefetchComment);
        if (data?.createFeed?.parentId === feedId) {
          setTotalComment(totalComment + 1);
          setOriginalComment((prev: any) => {
            let newComentData = [...prev, data.createFeed];
            return newComentData;
          });
        } else {
          setCommentData((prev: any) => {
            let newComentData = [...prev, data.createFeed];
            return newComentData;
          });
        }
      },
    });
  };

  const onPressLike = async (item: any, index: number) => {
    const {data, errors} = await toggleLike({
      variables: {
        feedId: item.feedId,
      },
      onCompleted(data, clientOptions) {
        let newItem = {...item};
        newItem.likes = data.likeOrUnlikeFeed.likes;
        if (item.parentId === feedId) {
          setOriginalComment((prev: any) => {
            let newComentData = [...prev];
            newComentData[index] = newItem;
            return newComentData;
          });
          if (currentFeedId != feedId && index == 0) {
            setParentComment(newItem);
          }
        } else {
          setCommentData((prev: any) => {
            let newComentData = [...prev];
            newComentData[index - 1] = newItem;
            return newComentData;
          });
        }
      },
    });
    // Alert.alert(paretnId + ' ' + feedId);
  };

  const onPressBack = () => {
    if (feedId == currentFeedId) navigation.goBack();
    else setCurrentFeedId(feedId);
  };

  return {
    navigation,
    onPressBack,
    onPressLike,
    onReply,
    onPressComment,
    item,
    replyText,
    setReplyText,
    currentFeedId,
    commentData,
    parentComment,
    totalComment,
    setCurrentFeedId,
    originalComment,
    shouldRefetchComment,
  };
};
