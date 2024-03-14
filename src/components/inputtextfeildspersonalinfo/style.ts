import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../theme/color';
const styles = StyleSheet.create({
  view: {
    borderWidth: 1,
    // marginHorizontal: 20,
    height: 64,
    marginVertical: 5,
    borderColor: '#CED2D6',
    borderRadius: 4,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  backTitle: {
    // marginHorizontal: 4,
    fontSize: 12,
    fontWeight: '400',
    color: APP_COLOR.text,
    marginTop: -30,
  },
  icon: {
    marginLeft: 20,
  },
  inputText: {
    marginTop: -20,
    marginHorizontal: 20,
    fontSize: 14,
    color: APP_COLOR.black,
  },
});
export default styles;
