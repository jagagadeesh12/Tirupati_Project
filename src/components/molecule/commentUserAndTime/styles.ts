import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../../theme/color';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
    marginHorizontal: 0,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    // marginLeft: 8,
    alignItems: 'center',
  },
  primaryText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Rubik',
    color: APP_COLOR.text,
    letterSpacing: 0.1,
  },
  time: {
    fontSize: 10,
    fontWeight: '300',
    marginLeft: 4,
    letterSpacing: 0.1,
    color: APP_COLOR.text,
  },
});

export default styles;
