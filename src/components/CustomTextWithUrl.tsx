import {View, Text, Linking, TouchableOpacity} from 'react-native';
import React from 'react';
import {splitTextAtURLs, urlRegex} from '../utils/utils';
import color from '../theme/color';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

const CustomTextWithUrl = ({text}: {text: string}) => {
  const parts = splitTextAtURLs(text);

  const openURL = ({url}: {url: string}) => {
    Linking.openURL(url);
    // Linking.canOpenURL(url).then(supported => {
    //   console.log(supported, 'this is supported')
    //   if (supported) {
    //     Linking.openURL(url);
    //   } else {
    //     console.log("Don't know how to open URI: " + url);
    //   }
    // });
  };
  return (
    <Text style={[commonStyles.fontSize14Regular, {marginTop: 12}]}>
      {parts.map((part, index) => {
        if (part.match(urlRegex)) {
          return (
              <Text key={index}
                onPress={() => openURL({url: part})}
                style={[{color: colors.link, textDecorationLine: 'underline'}]}>
                {part}
              </Text>
          );
        } else {
          return (
            <Text style={[{color: colors.text}]} key={index}>
              {part}
            </Text>
          );
        }
      })}
    </Text>
  );
};

export default CustomTextWithUrl;
