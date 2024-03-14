import {Platform, StyleSheet} from 'react-native';
import {APP_COLOR} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: APP_COLOR.cards,
    borderRadius: 8,
    padding: 16,
    flex: 1,
    // width: '49%',
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 8,
  },
  textContainer: {
    // width: '80%',
    flex:1,
    flexDirection: 'column',
    marginRight: 12,
  },
  primaryText: {
    fontSize: 16,
    fontWeight: '500',
    // fontFamily: 'Rubik',
    color: Platform.OS === 'android' ? APP_COLOR.black : '',
  },
  SecondaryText: {
    fontSize: 10,
    lineHeight: 15,
    color: Platform.OS === 'android' ? APP_COLOR.black : APP_COLOR.text,
  },
  viewStyle: {
    flexDirection: 'row',
  }
});

export default styles;
