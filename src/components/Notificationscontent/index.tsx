import React, {useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {INotificationsDetails} from '../../types';
import styles from './style';
const NotificationsContent = ({
  imageSource,
  heading,
  content,
  button,
  present,
  icon,
}: INotificationsDetails) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.imageStyle} source={imageSource} />
      <View style={styles.notifications}>
        <View style={styles.viewStyle}>
          <Text style={styles.notificationHeading}>{heading}</Text>
          <Text numberOfLines={3} style={styles.notificationContent}>
            {content}
          </Text>
          <View style={styles.notificationButton}>
            <Text style={styles.dateTextStyle}>{button}</Text>
          </View>
        </View>
        <View style={styles.detailsNotification}>
          <Text style={styles.timing}>{present}</Text>
          <TouchableOpacity onPress={openModal}>
            <Image style={styles.notificationIconstyles} source={icon} />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <TouchableOpacity style={styles.buttonsFlex} onPress={closeModal}>
          <View style={styles.notificationPopup}>
            <Image
              source={require('../../assets/images/trash.png')}
              style={styles.icons}
            />
            <View style={styles.buttonsContent}>
              <Text style={styles.contentButton}>Delete</Text>
              <Text>Delete this notification</Text>
            </View>
          </View>
          <View style={styles.notificationPopup}>
            <Image
              source={require('../../assets/images/volume.png')}
              style={styles.icons}
            />
            <View style={styles.buttonsContent}>
              <Text style={styles.contentButton}>Mute</Text>
              <Text>Mute this notification</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
export default NotificationsContent;
