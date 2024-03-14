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
    flexDirection: 'column',
    marginLeft: 8,
  },
  primaryText: {
    fontSize: 16,
    fontWeight: '800',
    fontFamily: 'Rubik',
    color: APP_COLOR.text,
  },
  time: {
    letterSpacing: 0.4,
    fontSize: 10,
    fontWeight: '400',
  },
  moreIcon: {
    opacity: 0.5,
    transform: [{rotate: '90deg'}],
  },
});

export default styles;
