import { TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';

import styles from './styles';
import color from '../../../theme/color';

interface Props {
  isSelected: boolean;
  onPress: () => void;
}

const TabIndicator = ({isSelected, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.bar,
          {
            backgroundColor: isSelected
              ? color.LIGHT_MODE.primary
              : color.LIGHT_MODE.strokes,
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default TabIndicator;
