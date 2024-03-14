import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../../utils';

const styles = StyleSheet.create({
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  nameContainer: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 12,
  },
  bold: {
    fontWeight: 'bold',
    color: 'black',
  },
  fontSize10: {fontWeight: 'normal', fontSize: 10, color: '#454C52'},
  feedImage: {
    width: '100%',
    height: SCREEN_WIDTH,
    resizeMode: 'stretch',
    marginTop: 12,
  },
  likeShareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  likeText: {
    marginTop: 8,
    fontSize: 10,
    color: '#454C52',
    marginHorizontal: 16,
  },
});

export default styles;
