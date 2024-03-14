import {StyleSheet} from 'react-native';
import color, {APP_COLOR} from '../../theme/color';

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: color.DARK_MODE.primary,
    padding: 12,
    borderRadius: 8,
    //  bottom:-10,
  },
  text: {
    fontWeight: '500',
    color: APP_COLOR.cards,
    textAlign: 'center',
  },
});

export default styles;
