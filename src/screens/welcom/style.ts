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
    // height: 100,
    // width: 120,
    margin: 50,
    alignSelf: 'center',
  },
  welcomeText: {
    color: '#ffffff',
    fontFamily: 'Rubik',
    fontWeight: '600',
    fontSize: 20,
  },
  startButton: {
    alignItems: 'center',
    top: 60,
    backgroundColor: '#0074B7',
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    borderRadius: 15,
  },
  getStarted: {
    fontFamily: 'Rubik',
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  welcomeTextStyle: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
