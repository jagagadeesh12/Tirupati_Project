import {Dimensions, StyleSheet} from 'react-native';
const dimensions = Dimensions.get('window');
const imageWidth = 335 * (dimensions.width / 375);
const imageHeight = 64 * (dimensions.height / 667);
const styles = StyleSheet.create({
  inputwidth: {
    height: 38,
    marginHorizontal: 20,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 10,
  },
  input: {
    color: '#000000',
    padding: 10,
    // marginVertical: 10,
  },
});
export default styles;
