import {Dimensions, StyleSheet} from 'react-native';
import {APP_COLOR} from '../../../theme/color';

const dimensions = Dimensions.get('window');

const imageHeight = 64 * (dimensions.height / 667);

const styles = StyleSheet.create({
  containerStyles: {
    height: imageHeight,
    maxHeight: 64,
    borderWidth: 1,
    borderColor: APP_COLOR.litetext,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingTop: 8,
    marginBottom: 8,
  },
  placeHolder: {
    color: '#B9B9B9',
  },
  labelProps: {
    color: '#B9B9B9',
  },
});

export const customLabelStyles = {
  colorFocused: '#B9B9B9',
  colorBlurred: '#B9B9B9',
};
export default styles;
