import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../../utils';

const styles = StyleSheet.create({
  iconWithNameContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'space-between',
  },
  flexStart: {justifyContent: 'flex-start'},

  touchableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: (SCREEN_WIDTH - 10) / 3,
  },
  text: {
    color: '#454C52',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default styles;
