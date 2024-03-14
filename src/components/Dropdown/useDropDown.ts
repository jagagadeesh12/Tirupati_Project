import {useEffect, useState} from 'react';
import {IDropdown} from '../../types';

const useDropdown = ({onSelect, selectedItem, isDisable}: IDropdown) => {
  const [isOpen, setOpen] = useState(false);
  const [selectOption, setOption] = useState('');
  useEffect(() => {
    setOption(selectedItem ? selectedItem : '');
  }, [selectedItem]);
  const toggle = () => {
    if (!isDisable) {
      setOpen(open => !open);
    }
  };

  const onOptionPress = (e: string) => {
    onSelect(e);
    setOption(e);
    toggle();
  };
  return {toggle, isOpen, onOptionPress, selectOption};
};

export default useDropdown;
