import React from 'react';
import WrapperContainer from '../../components/WrapperContainer/WrapperContainer';
import {AppHeader} from '../../components';
import {View, Text, Image} from 'react-native';
import {StyleSheet} from 'react-native';

const Feed = () => {
  return (
    <WrapperContainer containerStyle={{padding: 0}}>
      <View>
        <View>
          {/* <Image
            style={styles.imageStyle}
            source={require('../../assets/images/birthday.png')}
          />
          <Image
            style={styles.tirupatiStyle}
            source={require('../../assets/images/tirupati.png')}
          /> */}
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Feed;

// const styles = StyleSheet.create({
//   imageStyle: {
//     height: 45,
//     width: 45,
//     marginTop: 5,
//     marginLeft: 5,
//   },
//   tirupatiStyle: {
//     width: 60,
//     height: 50,
//   },
// });
