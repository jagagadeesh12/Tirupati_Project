import {StyleSheet} from 'react-native';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 10,
    fontWeight: '400',
    color: color.LIGHT_MODE.text,
    marginLeft: 4,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default styles;
