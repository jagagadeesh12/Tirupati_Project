import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../../theme/color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: APP_COLOR.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: 8,
    paddingHorizontal: 14,
    width: 56,
    borderRadius: 6,
    // opacity: 0.3,
  },
  label: {
    // font-family: Rubik;
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 14,
    color: '#fff',
    zIndex: 1,
  },
});

export default styles;
