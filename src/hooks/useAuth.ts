import {useEffect} from 'react';

import {useBearAuth} from '../data/slices';

export const useAuth = () => {
  const {isSignIn, setConfig, isShowFlash, isCheckStateLogout} = useBearAuth();

  useEffect(() => {
    setConfig();
  }, [setConfig]);

  return {
    isSignIn,
    isShowFlash,
    isCheckStateLogout,
  };
};

export default useAuth;
