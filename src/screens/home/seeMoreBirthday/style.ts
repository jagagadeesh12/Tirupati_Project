import {Dimensions, StyleSheet} from 'react-native';
import {APP_COLOR} from '../../../theme/color';

const dimensions = Dimensions.get('window');
const imageWidth = 40 * (dimensions.width / 375);
const imageHeight = 40 * (dimensions.height / 667);
const ContainerWidth = 330 * (dimensions.width / 375);
const ContainerHeight = 60 * (dimensions.height / 667);
export const styles = StyleSheet.create({
  Label: {
    fontSize: 14,
    fontWeight: '400',
    color: APP_COLOR.text,
    marginHorizontal: 20,
    marginVertical: 16,
  },
  MainContainer: {
    // width: '90%',
    // height: 55,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
    // alignContent:'center',
    // marginVertical: 16,
    marginVertical: 20,
  },
  Container: {
    flex: 1,
    flexGrow: 1,
    alignSelf: 'center',
    // marginTop: 60,
    // width: '90%',
  },
  AddressLine1: {
    // marginTop: -60,
  },
  ContainerCard: {
    flexDirection: 'row',
    // width: '90%',
    // height: 70,
    // width: ContainerWidth,
    height: ContainerHeight,
    borderRadius: 4,
    alignItems: 'center',
    position: 'relative',
    // marginVertical: 2,
    marginTop: 7,
    overflow: 'hidden',
    // borderWidth:0.5,
    // borderColor:'lightgray',
  },
  BoxShadow: {
    elevation: 11,
    opacity: 0.9,
    borderRadius: 4,
    borderColor: 'whitesmoke',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  ImageStyles: {},
  title: {},
  date: {},
  IconsContent: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  Content: {
    fontSize: 16,
    fontWeight: '400',
  },
  ImagStyles: {
    marginHorizontal: 10,
    // height:40,
    // width:40,
    height: imageHeight,
    width: imageWidth,
    borderRadius: 100,
  },
  Titles: {
    fontSize: 16,
    fontWeight: '400',
    color: APP_COLOR.black,
    width: 220,
  },
  Dates: {
    fontSize: 10,
    fontWeight: '400',
    color: APP_COLOR.black,
  },
  HorizontalLine: {
    height: 110,
    width: 4,
    marginRight: 3,
    backgroundColor: APP_COLOR.PrimaryColor,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    // marginHorizontal:10
  },
  ImagesFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal:10
  },
  Image: {},
  AnniversaryNumber: {
    position: 'absolute',
    color: 'white',
    marginHorizontal: 15,
    marginVertical: 1,
    alignContent: 'center',
    marginRight: 10,
  },
  ImagesStyles: {
    position: 'absolute',
    // left: 240,
    right: 0,
    top: 0,
    marginTop: 15,
  },
  Experience: {
    marginTop: -36,
    marginHorizontal: 21,
    color: 'white',
  },
  MonthText: {
    fontSize: 16,
    fontWeight: '400',
    color: APP_COLOR.black,
    marginLeft: 8,
  },
  MonthContainer: {
    height: 8,
    width: 8,
    borderRadius: 40,
    backgroundColor: APP_COLOR.PrimaryColor,
  },
});

export default styles;
