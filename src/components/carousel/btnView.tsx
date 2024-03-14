import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

import styles from './styles';
import Button from '../button';
import PerchIcon from '../PerchIcon';
import color from '../../theme/color';
import CustomButtonScreen from '../CustomButton';

const BtnView = ({currentSlide, onPrev, onNext, listLength, onSkip}) => {
  if (currentSlide === listLength - 1) {
    // return <Button text="Lets Get Started" onPress={onSkip} />;
    return <CustomButtonScreen label={'Lets Get Started'} onPress={onSkip} />;
  }

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        justifyContent: currentSlide === 0 ? 'flex-end' : 'space-between',
      }}>
      {currentSlide !== 0 ? (
        <TouchableWithoutFeedback onPress={onPrev}>
          <View style={styles.btnContainer}>
            <PerchIcon
              name="ArrowLeft2"
              size={16}
              color={color.DARK_MODE.primary}
            />

            <Text
              style={[
                styles.textBtn,
                // eslint-disable-next-line react-native/no-inline-styles
                {color: color.DARK_MODE.primary, marginLeft: 4},
              ]}>
              Prev
            </Text>
          </View>
        </TouchableWithoutFeedback>
      ) : null}

      <TouchableWithoutFeedback onPress={onNext}>
        <View style={styles.btnContainer}>
          <Text
            style={[
              styles.textBtn,
              // eslint-disable-next-line react-native/no-inline-styles
              {color: color.DARK_MODE.primary, marginRight: 4},
            ]}>
            Next
          </Text>
          <PerchIcon
            name="ArrowRight2"
            size={16}
            color={color.DARK_MODE.primary}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default BtnView;
