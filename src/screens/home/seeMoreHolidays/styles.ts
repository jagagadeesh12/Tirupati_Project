import {Dimensions, StyleSheet} from 'react-native';
import {APP_COLOR} from '../../../theme/color';
const dimensions = Dimensions.get('window');
const imageWidth = 340 * (dimensions.width / 375);
const imageHeight = 140 * (dimensions.height / 667);
export const styles = StyleSheet.create({
  //   main:{
  // backgroundColor:'#FEFEFE',
  // paddingBottom:10
  //   },
  mainContainer: {
    marginTop: 16,
    padding: 8,
    minHeight: 170,
    // marginLeft: 20,
    borderWidth: 1,
    borderColor: APP_COLOR.holidaysBordercolor,
    borderRadius: 8,
    lineHeight: 14.22,
    position: 'relative',
    overflow: 'hidden',

    shadowOpacity: 0.5,
    shadowColor: 'black',
    elevation: 4,
    shadowOffset: {width: 0, height: 0},

    // shadowColor: "#000",
    // shadowOffset: {
    //     width: 0,
    //     height: 5,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 5,
    // elevation: 5,
  },

  imageStyle: {
    width: 150,
    height: 150,
    // borderRadius: 75,
    borderBlockColor: 'black',
    borderWidth: 2,
    marginTop: 16,
  },
  ImageContainer: {
    position: 'absolute',
    // left: 218,
    right: -18,
    top: -26,
    borderRadius: 300,
    height: 150,
    width: 150,
    borderColor: APP_COLOR.cards,
    borderWidth: 2,
    // paddingLeft: -40,
    overflow: 'hidden',
  },

  flex: {
    // flexDirection: 'row',
  },

  titleTournamentStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: APP_COLOR.boldtext,
    marginTop: 16,
    marginLeft: 8,
    fontFamily: 'Rubik',
    width: 201,
  },
  TitleContent: {
    marginLeft: 8,
    fontFamily: 'Rubik',
    fontWeight: '300',
    fontSize: 12,
    color: APP_COLOR.boldtext,
    marginTop: 20,
    // marginBottom:16
  },

  tournamentDateViewStyle: {
    flexDirection: 'row',
  },

  dateTextStyle: {
    fontSize: 12,
    color: APP_COLOR.boldtext,
    marginLeft: 8,
    marginTop: 4,
  },

  tournamentLocationStyle: {
    fontSize: 8,
    color: APP_COLOR.orange,
    marginTop: 5,
  },
});
export default styles;
