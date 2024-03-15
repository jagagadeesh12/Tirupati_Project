import React, {useRef} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CustombuttonsType} from '../../types/component';
import fontFamily from '../../styles/fontFamily';

const CustomButtonScreen = ({
  label,
  onPress,
  containerStyle,
  labelStyle,
  icon,
  iconStyle,
  imageStyle,
  image,
  borderRadius = 8,
  enabled = true,
  disabledStyle = styles.disabledButton,
  disabledLabelStyle = styles.disabledLabel,
  disabledIconStyle = styles.disabledIcon,
}: CustombuttonsType) => {
  const inputRef = useRef<any>();
  const handlePress = () => {
    if (enabled) {
      onPress && onPress();
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      ref={inputRef}
      style={[
        styles.Button,
        containerStyle,
        !enabled && disabledStyle,
        // {opacity: isDisabled ? 0.5 : 1},
      ]}
      disabled={!enabled}>
      <View style={styles.Container}>
        {icon &&
          !image &&
          React.cloneElement(icon, {
            style: [styles.Icon, iconStyle, !enabled && disabledIconStyle],
          })}
        {image && (
          <Image
            source={image}
            style={[
              styles.Image,
              iconStyle,
              !enabled && disabledIconStyle,
              imageStyle,
            ]}
          />
        )}
        {label && (
          <Text
            style={[
              styles.LabelText,
              labelStyle,
              !enabled && disabledLabelStyle,
            ]}>
            {label}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButtonScreen;

const styles = StyleSheet.create({
  Button: {
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0074B7',
  },
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center'
  },
  LabelText: {
    // textAlign: 'center',
    fontSize: 15,
    // fontWeight: '500',
    // fontFamily: 'Rubik',
    fontFamily: fontFamily.medium,
    color: '#FFFFFF',
  },
  Icon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  disabledButton: {
    opacity: 0.6,
  },
  disabledLabel: {
    color: 'white',
  },
  disabledIcon: {
    tintColor: '#CCCCCC',
  },
  Image: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
});
