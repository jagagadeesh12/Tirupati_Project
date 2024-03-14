/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Platform, StatusBar, useColorScheme, View} from 'react-native';
// import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {CustomToast} from './src/components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootContainer} from './src/navigation';
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const SafePlatFrom = ({children}: {children: React.ReactNode}) => {
    if (Platform.OS === 'android') {
      return <>{children}</>;
    }
    return <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>;
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafePlatFrom>
      <GestureHandlerRootView>
        <View style={{height: '100%', width: '100%'}}>
          {/* <SafeAreaView style={backgroundStyle}> */}
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <RootContainer />
          <CustomToast />
        </View>
      </GestureHandlerRootView>
    </SafePlatFrom>
  );
}

export default App;

if (__DEV__) {
  console.log('Development,');
} else {
  console.log = () => {};
}
