import React from 'react';
import {Dimensions, TouchableOpacity,View} from 'react-native';
import styles from './style';

const dimensions = Dimensions.get('window');

const {width} = Dimensions.get('window');





const responsiveSize = width * 0.05;
interface CheckboxProps {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

const CustomCheckbox = ({isChecked, onChange}: CheckboxProps) => {
  const toggleCheckbox = () => {
    onChange(!isChecked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
       <View style={styles.checkboxContainer}>
                <View
                  style={[
                    styles.checkbox,
                    {
                      backgroundColor: isChecked ? '#0074B7' : 'lightgray',
                    },
                  ]}
                />
                
        </View>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
