import {View, ActivityIndicator} from 'react-native';
import React from 'react';
// import LottieView from 'lottie-react-native';
import color from '../../theme/color';
import {useMagicLink} from '../../hooks';
import style from './styles';

const Loader = () => {
  const {} = useMagicLink();
  return (
    <View style={style.container}>
      <ActivityIndicator size="large" color={color.LIGHT_MODE.primary} />
    </View>
  );
};

export default Loader;
