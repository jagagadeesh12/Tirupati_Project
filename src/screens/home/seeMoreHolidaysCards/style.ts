import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../../theme/color';

const styles = StyleSheet.create({
  //   main:{
  // backgroundColor:'#FEFEFE',
  // paddingBottom:10
  //   },
  mainContainer: {
    marginTop: 16,
    width: 350,
    height: 150,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: APP_COLOR.holidaysBordercolor,
    borderRadius: 8,
    lineHeight: 14.22,
    position: 'relative',
    overflow: 'hidden',

    shadowOpacity: 0.5,
    shadowColor: APP_COLOR.black,
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
    borderRadius: 75,
    borderBlockColor:APP_COLOR.black,
    borderWidth: 2,
  },
  imagecontainer: {
    position: 'absolute',
    left: 218,
    top: -24,
    borderRadius: 300,
    borderColor: APP_COLOR.cards,
    borderWidth: 2,
    paddingLeft: -40,
  },

  flex: {
    // flexDirection: 'row',
  },

  titleTournamentStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: APP_COLOR.text,
    marginTop: 16,
    marginLeft: 8,
    fontFamily: 'Rubik',
    width: 201,
  },
  titlecontent: {
    width: 225,
    marginLeft: 8,
    fontFamily: 'Rubik',
    fontWeight: '300',
    fontSize: 12,
    color: APP_COLOR.text,
    marginTop: 20,
    // marginBottom:16
  },

  tournamentDateViewStyle: {
    flexDirection: 'row',
  },

  dateTextStyle: {
    fontSize: 12,
    color: APP_COLOR.text,
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
