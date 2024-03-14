// import React, {useEffect, useState} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {GET_ADRESS} from '../data/service/user';
import {UPDATE_USER_ADDRESS} from '../graphql/mutations/user';
import {useNavigation} from '@react-navigation/native';
import {ADDRESS_LIST, isObjectAsValues} from '../utils';
import Toast from 'react-native-toast-message';
import {useState, useEffect} from 'react';
import {Alert} from 'react-native';

const useAddress = () => {
  const [permanentAddress, setPermanentAddress] = useState({});
  const [communicateAddress, setCommunicateAddress] = useState({});
  const navigation = useNavigation();
  const [isCommunication, setCommunication] = useState(false);
  const [isChecked, setCheckBox] = useState(false);
  const [isFieldsFilled, setIsFieldsFilled] = useState(false);

  const {
    data: address,
    refetch,
    error: fetcherrr,
  } = useQuery(GET_ADRESS, {
    onCompleted: data => {
      if (data.getUserById.communicationAddress) {
        setCommunicateAddress(
          JSON.parse(data.getUserById.communicationAddress),
        );
      }
      if (data.getUserById.primaryAddress) {
        setPermanentAddress(JSON.parse(data.getUserById.primaryAddress));
      }
      setCheckBox(
        JSON.parse(data.getUserById.primaryAddress) &&
          JSON.parse(data.getUserById.communicationAddress),
      );
      setCheckBox(
        data.getUserById.communicationAddress ===
          data.getUserById.primaryAddress,
      );
    },
  });
  const [updateAddress, {data, loading, error}] = useMutation(
    UPDATE_USER_ADDRESS,
    {
      // updateQueries:()
      onCompleted: data => {
        navigation.goBack();
        Toast.show({
          type: 'success',
          text1: 'Your address has been updated successfully',
        });
      },
      refetchQueries: [GET_ADRESS, 'getUserById'],
    },
  );

  const onChangeAddress = (value: string, key: string) => {
    if (isCommunication) {
      setCommunicateAddress({...communicateAddress, [key]: value});
    } else {
      setPermanentAddress({...permanentAddress, [key]: value});
    }
  };

  const onNext = () => {
    setCommunication(true);
    // setCheckBox(false);
  };
  const onPermanentTab = () => {
    setCommunication(false);
    setCheckBox(false);
  };
  const onToggleCheckbox = () => {
    if (isChecked != true) {
      setCommunicateAddress({...permanentAddress});
    } else {
      setCommunicateAddress({});
    }
    setCheckBox(!isChecked);
  };
  const onUpdate = () => {
    updateAddress({
      variables: {
        inp: {
          primaryAddress: JSON.stringify(permanentAddress),
          communicationAddress: JSON.stringify(communicateAddress),
        },
      },
    });
  };

  useEffect(() => {
    setCommunicateAddress(communicateAddress);
  }, [!isChecked, communicateAddress]);

  useEffect(() => {
    const checkFieldsFilled = () => {
      const areAllFieldsFilled = ADDRESS_LIST.every(
        field =>
          permanentAddress[field.key] &&
          permanentAddress[field.key].trim() !== '',
      );
      setIsFieldsFilled(areAllFieldsFilled);
    };

    checkFieldsFilled();
  }, [permanentAddress]);

  return {
    onChangeAddress,
    permanentAddress,
    navigation,
    onNext,
    onUpdate,
    onPermanentTab,
    isCommunication,
    onToggleCheckbox,
    isChecked,
    communicateAddress,
    isDisabled: !isObjectAsValues(permanentAddress),
    isFieldsFilled,
  };
};

export default useAddress;
