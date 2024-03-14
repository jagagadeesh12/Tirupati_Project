import {useEffect, useState} from 'react';
import {useBearLogin} from '../data/slices';
import {APP_CONSTANT} from '../utils/constant';

const useSignIn = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const {login, isEmailSent, error: err, isLoading, reset} = useBearLogin();
  const [activeButton] = useState('RightBtn');
  const [isDisableButton, setIsDisableButton] = useState(false);

  useEffect(() => {
    return () => reset();
  }, []);

  useEffect(() => {
    if (err) {
      setError(err);
    }
  }, [err]);

  useEffect(() => {
    if (email.length > 0) {
      setIsDisableButton(true);
    } else {
      setIsDisableButton(false);
    }
  }, [email]);

  const onSignIn = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailPattern.test(email);

    if (email.length === 0) {
      setError(APP_CONSTANT.EMPTY_EMAIL);
    } else if (isValidEmail) {
      setError('');
      login(email.toLowerCase());
    } else if (email !== isValidEmail) {
    } else {
      setError(APP_CONSTANT.EMPTY_EMAIL);
    }
  };

  const onChangeText = (text: string) => {
    if (error.length > 0) {
      setError('');
    }
    setEmail(text);
  };

  return {
    onSignIn,
    error,
    email,
    onChangeText,
    isEmailSent,
    activeButton,
    isDisableButton,
    isLoading,
    // isDisableButton,
  };
};

export default useSignIn;
