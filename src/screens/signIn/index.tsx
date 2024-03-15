import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {CustomCheckbox} from '../../components';
import ButtonLoader from '../../components/ButtonLoader';
import InputText from '../../components/InputText';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '..';

const SignIn = () => {
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
            {/* <Text style={styles.loginText}>Login</Text> */}
          </View>
          <View style={{marginTop: 40}}>
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
          <View style={styles.viewStyle}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 8,
              }}>
              <CustomCheckbox
                isChecked={false}
                onChange={function (checked: boolean): void {}}
                disabled={false}
              />
              <Text style={styles.remeberText}>Remember me </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.FORGOT_PASSWORD)}>
              <Text style={styles.forgetPassword}>Forget Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.BOTTOM_TAB_SCREENS)}>
            <View style={{marginTop: 25, marginHorizontal: 20}}>
              <ButtonLoader label={'Login'} onPress={function (): void {}} />
            </View>
          </TouchableOpacity>
          {/* <View style={styles.viewStyle}>
            <View style={styles.viewLine} />
            <Text style={styles.Or}>OR</Text>
            <View style={styles.viewLine} />
          </View> */}
        </View>
      </View>
      <View style={styles.signUpView}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.SIGN_UP)}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
