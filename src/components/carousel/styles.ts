import {Dimensions, Platform, StyleSheet} from 'react-native';
import {APP_COLOR} from '../../theme/color';
const {width, height} = Dimensions.get('screen');
const dimensions = Dimensions.get('window');
const styles = StyleSheet.create({
  carouselContainer: {
    // padding: 18,
    padding: width * 0.05,
    flexDirection: 'column',
    height: height - 20,
  },
  container: {
    // width: width - 18,
    width: width - width * 0.045,
    // height,
    // paddingTop: 90,
    // paddingTop: 80,
    paddingTop: width * 0.205,
    alignItems: 'center',
    // marginBottom: 24,
    marginBottom: width * 0.062,
  },
  image: {
    // width: width - 20,
    width: width - width * 0.051,
    marginRight: Platform.OS === 'ios' ? 40 : 0,
  },
  content: {
    // marginTop: 50,
    marginTop: width * 0.128,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    color: APP_COLOR.cursoal,
    textAlign: 'center',
  },
  description: {
    // fontSize: 14,
    fontSize: dimensions.width * 0.036,
    fontFamily: 'Rubik',
    margin: 10,
    marginRight: Platform.OS === 'ios' ? 40 : 0,
    fontWeight: '400',
    color: APP_COLOR.cursoal,
    textAlign: 'center',
  },
  buttonContainer: {
    // flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 60,
  },
  textBtn: {
    fontFamily: 'Rubik',
    fontSize: 16,
    textAlign: 'right',
    paddingBottom: 2,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    // backgroundColor:'red'
    // marginTop: -25,
  },
});

export default styles;
