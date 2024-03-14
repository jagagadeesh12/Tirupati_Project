import {Dimensions} from 'react-native';
import color from '../../theme/color';

const width = Dimensions.get('window').width;

const usePageIndicator = ({idx, scrollX}: any) => {
  const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

  const dotWidth = scrollX.interpolate({
    inputRange,
    outputRange: [8, 14, 8],
    extrapolate: 'clamp',
  });

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.2, 1, 0.1],
    extrapolate: 'clamp',
  });

  const backgroundColor = scrollX.interpolate({
    inputRange,
    outputRange: ['#ccc', color.DARK_MODE.primary, '#ccc'],
    extrapolate: 'clamp',
  });
  return {
    backgroundColor,
    dotWidth,
  };
};

export default usePageIndicator;
