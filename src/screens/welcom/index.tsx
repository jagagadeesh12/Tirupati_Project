import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
// import Login from '../login';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/welcomeScreen.png')}
        style={styles.imageContainer}>
        <View style={{flex: 1}}>
          {/* <Image
            source={require('../../assets/images/tptLogo.png')}
            style={styles.logo}
          /> */}
        </View>
        <View style={styles.welcomeTextStyle}>
          <Text style={styles.welcomeText}>Welcome to the app</Text>
          <TouchableOpacity onPress={() => {}} style={styles.startButton}>
            <Text style={styles.getStarted}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
