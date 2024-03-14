import {StyleSheet} from 'react-native';
import color from '../../theme/color';

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: 'Rubik',
    fontWeight: '500',
    fontSize: 16,
    color: color.LIGHT_MODE.primary,
    marginBottom: 8,
  },
  inputText: {
    borderWidth: 1,
    borderColor: color.LIGHT_MODE.strokes,
    borderRadius: 8,
    height: 46,
    paddingHorizontal: 12,
    // paddingVertical: 8,
    color: color.LIGHT_MODE.text,
    fontSize: 14,
    fontFamily: 'Rubik',
    fontWeight: '400',
  },
  errText: {
    // imarginTop: 8,

    //  marginBottom: 120,
    // marginTop: 150,
    fontSize: 10,
    marginLeft: 2,
    fontWeight: '400',
    color: color.LIGHT_MODE.error,
  },
});

export default styles;
