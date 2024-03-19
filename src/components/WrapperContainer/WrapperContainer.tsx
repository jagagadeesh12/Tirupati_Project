import {View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';

const WrapperContainer = ({
  children,
  backgroundColor = 'white',
  containerStyle,
}: {
  children: any;
  backgroundColor?: string;
  containerStyle?: {};
}) => {
  return (
    <SafeAreaView style={{flex: 1, flexGrow: 1, backgroundColor}}>
      <StatusBar backgroundColor={backgroundColor} />
      <View style={{backgroundColor, flex: 1, padding: 10, ...containerStyle}}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default WrapperContainer;
