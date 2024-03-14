import {create} from 'zustand';

import {INITIAL_FEED_WITH_COMMENT_STATE} from './initialState';
import {IUserBearFeedWithComment} from '../../types';

const useBearFeedWithComment = create<IUserBearFeedWithComment>((set, get) => ({
  ...INITIAL_FEED_WITH_COMMENT_STATE,
  setRoot(rootFeed) {
    set({commentStack: [], commentFeedKVP: {}, rootFeed: rootFeed});
  },
  setCommentStack(currentFeed) {
    let newCommentStack = get().commentStack;
    newCommentStack.push(currentFeed.feedId);
    let newKVP = get().commentFeedKVP;
    newKVP[currentFeed.feedId] = currentFeed;
    set({
      currentFeedId: currentFeed.feedId,
      commentStack: newCommentStack,
      commentFeedKVP: newKVP,
    });
  },
  popFromCommentStack() {
    let newCommentStack = get().commentStack;
    if (newCommentStack.length >= 0) {
      const removedFeed = newCommentStack[newCommentStack.length - 1];
      newCommentStack.pop();
      const newCurrentFeedID = newCommentStack[newCommentStack.length - 1];
      let newKVP = get().commentFeedKVP;
      delete newKVP[removedFeed];
      set({
        currentFeedId: newCurrentFeedID,
        commentStack: newCommentStack,
        commentFeedKVP: newKVP,
      });
    } else {
      set({...INITIAL_FEED_WITH_COMMENT_STATE});
    }
  },
}));

export default useBearFeedWithComment;
