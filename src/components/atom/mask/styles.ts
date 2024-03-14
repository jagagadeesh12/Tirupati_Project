import {StyleSheet} from 'react-native';
import {APP_COLOR, DARK_MODE} from '../../../theme/color';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    opacity: 0.7,
  },
});

export default styles;
