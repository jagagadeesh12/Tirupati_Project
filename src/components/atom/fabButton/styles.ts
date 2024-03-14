import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../../types/Colors';

const styles = StyleSheet.create({
  fabButtonImg: {
    position: 'absolute',
    bottom:20,
    right: 20,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  fabContainer: {
    height: 56,
    width: 56,
    backgroundColor: APP_COLOR.PrimaryColor,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
