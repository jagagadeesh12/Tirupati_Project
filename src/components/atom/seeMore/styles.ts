import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('screen').width;
const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 16,
    // marginHorizontal:dimensions.width*(16/375),
    flex: 1,
    // marginBottom: 10,
    // marginBottom:dimensions.width*(10/375),
  },
  heading: {
    fontSize: 14,
    // fontSize:dimensions.width*0.042,
    fontWeight: '500',
    fontFamily: 'Rubik',
    color: 'black',
  },

  detail: {
    color: '#454C52',
    fontFamily: 'Rubik',
    // alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    top: 4,
    // marginHorizontal: 4,
    // fontSize:12,
    fontSize: dimensions.width * 0.031,
  },
  readMore: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    color: '#407BFF',
    // marginBottom: -4,
    // fontSize: 10,
    top: 4,
    fontSize: 12,
    borderBottomWidth: 0,
    width: '20%',
  },
});

export default styles;
