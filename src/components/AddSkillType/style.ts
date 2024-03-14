import {Dimensions, StyleSheet} from 'react-native';
const dimensions = Dimensions.get('window');
const InputWidth = 330 * (dimensions.width / 375);
const inputHeight = 44 * (dimensions.height / 667);
const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderRadius: 4,
    // width: 350,
    // height: 44,
    width: InputWidth,
    height: inputHeight,
    borderColor: '#CED2D6',
    marginHorizontal: 20,
    paddingLeft: 15,
    marginVertical: 16,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  itemText: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginHorizontal:14
  },
});

export default styles;
