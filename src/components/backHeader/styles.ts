import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../theme/color';

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  backTitle: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: '400',
    color: APP_COLOR.black,
    fontFamily: 'Rubik',
  },
});

export default styles;
