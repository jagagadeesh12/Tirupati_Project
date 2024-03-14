import {useEffect, useState} from 'react';
import { number } from 'yup';
interface type {
    onChangeText:(e: any)=> void;
}

const useContact = () => {
  const [mobileNumber, setmobileNumber] = useState('');
  const [error, setError] = useState('');


  

useEffect(() => {
    if (!mobileNumber.match(/^[0-9]{10}$/)) {
      setError('Enter valid number');
    } else {
      setError('');
    }
  }, [mobileNumber]);

  const onChangeText = (number: string) => {
    if (error.length > 0) {
      setError('');
    }
    setmobileNumber(number);
  };
};

return{
    useContact,
    onChangeText,

}
export default useContact;