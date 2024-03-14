import {Dimensions, StyleSheet} from 'react-native';
const dimensions = Dimensions.get('window');
// const imageWidth = 40 * (dimensions.width / 375);
const buttonHeight = 44 * (dimensions.height / 667);

const styles = StyleSheet.create({
  ExperienceButton: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
  },
  btn: {
    backgroundColor: '#0074B7',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
    minWidth: '50%',  
  },
  AddIcon: {
    marginRight: 5
  },
});
export default styles;
