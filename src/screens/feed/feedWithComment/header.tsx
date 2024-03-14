import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import PerchIcon from '../../../components/PerchIcon';
import {SafeAreaView} from 'react-native-safe-area-context';

const Header = ({onBackBtn}: {onBackBtn: () => void}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onBackBtn}>
        <PerchIcon name="ArrowLeft2" color="#454C52" size={16} />
        <Text>Post</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;
