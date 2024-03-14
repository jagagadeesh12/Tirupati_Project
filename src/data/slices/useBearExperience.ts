import {create} from 'zustand';

import {IUserBearStoreExperience} from '../../types';

const useBearExperience = create<IUserBearStoreExperience>((set, get) => ({
  experienceData: [],
  setExperienceData: data => {
    set({experienceData: data});
  },
  updateParticularExperience: (data: any, experienceId) => {
    set(state => {
      let tempExperienceData = [...state.experienceData];

      const modifiedData = tempExperienceData.map(item => {
        if (item.experienceId == experienceId) {
          return data;
        }
        return item;
      });
      return {
        experienceData: modifiedData,
      };
    });
  },
  addExperience: (data: {}) => {
    set(state => {
      let newExperienceData = [data, ...state.experienceData];
      return {
        experienceData: newExperienceData,
      };
    });
  },
}));
export default useBearExperience;
