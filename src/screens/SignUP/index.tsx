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

// import {View, Text, Image, SafeAreaView, Alert} from 'react-native';
// import React, {useState} from 'react';
// import InputText from '../../components/InputText';
// import ButtonLoader from '../../components/ButtonLoader';
// import styles from './styles';
// import {useNavigation} from '@react-navigation/native';
// import {SCREENS} from '..';

// const SignUp = () => {
//   const navigation = useNavigation();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = async () => {
//     try {
//       const response = await fetch(
//         'http://13.201.40.122:8888/api/Registration/registration',

//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             userName: username,
//             email: email,
//             password: password,
//             isActive: 1,
//           }),
//         },
//       );
//       console.log('singnup responae', response);

//       if (!response.ok) {
//         throw new Error('Sign up failed');
//       }

//       // Optionally, you can handle successful sign up here
//       // For example, navigate to another screen
//       navigation.navigate(SCREENS.SIGN_IN);
//       Alert.alert('Success', 'Sign up successful!');
//     } catch (error) {
//       console.error('Error signing up:', error);
//       Alert.alert('Error', 'Failed to sign up. Please try again later.');
//     }
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={{flex: 1}}>
//         <View style={styles.container}>
//           <View style={{alignItems: 'center', flexDirection: 'column'}}>
//             <Image
//               source={require('../../assets/images/tptLogo.png')}
//               style={styles.logoStyle}
//             />
//             {/* <Text style={styles.loginText}>Signup</Text> */}
//           </View>
//           <View style={{marginTop: 40}}>
//             <Text style={styles.emailText}>Username</Text>
//             <InputText
//               placeholder={'Enter your username'}
//               handleOnchange={setUsername}
//               keyboardType="default"
//               value={username}
//             />
//             <Text style={styles.emailText}>Email</Text>
//             <InputText
//               placeholder={'Enter your email'}
//               handleOnchange={setEmail}
//               keyboardType="email-address"
//               value={email}
//             />
//             <Text style={styles.emailText}>Password</Text>
//             <InputText
//               placeholder={'Enter your password'}
//               handleOnchange={setPassword}
//               keyboardType="default"
//               value={password}
//             />
//           </View>
//           <View style={{marginTop: 25, marginHorizontal: 20}}>
//             <ButtonLoader label={'Signup'} onPress={handleSignUp} />
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default SignUp;
