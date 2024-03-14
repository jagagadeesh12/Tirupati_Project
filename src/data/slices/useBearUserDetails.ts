import {create} from 'zustand';
import {IUserBearUser} from '../../types';
import {INITIAL_STATE_USER} from '../initialState';

const useBearUserDetails = create<IUserBearUser>((set, get) => ({
  ...INITIAL_STATE_USER,
  setCurrentUser(user) {
    set({currentUser: user});
  },
  setProfileImage(img) {
    let user = get().currentUser;
    // newProfile?.profileImage
    set({currentUser: {...user, profileImage: img}});
  },
  setSkills(data) {
    set({skills: data});
  },
}));

export default useBearUserDetails;
