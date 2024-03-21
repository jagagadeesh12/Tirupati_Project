import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import InputText from '../../components/InputText';
import ButtonLoader from '../../components/ButtonLoader';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '..';
import axios from 'axios';

const SignUp = () => {
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        ' http://13.201.40.122:8888/api/Registration/registration',
        {
          userName,
          email,
          password,
        },
      );
      console.log(response.data); // Assuming your API returns some data upon successful signup
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };
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
              handleOnchange={() => {}}
              keyboardType="default"
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
              onPress={handleSignup => navigation.navigate(SCREENS.SIGN_IN)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

// import {View, Text, Image, SafeAreaView} from 'react-native';
// import React, {useState} from 'react';
// import InputText from '../../components/InputText';
// import ButtonLoader from '../../components/ButtonLoader';
// import styles from './styles';
// import {useNavigation} from '@react-navigation/native';
// import {SCREENS} from '..';
// import axios from 'axios';

// const SignUp = () => {
//   const [userName, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation();

//   const handleSignup = async () => {
//     try {
//       const response = await axios.post(
//         'http://13.201.40.122:8888/api/Registration/registration',
//         {
//           userName: userName,
//           email: email,
//           password: password,
//           isActive: 1, // Assuming isActive is always 1 for new registrations
//         },
//       );
//       console.log(response.data); // Log response data upon successful signup
//       // Assuming you want to navigate to the sign-in screen upon successful signup
//       navigation.navigate(SCREENS.SIGN_IN);
//     } catch (error) {
//       console.error('Error signing up:', error);
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
//               handleOnchange={setUserName}
//               keyboardType="default"
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
//               secureTextEntry={true}
//             />
//           </View>
//           <View style={{marginTop: 25, marginHorizontal: 20}}>
//             <ButtonLoader label={'Signup'} onPress={handleSignup} />
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default SignUp;
