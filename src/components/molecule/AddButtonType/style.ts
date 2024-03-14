import {Dimensions, StyleSheet} from 'react-native';
const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
  TitleContent: {
    color: '#454C52',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    // marginHorizontal: 50,
    marginHorizontal: dimensions.width * 0.13,
    // marginVertical: 40,
    marginVertical: dimensions.height * 0.059,
  },
  MainContainer: {
    // marginTop: 160,
    marginTop: dimensions.height * 0.23,
  },
  ImageStyles: {
    // marginHorizontal: 115,
    marginHorizontal: dimensions.width * 0.30,
  },
});
export default styles;
