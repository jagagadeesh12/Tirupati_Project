import {View} from 'react-native';
import React from 'react';

import customStyles from './style';
import {IItemSeparator} from '../../../types';

const ItemSeparator = ({styles = {}}: IItemSeparator) => {
  return <View style={[customStyles.container, styles]} />;
};

export default ItemSeparator;
