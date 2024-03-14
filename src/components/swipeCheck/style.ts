import {Dimensions, StyleSheet} from 'react-native';
const dimensions = Dimensions.get('window');
import {APP_COLOR} from '../../theme/color';
const styles = StyleSheet.create({
  swipeContainer: {
    backgroundColor: APP_COLOR.swipecon,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    marginTop: 10,
    marginBottom: 20,
  },
  swiper: {
    backgroundColor: APP_COLOR.dotactive,
    borderRadius: 100,
    position: 'absolute',
    zIndex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SwipeText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: dimensions.width * 0.038,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  SwipeTextCheckOut: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    // color: APP_COLOR.text,
    fontSize: dimensions.width * 0.038,
    alignItems: 'center',
    verticalAlign: 'middle',
    // paddingRight:150,
    textAlign: 'center',
    // marginRight: 10,
    zIndex: 2,
  },

  swipeColor: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'rgba(243, 65, 65, 0.15)',
  },
});
export default styles;
