import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../utils';
import color from '../../theme/color';

const styles = StyleSheet.create({
  feedImageContainer: {
    position: 'relative',
    width: SCREEN_WIDTH,
    // height: 192,
    overflow: 'hidden',
    backgroundColor: 'green',
  },
  loaderContainer: {
    position: 'absolute',
  },
  likedCount: {
    color: '#454C52',
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: 0.5,
    marginTop: 8,
  },
  screenPadding: {
    padding: 20,
  },
  headerContainer: {
    padding: 16,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 2,
    color: '#454C52',
  },
  commentItemContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
  },
  replyText: {
    color: '#454C52',
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.25,
  },
  iconWithCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginRight: 20,
  },
  countText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.25,
  },
  iconsInComments: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  childContainer: {
    paddingHorizontal: 20,
    paddingTop: 8,
    // backgroundColor: 'red',
  },
  itemSeparatorContainer: {
    marginHorizontal: 20,
    marginTop: 16,
  },
  line: {
    // borderWidth: 1,
    // borderLeftWidth: 3,
    // borderColor: color.LIGHT_MODE.liteText,
    // height:'100%'
    // height: '100%',
    flex: 1,
    width: 1,
    // marginBottom: -8,
    backgroundColor: '#CED2D6',
    // rotation: 90,
  },
  imageWithThreadContainer: {
    marginTop: -4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
