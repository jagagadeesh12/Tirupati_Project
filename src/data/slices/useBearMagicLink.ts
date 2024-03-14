import {create} from 'zustand';

import {magicLinkService} from '../service';
import {IUseBearMagicLink} from '../../types';

const useBearMagicLink = create<IUseBearMagicLink>(set => ({
  isVerified: false,
  error: '',
  verifyMagicLink: async (token: string) => {
    try {
      const res = await magicLinkService(token);
      if (res) {
        set({isVerified: true, error: ''});
      } else {
        //Alert.alert("something went wrong")
        set({error: 'something wrong'});
      }
    } catch (e) {
      console.log('eeeeeee', e);
    }
  },
}));

export default useBearMagicLink;
