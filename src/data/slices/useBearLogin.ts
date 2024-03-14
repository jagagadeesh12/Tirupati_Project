import {create} from 'zustand';
import {loginService} from '../service';
import {IUserBearLogin} from '../../types';
import {INITIAL_LOGIN_STATE} from './initialState';

const useBearLogin = create<IUserBearLogin>(set => ({
  ...INITIAL_LOGIN_STATE,
  login: async (req: string) => {
    set({isLoading: true, error: ''});
    const res = await loginService(req);
    if (res.success) {
      set({isEmailSent: true, error: '', isLoading: false});
    } else {
      set({error: res?.response?.data?.message, isLoading: false});
    }
  },
  reset: async () => set({...INITIAL_LOGIN_STATE}),
}));

export default useBearLogin;
