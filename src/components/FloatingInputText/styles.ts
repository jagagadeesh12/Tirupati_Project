import {Dimensions, StyleSheet} from 'react-native';
import {APP_COLOR} from '../../theme/color';
const dimensions = Dimensions.get('window');
const imageWidth = 335 * (dimensions.width / 375);
const imageHeight = 64 * (dimensions.height / 667);
const styles = StyleSheet.create({
  inputwidth: {
    // height: 64,
    // width: 350,
    height: imageHeight,
    width: imageWidth,
    borderWidth: 1,
    borderColor: APP_COLOR.litetext,
    // backgroundColor:'red',
    borderRadius: 4,
    marginHorizontal: 20,
    marginVertical: 8,
    paddingHorizontal:10,
    paddingTop:8
  },
  input: {
    color: APP_COLOR.black,
    // backgroundColor:'red',
    padding: 10,
    marginVertical: 10,
  },
//   placeholder:{
//     color: APP_COLOR.black,
//     padding: 10,
//     marginVertical: 10,
//   }
});
export default styles;
