import React from 'react';
import {Animated, View} from 'react-native';

import styles from './styles';
import usePageIndicator from './usePageIndicator';

const DotItem = props => {
  const {dotWidth, backgroundColor} = usePageIndicator(props);
  return (
    <Animated.View
      key={props.idx.toString()}
      style={[styles.dot, {width: dotWidth, backgroundColor}]}
    />
  );
};

const PageIndicators = ({data, scrollX, index}) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => (
        <DotItem key={idx} idx={idx} scrollX={scrollX} />
      ))}
    </View>
  );
};

export default PageIndicators;
