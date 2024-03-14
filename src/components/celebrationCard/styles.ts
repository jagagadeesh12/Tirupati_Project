import {Dimensions, StyleSheet} from 'react-native';
import {APP_COLOR} from '../../theme/color';
const dimensions = Dimensions.get('window');
const Width = 165 * (dimensions.width / 375);
const Height = 145 * (dimensions.height / 667);
const styles = StyleSheet.create({
  Container: {
    // height: 145,
    // width: 165,
    height: Height,
    width: Width,
    padding: 8,
    backgroundColor: APP_COLOR.cards,
    borderRadius: 8,
    marginRight: 8,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: '600',
    color: APP_COLOR.black,
    textAlign: 'center',
  },
  date: {
    marginTop: 2,
    fontSize: 12,
    color: '#202124',
    fontFamily: 'Rubik',
  },
  infoText: {
    marginTop: 4,
    fontSize: 12,
    color: '#202124',
    fontFamily: 'Rubik',
  },
});

export default styles;
