import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../../theme/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: APP_COLOR.PrimaryColor,
    borderBottomWidth: 1,
    // paddingBottom: 4,
    bottom: 15,
  },
  replyTo: {
    color: '#454C52',

    // font-family: Rubik;
    fontSize: 14,
    fontWeight: '400',

    letterSpacing: 0.1,
  },
});
export default styles;
