import {StyleSheet} from 'react-native';
import color, {APP_COLOR, DARK_MODE} from '../../../theme/color';

const styles = StyleSheet.create({
  bar: {
    width: 48,
    backgroundColor: color.LIGHT_MODE.strokes,
    marginVertical: 12,
    borderRadius: 4,
    height: 4,
  },
});

export default styles;
