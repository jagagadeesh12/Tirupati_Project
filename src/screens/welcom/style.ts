import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    resizeMode: 'center',
  },
  logo: {
    margin: 50,
    alignSelf: 'center',
  },
  welcomeText: {
    color: '#ffffff',
    fontFamily: 'IbarraRealNova',
    fontWeight: '400',
    fontSize: 16,
    top: 60,
  },
  startButton: {
    alignItems: 'center',
    backgroundColor: '#0074B7',
    width: '90%',
    height: '23%',
    justifyContent: 'center',
    borderRadius: 15,
    top: 90,
  },
  getStarted: {
    fontFamily: 'Rubik',
    fontSize: 20,
    fontWeight: '400',
    color: '#ffffff',
  },
  welcomeTextStyle: {
    alignItems: 'center',
  },
});

export default styles;
