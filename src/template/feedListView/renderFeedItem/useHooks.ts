import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, Platform, Share} from 'react-native';
import {useImage} from '../../../hooks';
import useBearFeedData from '../../../data/slices/useBearFeedData';
import {useBearUserDetails} from '../../../data/slices';
import {useMutation} from '@apollo/client';
import moment from 'moment-timezone';
import imagepath from '../../../constant/imagepath';
import {DELETE_FEED, TOGGLE_SAVE_FEED} from '../../../graphql/mutations/feed';
import {LIKE_FEED} from '../../../graphql/mutations';
import {SCREENS} from '../../../screens';
import Toast from 'react-native-toast-message';

const useHooks = (item: any) => {
  const {user, updatedAt, feed, feedImage, likes, feedId, createdAt, repost} =
    item;

  const fallbackImage = imagepath.defaultImage;

  // Hooks call
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [lastPress, setLastPress] = useState(0);

  const {updatedUrl} = useImage(user?.profileImage, fallbackImage);
  const {updatedUrl: repostUserProfile} = useImage(
    repost?.feeds[0]?.user?.profileImage,
    fallbackImage,
  );
  const updateFeedStore = useBearFeedData(state => state.updateParticularFeed);
  const deleteParticularFeed = useBearFeedData(
    state => state.deleteParticularFeed,
  );
  const currentUser = useBearUserDetails(state => state.currentUser);
  const toggleSaveFeed = useBearFeedData(state => state.toggleSaveFeed);
  // Graph Ql Query
  const [toggleLike, {data: feedLikeData, error: err}] = useMutation(LIKE_FEED);
  const [toggleSaveFeedApi] = useMutation(TOGGLE_SAVE_FEED);

  const [deleteFeed] = useMutation(DELETE_FEED);

  const time = moment(createdAt).fromNow();
  const isLiked = likes?.includes(currentUser?.userId);
  const likeCount = likes?.length;
  const onLike = async (feedId: string) => {
    const {data, errors} = await toggleLike({
      variables: {
        feedId,
      },
    });
    updateFeedStore(data, feedId);
  };

  const onPressCommentInFeedPage = () =>
    navigation.navigate(SCREENS.FEED_WITH_COMMENTS, {feedId});

  const onPressToggleSave = () => {
    setShowModal(false);
    toggleSaveFeedApi({
      variables: {
        feedId,
      },
      onCompleted(data, clientOptions) {
        Toast.show({
          type: 'success',
          text1: `You ${data.saveUnSaveFeed ? 'saved' : 'unsaved'} the feed`,
        });
        toggleSaveFeed(item, data.saveUnSaveFeed);
      },
      onError(error, clientOptions) {},
    });
  };

  const onPressDelete = () => {
    Alert.alert(
      'Delete Post',
      'Are you sure you want to permanently remove this post ?',
      [
        {
          text: 'Cancel',
          onPress: () => setShowModal(false),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () =>
            deleteFeed({
              variables: {
                feedId,
              },
              onCompleted(data, clientOptions) {
                setShowModal(false);
                deleteParticularFeed(feedId);
              },
              onError(error, clientOptions) {},
            }),
        },
      ],
    );
  };

  const onShare = () => {
    let toShareFeed = feed;
    let toShareFeedImage = feedImage;
    if (repost?.feeds) {
      toShareFeed = repost.feeds[0].feed;
      toShareFeedImage = repost.feeds[0].feedImage;
    }
    Share.share({
      message: `${toShareFeed ? toShareFeed + ' ' : ''}${
        toShareFeedImage && Platform.OS == 'android'
          ? `url ${toShareFeedImage}`
          : ''
      }`,
      // title:`${feed} : img: ${toShareFeedImage}`,
      url: toShareFeedImage,
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const onPressRePost = (feed: {}) => {
    console.log(JSON.stringify(feed), '--------------------');
    navigation.navigate(SCREENS.CREATE_FEED, {
      feed: feed.repost ? feed.repost.feeds[0] : feed,
    });
  };

  const handleImageDoubleClick = () => {
    const now = new Date().getTime();
    const DOUBLE_PRESS_DELAY = 300;

    if (now - lastPress < DOUBLE_PRESS_DELAY) {
      onLike(feedId);
    }

    setLastPress(now);
  };

  return {
    setShowModal,
    showModal,
    updatedUrl,
    currentUser,
    time,
    onPressToggleSave,
    isLiked,
    onPressDelete,
    onShare,
    closeModal,
    onPressRePost,
    toggleSaveFeed,
    onPressCommentInFeedPage,
    onLike,
    likeCount,
    lastPress,
    repostUserProfile,
    handleImageDoubleClick,
  };
};

export default useHooks;
