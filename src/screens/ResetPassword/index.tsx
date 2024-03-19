import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import InputText from '../../components/InputText';
import ButtonLoader from '../../components/ButtonLoader';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '..';

const ResetPassword = () => {
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
          <Text style={styles.loginText}>Set a new password</Text>
          <Text style={styles.resetPassowrd}>
            Create a new password. Ensure it differs from previous ones for
            security
          </Text>
          <View style={{marginTop: 40}}>
            <Text style={styles.emailText}>New Password</Text>
            <InputText
              placeholder={'Enter your Password'}
              handleOnchange={function (e: string): void {}}
              keyboardType="default"
              value={''}
            />
            <Text style={styles.emailText}>Confirm Password</Text>
            <InputText
              placeholder={'Enter your  confirm password'}
              handleOnchange={function (e: string): void {}}
              keyboardType="default"
              value={''}
            />
          </View>
          <View style={{marginTop: 25, marginHorizontal: 20}}>
            <ButtonLoader
              label={'Update password'}
              onPress={() => navigation.navigate(SCREENS.SIGN_IN)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
