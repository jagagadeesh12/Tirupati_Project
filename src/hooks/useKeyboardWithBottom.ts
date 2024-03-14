import {Keyboard} from 'react-native';
import {useEffect, useState} from 'react';

const useKeyboardWithBottom = () => {
  const [containerPosition, setContainerPosition] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event: any) => {
        // Adjust the position of your absolute container
        setContainerPosition(event.endCoordinates.height);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        // Reset the position of your absolute container
        setContainerPosition(0);
      },
    );

    // Clean up listeners when the component unmounts
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return {
    containerPosition,
  };
};

export default useKeyboardWithBottom;
