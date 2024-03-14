import {StyleSheet} from 'react-native';
import {APP_COLOR, DARK_MODE} from '../../../theme/color';

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Rubik',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.5,
    color: DARK_MODE.text,
    zIndex: 1,
  },
});

export default styles;
