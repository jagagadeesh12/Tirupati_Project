import React, {StyleSheet, View} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {SwitchOptionsCard} from '../../types/component';
import {FlipInXDown} from 'react-native-reanimated';

// const switchoptions = [
//   {label: 'Leave Requests', value: 'Leave Requests'},
//   {label: 'Regularize Requests', value: 'Regularize Requests'},
// ];

const SwitchSelectorScreen = ({switchoptions, onPress}: SwitchOptionsCard) => {
  return (
    <View style={styles.switchselector}>
      <SwitchSelector
        options={switchoptions}
        initial={0}
        onPress={onPress}
        backgroundColor={'#E4E4E4'}
        buttonColor={'white'}
        height={48}
        buttonMargin={1}
        fontSize={14}
        textColor={'black'}
        selectedColor={'black'}
        borderRadius={16}
      />
    </View>
  );
};
export default SwitchSelectorScreen;

const styles = StyleSheet.create({
  switchselector: {
    marginVertical: 20,
    // width: '95%',
    // marginHorizontal: 10,
  },
});
