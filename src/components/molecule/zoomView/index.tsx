import React from 'react';
import {View, PanResponder, Dimensions} from 'react-native';
import {IZoomView} from '../../../types';

const ZoomView = ({
  children,
  onZoomProgress,
  onZoomStart,
  onZoomEnd,
}: IZoomView) => {
  const panResponder = PanResponder.create({
    onPanResponderMove: (e, {dy}) => {
      const {height: windowHeight} = Dimensions.get('window');
      return onZoomProgress(
        Math.min(Math.max((dy * -1) / windowHeight, 0), 0.5),
      );
    },
    onMoveShouldSetPanResponder: (ev, {dx}) => {
      return dx !== 0;
    },
    onPanResponderGrant: () => {
      return onZoomStart();
    },
    onPanResponderRelease: () => {
      return onZoomEnd();
    },
  });

  return (
    <View style={{flex: 1, width: '100%'}} {...panResponder.panHandlers}>
      {children}
    </View>
  );
};

export default ZoomView;
