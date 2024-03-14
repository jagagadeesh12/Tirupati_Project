import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // bottom: 35,
    flexDirection: 'row',
    width: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
    
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 6,
    marginHorizontal: 3,
  
    // backgroundColor: '',
  },
  dotActive: {
    backgroundColor: APP_COLOR.dotactive,
  },
});
export default styles;
