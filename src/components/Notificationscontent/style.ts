import {Dimensions, StyleSheet} from 'react-native';
const dimensions = Dimensions.get('window');
const imageWidth = 230 * (dimensions.width / 375);
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#CED2D6',
    margin: 5,
    marginHorizontal: 20,
  },
  imageStyle: {
    marginTop: 10,
    width: 42,
    height: 42,
  },
  viewStyle: {
    marginLeft: 10,
  },
  notificationContent: {
    fontSize: 12,
    color: '#454C52',
    marginTop: 7,
    fontWeight: '400',
    width: imageWidth,
  },
  notificationButton: {
    borderWidth: 1,
    borderColor: '#0074B7',
    borderRadius: 12,
    width: 122,
    height: 24,
    marginVertical: 8,
  },
  dateTextStyle: {
    fontSize: 10,
    color: '#0074B7',
    fontWeight: '400',
    textAlign: 'center',
    alignItems: 'center',
    padding: 3,
  },
  notificationIconstyles: {
    fontSize: 8,
    color: '#FE6725',
    marginTop: 5,
    // marginHorizontal:10,
    alignItems: 'center',
  },
  timing: {},
  notifications: {
    flexDirection: 'row',
  },
  detailsNotification: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  notificationHeading: {
    color: 'black',
  },

  notificationPopup: {
    flexDirection: 'row',
    // marginVertical: 10,
    marginHorizontal: 30,
    marginVertical: 15,
  },
  icons: {
    marginVertical: 8,
  },
  contentButton: {
    fontSize: 16,
    fontWeight: '400',
    color: '#454C52',
  },
  buttonsFlex: {
    backgroundColor: '#FFFFFF',
    height: 195,
    width: 390,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // marginTop: 580,
    position: 'absolute',
    bottom: 0,
    paddingTop: 20,
  },
  buttonsContent: {
    marginHorizontal: 11,
  },
});

export default styles;
