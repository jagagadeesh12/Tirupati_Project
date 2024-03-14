import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {SCREENS} from '..';
// import Login from '../login';
// eslint-disable-next-line react-hooks/rules-of-hooks

const WelcomeScreen = () => {
  const navigation = useNavigation();

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
          <Text style={styles.welcomeText}>Welcome to the Tirupati</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.SIGN_IN)}
            style={styles.startButton}>
            <Text style={styles.getStarted}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
