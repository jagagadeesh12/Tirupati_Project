import {Dimensions, StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  viewContainer: {
    marginHorizontal: 21,
    marginTop: 30,
    paddingVertical: 10,
  },
  text: {
    textAlign: 'center',
    // backgroundColor: 'red',
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  contentContainer: {
    margin: 20,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#A9A9A9',
    borderRadius: 8,
  },
});

export default styles;
