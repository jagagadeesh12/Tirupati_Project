import {StyleSheet} from 'react-native';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  checkBox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMark: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: color.LIGHT_MODE.primary,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default styles;
