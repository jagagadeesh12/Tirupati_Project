import {View, Text, Modal} from 'react-native';
import React from 'react';
import {SmsTracking} from 'iconsax-react-native';
import styles from './styles';
const PopupModal = ({
  isEmailSent,
  email,
}: {
  isEmailSent: boolean;
  email: string;
}) => {
  return (
    <Modal visible={isEmailSent} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.alertBox}>
          <View style={styles.imageBox}>
            <SmsTracking size="32" color="white" />
          </View>
          <Text style={styles.textHeader}>
            We mailed you a magic link to{' '}
            <Text style={styles.bold}>{email}</Text>
          </Text>
          <Text style={styles.footerText}>
            Click the link to sign in to your account
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default PopupModal;
