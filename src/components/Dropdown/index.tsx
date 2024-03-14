import {View, Text, TouchableWithoutFeedback, Alert} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import styles from './style';
import {ArrowDown2, ArrowUp2, Icon} from 'iconsax-react-native';
import {APP_COLOR} from '../../theme/color';
import {IDropdown} from '../../types';
import useDropdown from './useDropDown';

const {width} = Dimensions.get('window');
const responsiveSize = width * 0.042; // Calculate responsive icon size
const responsiveContainerSize = responsiveSize * 1.125;

const Dropdown = (props: IDropdown) => {
  const {toggle, onOptionPress, isOpen, selectOption} = useDropdown(props);
  const {
    placeHolder,
    options,
    dropdownContainerStyle,
    isShowImgIcon = false,
  } = props;

  
  return (
    <TouchableWithoutFeedback onPress={toggle}>
      <View
        style={[
          // styles.container,
          // {marginHorizontal: 16},
        ]}>
        <View
          style={[
            styles.container,
            {
              borderBottomWidth: isOpen ? 0 : 1,
              borderBottomLeftRadius: isOpen ? 0 : 6,
              borderBottomRightRadius: isOpen ? 0 : 6,
            },
            dropdownContainerStyle ? dropdownContainerStyle : {width: '100%'},
          ]}>
          {/* {isShowImgIcon ? (
            <Icon
              name={require('../../assets/images/add-circle.png')}
              iconType="Image"
              size={responsiveSize}
              containerSize={responsiveContainerSize}
              color={APP_COLOR.PrimaryColor}
            />
          ) : null} */}
          <Text
            style={[styles.text, selectOption ? styles.selectedText : null]}>
            {selectOption ? selectOption : placeHolder}
          </Text>
          {isOpen ? (
            <ArrowUp2 size={responsiveSize} color="#454C52" />
          ) : (
            <ArrowDown2 size={responsiveSize} color="#454C52" />
          )}
        </View>
        {isOpen ? (
          <View style={{width: '100%', borderWidth: 1, borderColor: '#CED2D6'}}>
            {options.map((item, index) => {
              return (
                <View
                  style={{
                    borderTopWidth: index == 0 ? 0 : 1,
                    height: 40,
                    borderColor: '#CED2D6',
                    justifyContent: 'center',
                  }}>
                  <TouchableWithoutFeedback
                    style={{
                      backgroundColor:
                        selectOption === item ? '#454C52' : '#ffffff',
                    }}
                    // eslint-disable-next-line react-native/no-inline-styles
                    onPress={() => onOptionPress(item)}>
                    <Text
                      style={[
                        styles.option,
                        {
                          color: selectOption === item ? 'black' : '#454C52',
                        },
                      ]}>
                      {item}
                    </Text>
                  </TouchableWithoutFeedback>
                </View>
              );
            })}
          </View>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Dropdown;
