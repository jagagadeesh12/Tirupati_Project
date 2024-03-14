import {Dimensions, StyleSheet} from 'react-native';
import {APP_COLOR} from '../../../theme/color';

const dimensions = Dimensions.get('window');
const imageWidth = 310 * (dimensions.width / 375);
const imageHeight = 64 * (dimensions.height / 667);

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  inputContainer: {
    height: imageHeight,
    width: '100%',
    // width: imageWidth,
    borderWidth: 1,
    borderColor: APP_COLOR.litetext,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingTop: 8,
    position: 'absolute',
  },
  input: {
    color: APP_COLOR.black,
    // backgroundColor: 'red',
    width: imageWidth,
    height: imageHeight,
    paddingHorizontal: 10,

    // padding: 10,
    // marginVertical: 10,
    // height: 40,
    // width: '100%',
    // height: '100%',
    // paddingLeft: 20,
  },
});

export default styles;
