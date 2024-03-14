import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../theme/color';

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
  responseContainer: {
    borderRadius: 12,
    backgroundColor: APP_COLOR.homebg,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  text: {
    fontSize: 10,
    fontWeight: '500',
  },
});

export default styles;
