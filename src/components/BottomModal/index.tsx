import {View, Text, TouchableOpacity, Modal, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import imagepath from '../../constant/imagepath';
const BottomModal = ({
  visible,
  closeModal,
  user,
  feed,
  currentUser,
  isMyActivity = false,
  onPressToggleSave = () => {},
  onPressNavigation = () => {},
  onDelete = () => {},
  onSave = () => {},
  ...props
}: {
  visible: boolean;
  onDelete?: any;
  onSave?: any;
  isMyActivity?: boolean;
  onPressToggleSave?: () => void;
  onPressNavigation?: any;
  closeModal: () => void;
  user?: any;
  feed?: any;
  currentUser: any;
}) => {
  const shouldShowDeleteButton = user?.userId == currentUser?.userId;
  const shouldShowSaveButton = user?.userId != currentUser?.userId;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}>
      <TouchableOpacity
        activeOpacity={1}
        style={{flex: 1}}
        onPress={closeModal}>
        <View style={{flex: 1}} />
        <View style={styles.buttonsflex}>
          <View style={styles.line} />
          {shouldShowSaveButton && !isMyActivity && (
            <TouchableOpacity
              onPress={onPressToggleSave}
              style={styles.SavePostStyles}>
              <Image
                source={imagepath.savePost}
                style={{height: 20, width: 20}}
              />
              <View style={styles.ContentStyles}>
                <Text style={styles.Save}> Save / Unsave</Text>
                <Text style={styles.SavePost}>Save / Unsave this Post</Text>
              </View>
            </TouchableOpacity>
          )}
          {shouldShowDeleteButton && !isMyActivity && (
            <TouchableOpacity onPress={onDelete} style={styles.SavePostStyles}>
              <Image
                source={imagepath.delete}
                style={{height: 20, width: 20}}
              />
              <View style={styles.ContentStyles}>
                <Text style={styles.Save}> Delete</Text>
                <Text style={styles.SavePost}>Delete this post</Text>
              </View>
            </TouchableOpacity>
          )}
          {isMyActivity && (
            <TouchableOpacity
              onPress={onPressNavigation}
              style={styles.SavePostStyles}>
              <Image
                source={imagepath.savePostFilled}
                style={{height: 20, width: 20, tintColor: 'black'}}
              />
              <View style={styles.ContentStyles}>
                <Text style={styles.Save}> Saved post</Text>
                <Text style={styles.SavePost}>See saved posts</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default BottomModal;
