import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../theme/color';

const styles = StyleSheet.create({
  ReferInputTextcontainer: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    height: 48,
    borderColor: APP_COLOR.litetext,
  },
  inputwidth: {
    borderWidth: 1,
    borderColor: APP_COLOR.litetext,
    borderRadius: 4,
  },
  txtContainer: {
    color: '#454C52',
    marginRight: 4,
    fontSize: 15,
    fontFamily: 'Rubik',
    fontWeight: '400',
  },
  input: {
    color: APP_COLOR.black,
    padding: 5,
    marginVertical: 5,
  },
  inputStyle: {
    color: 'red',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {},
});

export default styles;
