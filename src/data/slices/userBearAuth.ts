// import {create} from 'zustand';
// import {APP_CONSTANT, clearAsyncStorage, getToken} from '../../utils';
// import {IUseBearAuth} from '../../types';
// import {INITIAL_AUTH_STATE} from './initialState';
// import SplashScreen from 'react-native-splash-screen';
// import {magicLinkService} from '../service';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const useBearAuth = create<IUseBearAuth>((set, get) => ({
//   ...INITIAL_AUTH_STATE,
//   setSignIn: async (token: string) => {
//     let newSignin = false;
//     try {
//       const res = await magicLinkService(token);
//       if (res) {
//         newSignin = true;
//       }
//     } catch (e) {
//       console.log('eeeeeee', e);
//     }
//     set(state => {
//       return {isSignIn: newSignin};
//     });
//   },
//   setConfig: async () => {
//     const token = await getToken();
//     let isCheckStateLogout = false;
//     const result = await AsyncStorage.getItem(APP_CONSTANT.VISITED_ONCE);
//     if (result == 'true') isCheckStateLogout = true;
//     if (token != null) {
//       set({isSignIn: true, isCheckStateLogout});
//     } else {
//       SplashScreen.hide();
//       set({isSignIn: false, isCheckStateLogout});
//     }
//     SplashScreen.hide();
//   },
//   logout: async () => {
//     clearAsyncStorage();
//     await AsyncStorage.setItem(APP_CONSTANT.VISITED_ONCE, JSON.stringify(true));
//     set({isSignIn: false, isCheckStateLogout: true});
//   },
//   rest: async () => set({...INITIAL_AUTH_STATE}),
// }));

// export default useBearAuth;
