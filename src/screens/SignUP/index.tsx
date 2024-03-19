import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import InputText from '../../components/InputText';
import ButtonLoader from '../../components/ButtonLoader';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '..';

const SignUp = () => {
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
            {/* <Text style={styles.loginText}>Signup</Text> */}
          </View>
          <View style={{marginTop: 40}}>
            <Text style={styles.emailText}>Username</Text>
            <InputText
              placeholder={'Enter your username'}
              handleOnchange={function (e: string): void {}}
              keyboardType="default"
              value={''}
            />
            <Text style={styles.emailText}>Email</Text>
            <InputText
              placeholder={'Enter your email'}
              handleOnchange={function (e: string): void {}}
              keyboardType="email-address"
              value={''}
            />
            <Text style={styles.emailText}>Password</Text>
            <InputText
              placeholder={'Enter your password'}
              handleOnchange={function (e: string): void {}}
              keyboardType="default"
              value={''}
            />
          </View>
          <View style={{marginTop: 25, marginHorizontal: 20}}>
            <ButtonLoader
              label={'Signup'}
              onPress={() => navigation.navigate(SCREENS.SIGN_IN)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
