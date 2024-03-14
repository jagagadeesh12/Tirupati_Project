import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  CloseSquare,
} from 'iconsax-react-native';
import styles from './styles';
import moment from 'moment-timezone';
import imagepath from '../../constant/imagepath';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getExperienceSuffix} from '../../utils';
const dimensions = Dimensions.get('window');
const imageWidth = 109 * (dimensions.width / 375);
const imageHeight = 100 * (dimensions.height / 667);

const BirthdayPopupModal = ({
  upcomingAnniversaries,
}: {
  upcomingAnniversaries: any;
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [notShownOnce, setNotShownOnce] = useState(true);
  const [todayAnniversaries, setTodayAnniversaries] = useState(
    upcomingAnniversaries,
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showPrevious, setShowPrevious] = useState(false);

  const handleClosePopup = () => {
    setNotShownOnce(false);
    setShowPopup(false);
  };

  useEffect(() => {
    if (upcomingAnniversaries.length > 0 && notShownOnce) {
      shouldShowPopup();
    }
  }, [upcomingAnniversaries]);

  const shouldShowPopup = async () => {
    const Today = moment().format('MM-DD');
    const popupShownDate = await AsyncStorage.getItem('popupShownDate');

    if (popupShownDate && popupShownDate == JSON.stringify(Today)) {
      setShowPopup(false);
      return;
    } else {
      const data = JSON.stringify(Today);
      AsyncStorage.setItem('popupShownDate', data);
    }
    const birthdayArray: [] = upcomingAnniversaries.filter(
      (item: any) =>
        moment(item.dob).format('MM-DD') === Today ||
        moment(item.dateOfJoining).format('MM-DD') === Today,
    );
    setTodayAnniversaries(birthdayArray);
    if (birthdayArray.length > 0) {
      setShowPopup(true);
    }
    // setTimeout(() => {
    //   setNotShownOnce(false);
    //   setShowPopup(false);
    // }, 8000);
  };
  const handleSwipeLeft = () => {
    setActiveImageIndex(prevIndex => {
      if (prevIndex > 0) {
        setShowPrevious(true);
        if (prevIndex === 1) {
          setShowPrevious(false);
        }
        return prevIndex - 1;
      } else {
        return prevIndex;
      }
    });
  };

  const handleSwipeRight = () => {
    setActiveImageIndex(prevIndex => {
      if (prevIndex < todayAnniversaries.length - 1) {
        setShowPrevious(true);
        if (prevIndex === todayAnniversaries.length - 1) {
          setShowPrevious(false);
        }
        return prevIndex + 1;
      } else {
        return prevIndex;
      }
    });
  };

  const renderImage = (item: any, index: string) => (
    <View style={{}} key={index}>
      <Image
        style={{
          width: imageWidth,
          height: imageHeight,
          resizeMode: 'cover',
          borderRadius: 150,
          alignSelf: 'center',
          marginTop: 12,
        }}
        source={
          item.profileImage
            ? {uri: item.profileImage}
            : imagepath.placeholderImage
        }
      />
    </View>
  );

  return (
    <Modal visible={showPopup} transparent={true}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View style={{flex: 1}} />
        <View
          style={{
            height: 300,
            width: '80%',
          }}>
          <CloseSquare
            size={20}
            color="#0074B7"
            style={{
              position: 'absolute',
              right: 8,
              top: 8,
              zIndex: 777,
            }}
            onPress={handleClosePopup}
          />
          <ImageBackground
            imageStyle={{borderRadius: 12, alignItems: 'center'}}
            source={require('../../assets/images/popupanimation.png')}
            style={{
              flex: 1,
              backgroundColor: '#FFFFFF',
              borderRadius: 12,
            }}>
            {todayAnniversaries.length > 1 && showPrevious && (
              <TouchableOpacity
                onPress={handleSwipeLeft}
                style={{
                  position: 'absolute',
                  left: -10,
                  top: '50%',
                }}>
                <Text
                  style={{
                    fontSize: 25,
                    color: '#0074B7',
                    textAlign: 'center',
                  }}>
                  {<ArrowCircleLeft size="32" color="#0074B7" variant="Bold" />}
                </Text>
              </TouchableOpacity>
            )}
            <View
              style={{
                flex: 1,
                // alignItems: 'center',
                // justifyContent: 'center',
                // flex: 1,
              }}>
              {/* <View style={{flex: 1}} /> */}
              {todayAnniversaries.map(
                (item, index) =>
                  index === activeImageIndex && (
                    <View style={{flex: 1}} key={index}>
                      {renderImage(
                        {
                          ...item,
                          isBirthday:
                            moment(item.dob).format('MM-DD') ===
                            moment().format('MM-DD'),
                          isAnniversary:
                            moment(item.dateOfJoining).format('MM-DD') ===
                            moment().format('MM-DD'),
                          yearsOfExperience:
                            moment().diff(item.dateOfJoining, 'years') + 1,
                        },
                        index,
                      )}
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        {item.isBirthday ? (
                          <View>
                            <Text style={styles.HappyBirthday}>HAPPY</Text>
                            <Text style={styles.HappyBirthday2}>Birthday</Text>
                            <Text style={[styles.userName]}>
                              {item.fullName}
                            </Text>
                          </View>
                        ) : (
                          <>
                            <View style={{}}>
                              <Text style={styles.HappyBirthday}>HAPPY</Text>
                              <Text style={styles.Happyanniversary2}>
                                WorkAnniversary
                              </Text>
                              <Text style={[styles.userName]}>
                                {item.fullName}
                              </Text>
                              <Text
                                style={{
                                  textAlign: 'center',
                                  fontWeight: '400',
                                  fontSize: 14,
                                  color: '#202124',
                                }}>
                                {getExperienceSuffix(item.dateOfJoining)}
                              </Text>
                            </View>
                          </>
                        )}
                      </View>
                    </View>
                  ),
              )}
            </View>
            {todayAnniversaries.length > 1 &&
              activeImageIndex < todayAnniversaries.length - 1 && (
                <TouchableOpacity
                  onPress={handleSwipeRight}
                  style={{
                    position: 'absolute',
                    right: -10,
                    top: '50%',
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: '#0074B7',
                      textAlign: 'center',
                    }}>
                    {
                      <ArrowCircleRight
                        size="32"
                        color="#0074B7"
                        variant="Bold"
                      />
                    }
                  </Text>
                </TouchableOpacity>
              )}
          </ImageBackground>
        </View>
        <View style={{flex: 1}} />
      </View>
    </Modal>
  );
};

export default BirthdayPopupModal;
