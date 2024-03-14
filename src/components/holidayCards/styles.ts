import {Dimensions, StyleSheet} from 'react-native';
import color, {APP_COLOR} from '../../theme/color';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: APP_COLOR.cards,
    borderRadius: 8,
    // marginRight: 8,
    marginTop: 8,
  },
  primaryText: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: '500',
    color: color.LIGHT_MODE.holidayDateColor,
    fontFamily: 'Rubik',

  },
  secondaryText: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: '400',
    color: color.LIGHT_MODE.holidayDateColor,
    marginBottom: 12,
    fontFamily: 'Rubik',

  },
});

export default styles;
