import React from 'react';
import {TextInput, View} from 'react-native';
import {IInputText} from '../../types';
import styles from './style';

const InputText = ({placeholder, handleOnchange}: IInputText) => {
  return (
    <View style={styles.inputwidth}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#B9B9B9'}
        style={styles.input}
        onChangeText={handleOnchange}
      />
    </View>
  );
};

export default InputText;








// import React, { useState, useRef } from 'react';
// import { View, Animated, Easing, TextInput } from 'react-native';
// import { IInputText } from '../../types';
// import styles from './style';

// const AnimatedInputText = ({ placeholder, handleOnchange }: IInputText) => {
//   const [text, onChangeText] = useState('');
//   const animatedValue = useRef(new Animated.Value(0));

//   const returnAnimatedTitleStyles = {
//     transform: [
//       {
//         translateY: animatedValue?.current?.interpolate({
//           inputRange: [0, 1],
//           outputRange: [22, -4],
//           extrapolate: 'clamp',
//         }),
//       },
//     ],
//     fontSize: animatedValue?.current?.interpolate({
//       inputRange: [0, 1],
//       outputRange: [14, 12], 
//       extrapolate: 'clamp',
//     }),
//     color: animatedValue?.current?.interpolate({
//       inputRange: [0, 1],
//       outputRange: ['#c2c2c2', '#444444'], 
//     }),
//   };

//   const viewStyles = {
//     borderBottomColor: animatedValue?.current?.interpolate({
//       inputRange: [0, 1],
//       outputRange: ['#c2c2c2', '#444444'], 
//     }),
//     borderBottomWidth: 0.8,
//   };

//   const onFocus = () => {
//     Animated.timing(animatedValue?.current, {
//       toValue: 1,
//       duration: 500,
//       easing: Easing.bezier(0.4, 0.0, 0.2, 1),
//       useNativeDriver: false,
//     }).start();
//   };

//   const onBlur = () => {
//     if (!text) {
//       Animated.timing(animatedValue?.current, {
//         toValue: 0,
//         duration: 500,
//         easing: Easing.bezier(0.4, 0.0, 0.2, 1),
//         useNativeDriver: false,
//       }).start();
//     }
//   };

//   return (
//     <Animated.View style={[styles.inputwidth, viewStyles]}>
//       <Animated.Text style={[returnAnimatedTitleStyles]}>{''}</Animated.Text>
//       <TextInput
//         placeholder={placeholder}
//         placeholderTextColor={'#B9B9B9'}
//         style={styles.input}
//         onChangeText={(text) => {
//           onChangeText(text);
//           handleOnchange(text);
//         }}
//         onBlur={onBlur}
//         onFocus={onFocus}
//       />
//     </Animated.View>
//   );
// };

// export default AnimatedInputText;
