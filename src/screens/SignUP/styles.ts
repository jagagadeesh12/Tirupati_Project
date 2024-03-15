import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  logoStyle: {
    alignSelf: 'center',
  },
  loginText: {
    fontFamily: 'Rubik',
    fontSize: 32,
    fontWeight: '700',
    paddingTop: 20,
    color: '#151615',
  },
  emailText: {
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 20,
    paddingTop: 2,
    color: '#000000',
  },
  remeberText: {
    paddingLeft: 8,
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '400',
  },
  forgetPassword: {
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '400',
    color: '#0074B7',
    paddingTop: 8
  },
  viewLine: {
    height: 2,
    backgroundColor: '#E1E1E1',
    marginTop: 20,
    width: '45%',
  },
  viewStyle: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Or: {
    paddingTop: 10,
    color: '#E1E1E1',
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '600',
  },
  signUpView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  accountText: {
    fontFamily: 'Rubik',
    fontSize: 16,
    marginRight: 10,
  },
  signUpText: {
    fontFamily: 'Rubik',
    fontSize: 16,
    color: '#0074B7',
  },
});

export default styles;