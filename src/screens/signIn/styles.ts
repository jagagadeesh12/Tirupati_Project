import {Dimensions, StyleSheet, Platform} from 'react-native';
import color, {APP_COLOR} from '../../theme/color';
const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height: height - 40,
    padding: 20,
    paddingTop: 35,
    color: APP_COLOR.cards,
    paddingBottom: 40,

  },
  welcomeText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 36,
    fontWeight: '500',
    marginTop: 60,
    color: color.DARK_MODE.text,
    // textAlign: 'right',
  },
  subText: {
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 8,
    color: color.DARK_MODE.text,
  },
  inputContainer: {
    marginTop: 32,
  },
  errText: {
    // marginTop: 8,
    marginBottom: 140,
    fontSize: 10,
    marginLeft: 2,
    fontWeight: '400',
    marginTop: 150,
    color: color.LIGHT_MODE.error,
  },
  image: {
    marginHorizontal: 35,
    marginTop: 25,
  },

  // modal container
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.DARK_MODE.transparent,
  },
  alertBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    flex: 0,
    backgroundColor: 'white',
    maxWidth: '90%',
    paddingHorizontal: 16,
    paddingVertical: 40,
    borderRadius: 8,
  },
  imageBox: {
    padding: 10,
    backgroundColor: color.LIGHT_MODE.primary,
    borderRadius: 50,
    marginBottom: 12,
  },
  textHeader: {
    textAlign: 'center',
    color: 'black',
    lineHeight: 17,
    fontSize: 14,
  },
  bold: {fontWeight: 'bold'},
  footerText: {
    textAlign: 'center',
    lineHeight: 17,
    fontSize: 14,
    color: 'black',
  },
});

export default styles;
