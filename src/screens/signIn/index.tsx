/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, KeyboardAvoidingView, Platform} from 'react-native';
import React from 'react';
import {Button, InputField} from '../../components';
import styles from './styles';
import {useSignIn} from '../../hooks';
import PopupModal from './PopupModal';
import CustomButtonScreen from '../../components/CustomButton';

const SignIn = () => {
  const {
    onSignIn,
    error,
    email,
    onChangeText,
    isEmailSent,
    isLoading,
    isDisableButton,
  } = useSignIn();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/welcomeimage.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={{flex: 1}}>
          <Text style={styles.welcomeText}>Hello !</Text>
          <Text style={styles.subText}>
            Get a magic link to sign in instantly!
          </Text>

          <InputField
            title="Email"
            placeholder="Your Email Address"
            onChangeText={onChangeText}
            isError={error.length > 0}
            error={error}
          />
        </View>
        <View style={{opacity: !isDisableButton ? 0.5 : 1}}>
          {/* <Button
            text="Sign In"
            onPress={onSignIn}
            isDisabled={!isDisableButton}
            loading={isLoading}
          /> */}
          <CustomButtonScreen
            label={'Sign In'}
            onPress={onSignIn}
            enabled={isDisableButton}
            loading={isLoading}
          />
        </View>
      </View>
      <PopupModal email={email} isEmailSent={isEmailSent} />
    </KeyboardAvoidingView>
  );
};

export default SignIn;
