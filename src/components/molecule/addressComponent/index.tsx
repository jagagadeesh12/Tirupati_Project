import {FlatList} from 'react-native';
import React from 'react';
import {IAddressComponent} from '../../../types';
import RenderAddress from './renderAddress';

const AddressComponent = ({
  list,
  onChangeAddress,
  value,
}: IAddressComponent) => {
  const renderItem = ({item}) => {
    return (
      <RenderAddress
        addressItem={item}
        onChangeAddress={onChangeAddress}
        value={value[item.key]}
      />
    );
  };

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      // contentContainerStyle={{paddingBottom: 150}}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default AddressComponent;
