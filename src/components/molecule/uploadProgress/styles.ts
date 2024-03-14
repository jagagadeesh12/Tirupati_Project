import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../../theme/color';
import {SCREEN_WIDTH} from '../../../utils';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
    // position: 'relative',
    // backgroundColor:'red'
  },
  loadContainer: {
    height: 2,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'black',
    // flex: 1,
    width: SCREEN_WIDTH - 100,
    // marginRight: 30,
    justifyContent: 'center',
    maxHeight: 2,
    // overflow: 'hidden',
    // justifyContent: 'center',
  },
  gradient: {
    // height: 4,
    // blendMode: 'overlay',
    ...StyleSheet.absoluteFillObject,
    // width:9

    // maxWidth: '50%',
    // width: '50%',
  },
  // progressHead: {
  //   height: 4,
  //   zIndex: 10,
  //   width: 4,
  //   backgroundColor: 'red',
  //   position: 'absolute',
  // },
  progress: {
    height: 2,
    overflow: 'visible',
    // zIndex: 10,
    // width: SCREEN_WIDTH - 260,
    justifyContent: 'center',
    // position: 'absolute',

    // width:10
  },
  loadImage: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  percentageText: {
    color: 'red',
    fontWeight: 'bold',
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
  },
  animatedContainer: {
    height: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
});
export default styles;
