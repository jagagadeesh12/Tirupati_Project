import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../utils';
import color from '../../../theme/color';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 32,
    width: SCREEN_WIDTH - 40,
    margin: 20,
    marginTop: -10,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: color.LIGHT_MODE.cardsBG,
  },
});

export default styles;
