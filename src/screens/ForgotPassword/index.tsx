import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import ButtonLoader from '../../components/ButtonLoader';
import InputText from '../../components/InputText';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '..';

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <View style={{alignItems: 'center', flexDirection: 'column'}}>
            <Image
              source={require('../../assets/images/tptLogo.png')}
              style={styles.logoStyle}
            />
          </View>
          <Text style={styles.loginText}> Forgot password</Text>
            <Text style={styles.resetPassowrd}>
              Please enter your email to reset the password
            </Text>
          <View style={{marginTop: 40}}>
            <Text style={styles.emailText}>Email</Text>
            <InputText
              placeholder={'Enter your email'}
              handleOnchange={function (e: string): void {}}
              keyboardType="email-address"
              value={''}
            />
          </View>

          <View style={{marginTop: 150, marginHorizontal: 20}}>
            <ButtonLoader
              label={'Reset Password'}
              onPress={() => navigation.navigate(SCREENS.RESET_PASSWORD)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
