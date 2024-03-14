import {Dimensions, StyleSheet} from 'react-native';
const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
  viewContainer: {
    // left: 20,
  },
  ApplyingContainer: {
    color: '#454C52',
    fontFamily: 'Rubik',
    fontSize: 14,
    // top: 15,
  },
  UIandUXContainer: {
    color: '#0074B7',
    // top: 15,
    // marginVertical: 12,
    fontFamily: 'Rubik',
    fontWeight: '700',
    fontSize: 25,
  },
  DataProfileContainer: {
    // left: -6,
    color: '#6D6D6D',
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '300',
    // top: 25,
    // marginHorizontal: 10,
  },
  nameContainer: {
    color: '#454C52',
    fontfamily: 'Rubik',
    fontsize: '14px',
    fontweight: '400',
    top: 50,
  },
  NameContainer: {
    fontfamily: 'Rubik',
    fontsize: '14px',
    fontweight: '400',
    marginRight: 10,
  },
  textContainer: {
    color: '#454C52',
    // marginVertical: 12,
    marginRight: 4,
    fontSize: 15,
    fontFamily: 'Rubik',
    fontWeight: '400',
    marginVertical:8,
  },
  viewdatContainer: {
    // left: 20,
  },
  row: {
    borderStyle: 'dashed',
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 80,
    marginBottom: 20,
    borderColor: '#D5D8E2',
    height: 150,

    // flex: 1,
  },
  imageContainer: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignContent: 'center',
  },
  chooseContainer: {
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '500',
    color: '#454C52',
  },
  pngContainer: {
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '400',
    color: '#6D6D6D',
  },
  line: {
    width: '20%',
    height: 3,
    backgroundColor: '#454C52',
    alignSelf: 'center',
    marginVertical: 20,
    // marginTop: 5,
    // marginVertical: dimensions.height * (15 / 667),
    borderRadius: 4,
  },
});

export default styles;
