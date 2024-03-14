import {View} from 'react-native';
import React from 'react';
import {CustomBtn, TextBtn} from '../../components';
import styles from './styles';
import {opacity} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import CustomButtonScreen from '../../components/CustomButton';

interface IHeader {
  onCancelPost: () => void;
  onPost: () => void;
  shouldButtonDisable?: boolean;
}

const Header = ({onCancelPost, onPost, shouldButtonDisable}: IHeader) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TextBtn label={'Cancel'} onPress={onCancelPost} />
      <View style={{opacity: !shouldButtonDisable ? 0.5 : 1}}>
        {/* <CustomBtn
        label={'Post'}
        onPress={onPost}
        isDisabled={shouldButtonDisable}
      /> */}
        <CustomButtonScreen
          label={'Post'}
          onPress={onPost}
          isDisabled={shouldButtonDisable}
          containerStyle={{paddingHorizontal: 15, height: 30}}
          labelStyle={{fontSize: 10}}
        />
      </View>
    </View>
  );
};

export default Header;
