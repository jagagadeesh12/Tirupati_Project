import {Dimensions, Platform, StyleSheet} from 'react-native';
import {APP_COLOR} from '../../theme/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH, WINDOW_HEIGHT} from '../../utils';


const styles = StyleSheet.create({
  container: {
    
    // font-family: Rubik;
    // position: 'relative',
    backgroundColor:'white',
    padding: 16,
    // margin: 16,
    // paddingVertical: 16,
    // paddingHorizontal: 20,
    // paddingBottom:40,
    flex: 1,
    // height: WINDOW_HEIGHT,
    // flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: Platform.OS === 'ios' ? 30 : 5,
  },
  postTypeContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  postSelector: {
    borderWidth: 1,
    borderColor: APP_COLOR.CPBcolor,
    // width: IMAGE_WIDTH,
    opacity: 0.5,
    height: 24,
    marginHorizontal: 8,
    borderRadius: 12,
    // marginVertical: 10,
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 10,
    fontWeight: '400',
    color: APP_COLOR.PrimaryColor,
    marginRight: 2,
  },
  inputText: {
    // marginTop: 16,
    marginVertical: 4,
    color: '#454C52',
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.5,
    flex: 1,
    maxHeight: 100,
  },
  card: {
    borderWidth: 1,
    width: 96,
    height: 72,
    alignItems: 'center',
    padding: 22,
    borderColor: APP_COLOR.PrimaryColor,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor:APP_COLOR.bacgroundcolor,
  },
  cardText: {
    color: APP_COLOR.PrimaryColor,
    fontWeight: '400',
    fontSize: 10,
  },
  ImageAndGalleryContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    left: 0,
  },
  imageInFeedContainer: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
    height: SCREEN_WIDTH,
    //it depends on parent container 20 padding each side
    // width: SCREEN_WIDTH - 40,
    // height: SCREEN_WIDTH - 40,
    // height: 805 * (164 / dimensions.height),
  },
  imageInFeed: {
    // marginTop: 12,
    // height: '100%',
    height: SCREEN_WIDTH-120,
    // width: '100%',
    width: SCREEN_WIDTH-120,
    marginRight: 16,
    // height: 100, width: 100,
    borderRadius: 12,
  },
  delImgInCreateFeed: {
    position: 'absolute',
    top: 6,
    right: 20,
    backgroundColor: '#0008',
    borderRadius: 60,
    // height: 20,
    // width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlineCircle: {
    borderColor: '#fff',
    borderRadius: 60,
    height: 18,
    width: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
