import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import ReferJobInputText from '../../components/ReferJob';
import {Button} from '../../components';
// import DocumentPicker from 'react-native-document-picker'; // Import DocumentPicker
import Toast from 'react-native-toast-message';
import CustomButtonScreen from '../../components/CustomButton';

const ReferJob = ({
  jobTitle = 'UI UX Designer',
  closeModal,
}: {
  jobTitle: string;
  closeModal: () => void;
}) => {
  // const openDocumentPickers = async () => {
  //   try {
  //     const res = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.allFiles],
  //     });
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       console.log('Document picker cancelled');
  //     } else {
  //       console.log('Error while picking the document: ', err);
  //     }
  //   }
  // };
  const HandleOnReferJobButtonPress = () => {
    closeModal();
    Toast.show({
      type: 'success',
      text1: 'Job referral has been sent successfully',
    });
  };

  return (
    <ScrollView contentContainerStyle={{flex: 1, padding: 16}}>
      <View style={{flex: 1}} />
      <View style={styles.viewContainer}>
        <TouchableOpacity onPress={closeModal} style={styles.line} />
        <Text style={styles.ApplyingContainer}>Applying for</Text>
        <Text style={styles.UIandUXContainer}>{jobTitle}</Text>
        <Text style={styles.DataProfileContainer}>
          Fill in the data for profile. It will take a couple of  minutes. You
          only need a resume
        </Text>
      </View>
      <View style={styles.viewdatContainer}>
        <ReferJobInputText
          label="Name"
          placeholder={'Enter the candidates name'}
        />
        <ReferJobInputText
          placeholder={'Enter contact number'}
          label="Contact Number"
          keyboardType="numeric"
          isMobile={true}
        />
        <ReferJobInputText placeholder={'Enter email'} label="Email" />
        <ReferJobInputText
          placeholder={'Enter Experience'}
          label="Experience"
          // value={''}
          // onChangeText={undefined}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 4,
          }}>
          <Text style={styles.textContainer}>
            Please attach your updated CV
          </Text>
          <Text style={{color: '#F34141'}}>*</Text>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderStyle: 'dashed',
          borderColor: '#D5D8E2',
          height: 130,
          marginBottom: 24,
          borderRadius: 5,
          justifyContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.imageContainer}
            source={require('../../assets/images/documentupload.png')}
          />

          <Text style={styles.chooseContainer}>
            Drag & Drop or{' '}
            <Text style={{color: '#407BFF', fontWeight: '600'}}>choose</Text>{' '}
            file to upload
          </Text>
          <Text>Select PNG or JPEG</Text>
        </View>
      </View>
      {/* <Button
        text={'Apply'}
        onPress={HandleOnReferJobButtonPress}
        loading={false}
      /> */}
      <CustomButtonScreen
        label={'Apply'}
        onPress={HandleOnReferJobButtonPress}
        loading={false}
      />
    </ScrollView>
  );
};

export default ReferJob;
