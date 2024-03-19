import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../types/Colors';

export const styles = StyleSheet.create({
  AppHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
  },
  AppHeaderStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerStyles: {
    // flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    // marginLeft: 10,
    // alignItems:'center',
    // justifyContent: 'center',
    // flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    // verticalAlign:'middle',
    // marginVertical:10
  },
  primaryText: {
    fontSize: 14,
    fontWeight: '500',
    color: APP_COLOR.text,
    // verticalAlign:'middle',
    // marginVertical:10
  },
  // primaryText: {
  //   fontSize: 14,
  //   fontWeight: '500',
  //   color: 'black',
  // },
  content: {
    fontSize: 10,
    color: APP_COLOR.text,
    marginTop: 2,
  },
  perchTextLogo: {
    // fontFamily: 'Pacifico-Regular',
    fontWeight: '400',
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    // marginHorizontal: 30,
    marginRight: 40,
  },
});

export default styles;
