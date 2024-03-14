import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT} from '../../../utils';

const styles = StyleSheet.create({
  feeWithCommentContainer: {
    // position: 'relative',
    // height: SCREEN_HEIGHT,
    flex: 1,
    backgroundColor: '#FEFEFE',
  },
  replyContainer: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#FEFEFE',
    // paddingTop: 8,
  },
});
export default styles;
