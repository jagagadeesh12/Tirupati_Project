import {create} from 'zustand';

import {IUserBearStoreFeed} from '../../types';
import {FEED_DATA} from './initialState';
import {Alert} from 'react-native';

const useBearFeedData = create<IUserBearStoreFeed>((set, get) => ({
  feedData: [],
  myFeedData: [],
  mySavedFeedData: [],
  setFeedData: data => {
    set({feedData: data});
  },
  setMyFeedData: data => {
    set({myFeedData: data});
  },
  setMySavedFeedData: data => {
    let newData: any = data.map((item: any) => item.feed);
    set({mySavedFeedData: newData});
  },
  updateParticularFeed: (data: any, feedId) => {
    set(state => {
      let tempFeedData = [...state.feedData];
      let tempMyFeedData = [...state.myFeedData];
      let tempMySavedFeedData = [...state.mySavedFeedData];

      const modifiedData = tempFeedData.map((item: any) => {
        if (item.feedId == feedId) {
          const likes = data.likeOrUnlikeFeed?.likes;
          item = {...item, likes};
        }
        return item;
      });
      const modifiedMyFeedData = tempMyFeedData.map((item: any) => {
        if (item.feedId == feedId) {
          const likes = data.likeOrUnlikeFeed?.likes;
          item = {...item, likes};
        }
        return item;
      });
      const modifiedMySavedFeedData = tempMySavedFeedData.map((item: any) => {
        if (item.feedId == feedId) {
          const likes = data.likeOrUnlikeFeed?.likes;
          item = {...item, likes};
        }
        return item;
      });
      return {
        feedData: modifiedData,
        myFeedData: modifiedMyFeedData,
        mySavedFeedData: modifiedMySavedFeedData,
      };
    });
  },

  deleteParticularFeed: feedId => {
    set(state => {
      let tempFeedData = [...state.feedData];
      const modifiedData = tempFeedData.filter(
        (item: any) => item.feedId != feedId,
      );

      let tempMyFeedData = [...state.myFeedData];

      const modifiedMyFeedData = tempMyFeedData?.filter(
        (item: any) => item.feedId != feedId,
      );
      return {
        feedData: modifiedData,
        myFeedData: modifiedMyFeedData || [],
      };
    });
  },
  toggleSaveFeed: (feed, shouldSave) => {
    set(state => {
      let newSavedFeedData: any = [];
      let prevSavedFeedData: any = [...state.mySavedFeedData];
      if (shouldSave) {
        newSavedFeedData = [...feed, ...prevSavedFeedData];
      } else {
        newSavedFeedData = prevSavedFeedData.filter(
          (item: any) => item.feedId != feed.feedId,
        );
      }
      return {
        mySavedFeedData: newSavedFeedData,
      };
    });
  },
  addParticularFeed: (data: {}) => {
    set(state => {
      let newFeedData = [data, ...state.feedData];
      let newMyFeedData = [data, ...state.myFeedData];
      return {
        feedData: newFeedData,
        myFeedData: newMyFeedData,
      };
    });
  },
  saveParticularFeed: feedId => {
    console.log(feedId, 'Everything is saved######3', FEED_DATA.feedData);
    // set(state=>({}))
  },
}));
export default useBearFeedData;
