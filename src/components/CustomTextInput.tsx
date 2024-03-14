import React from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import {TextInputtypes} from '../types/component';

const CustomTextInputRender = ({
  label,
  placeholder,
  containerStyles,
  labelStyles,
  icon,
  image,
  imageStyles,
  keyboardType,
  iconStyles,
  textInputStyle,
  multiline,
  value,
  onChangeText,
  textAlignVertical,
}: TextInputtypes) => {
  return (
    <View style={containerStyles}>
      {label && <Text style={[styles.label, labelStyles]}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          multiline={multiline}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#B9B9B9"
          style={[
            styles.inputType,
            textInputStyle,
            // {paddingRight: image ? 10 : 10},
          ]}
          keyboardType={keyboardType}
          textAlignVertical={
            textAlignVertical || (multiline ? 'top' : 'center')
          }
        />
        {image && (
          <Image
            source={image}
            style={[styles.image, imageStyles, {top: multiline ? 25 : '50%'}]}
          />
        )}
        {icon && <View style={[styles.iconContainer, iconStyles]}>{icon}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: '#202124',
    fontFamily: 'Rubik',
  },
  inputContainer: {
    position: 'relative',
  },
  inputType: {
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 9,
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    position: 'absolute',
    right: 10,
    top: '50%',
    marginTop: -10,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  iconContainer: {
    height: 20,
    width: 20,
    position: 'absolute',
    right: 20,
    top: '50%',
    marginTop: -10,
    resizeMode: 'contain',
  },
});

export default CustomTextInputRender;
