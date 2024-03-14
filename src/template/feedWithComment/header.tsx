import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import PerchIcon from '../../components/PerchIcon';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const Header = ({onBackBtn}: {onBackBtn: () => void}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.headerContainer} onPress={onBackBtn}>
        <PerchIcon name="ArrowLeft2" color="#454C52" size={20} />
        <Text style={styles.headerTitle}>Post</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;
