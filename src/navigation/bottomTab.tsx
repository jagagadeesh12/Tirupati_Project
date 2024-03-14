import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  BackHandler,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home2,
  Note1,
  ProfileCircle,
  Briefcase,
  LogoutCurve,
} from 'iconsax-react-native';

import {SCREENS, BOTTOM_TAB_SCREENS} from '../screens';
import {useBearAuth, useBearUserDetails} from '../data/slices';
import WrapperContainer from '../components/WrapperContainer/WrapperContainer';
import {useImage} from '../hooks';
import imagepath from '../constant/imagepath';
import fontFamily from '../styles/fontFamily';
import {useNavigation} from '@react-navigation/native';
import colors from '../styles/colors';
import {APP_COLOR} from '../theme/color';
import {CustomBtn} from '../components';
import CustomButtonScreen from '../components/CustomButton';
import commonStyles from '../styles/commonStyles';

// const Tab = createBottomTabNavigator();

interface ITabBarIcon {
  focused: boolean;
  color: string;
  size: number;
}

const TabBarIcon = {
  [SCREENS.HOME]: ({color, size}: ITabBarIcon) => (
    <Home2 color={color} size={size} />
  ),
  [SCREENS.TIME_SHEET]: ({color, size}: ITabBarIcon) => (
    <Note1 color={color} size={size} />
  ),
  [SCREENS.INTERNAL_JOBS]: ({color, size}: ITabBarIcon) => (
    <Briefcase color={color} size={size} />
  ),
  [SCREENS.PROFILE]: ({color, size}: ITabBarIcon) => (
    <ProfileCircle color={color} size={size} />
  ),
  [SCREENS.FEED]: ({color, size}: ITabBarIcon) => (
    <Image
      source={require('../assets/images/feed.png')}
      style={{tintColor: color, width: size + 2, height: size + 2}}
      resizeMode="cover"
    />
  ),
};

const BottomTab = () => {
  const navigation = useNavigation();

  const [shouldShowDrawer, setShouldShowDrawer] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const {logout} = useBearAuth();
  const translateX = useRef(new Animated.Value(0)).current;
  const translateX1 = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const currentUser = useBearUserDetails(state => state.currentUser);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const backAction = () => {
    // if (!shouldShowDrawer) return false;
    onPressProfile(true);
    return true;
  };
  const profileItemList = [
    // {
    //   id: '1',
    //   title: 'Profile',
    //   img: imagepath.user,
    //   screenName: SCREENS.PROFILE,
    // },
    {
      id: '2',
      title: 'Personal Info',
      img: imagepath.personalInfo,
      screenName: SCREENS.PERSONAL_INFO,
    },
    {
      id: '3',
      title: 'My Activity',
      img: imagepath.MyActivity,
      screenName: SCREENS.MY_ACTIVITY,
    },
    {
      id: '9',
      title: 'Policies',
      img: imagepath.policies,
      screenName: SCREENS.POLICIES,
    },
    // {
    //   id: '4',
    //   title: 'Approvals',
    //   img: imagepath.approval,
    //   screenName: SCREENS.LEAVE_APRROVALS,
    // },
    // {
    //   id: '5',
    //   title: 'Tickets',
    //   img: imagepath.tickets,
    //   screenName: SCREENS.TICKET,
    // },
    {
      id: '4',
      title: 'Approvals',
      img: imagepath.approval,
      screenName: SCREENS.LEAVE_APRROVALS,
    },
    {
      id: '5',
      title: 'Tickets',
      img: imagepath.tickets,
      screenName: SCREENS.TICKET,
    },
    {
      id: '6',
      title: 'Leaves',
      img: imagepath.calendar,
      screenName: SCREENS.LEAVE_MANAGEMENT,
    },
    // {
    //   id: '7',
    //   title: 'Resume Builder',
    //   img: require('../../assets/images/designtools.png'),
    //   //screenName: SCREENS.personalInfo,
    // },
    // {
    //   id: '8',
    //   title: 'Help',
    //   img: require('../../assets/images/help.png'),
    //   //screenName: SCREENS.personalInfo,
    // },
  ];
  const slideAnim = profileItemList.map(
    () => useRef(new Animated.Value(-300)).current,
  );
  const {updatedUrl} = useImage(
    currentUser?.profileImage,
    imagepath.defaultImage,
  );

  const onPressProfile = (tempValue = true) => {
    const moveToRightAnim = Animated.timing(translateX, {
      toValue: tempValue ? 0 : 220,
      duration: 300,
      useNativeDriver: true,
    });
    const moveToRightAnim1 = Animated.timing(translateX1, {
      toValue: tempValue ? 0 : 16,
      duration: 300,
      useNativeDriver: true,
    });
    const changeScaleAnim = Animated.timing(scale, {
      toValue: tempValue ? 1 : 0.6,
      duration: 300,
      useNativeDriver: true,
    });
    const animations = slideAnim.map((anim, index) =>
      Animated.spring(anim, {
        toValue: tempValue ? -300 : 0,
        // duration: 50,
        useNativeDriver: true,
        delay: index * 50,
      }),
    );
    animations.push(moveToRightAnim, moveToRightAnim1, changeScaleAnim);
    Animated.parallel(animations).start();
    setShouldShowDrawer(!tempValue);
  };

  const onPressProfileList = (screenName: string) => {
    onPressProfile(true);
    navigation.navigate(screenName);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <WrapperContainer
      containerStyle={{padding: 0}}
      backgroundColor={shouldShowDrawer ? '#0074b7' : 'white'}>
      <View style={{flex: 1, padding: 16, backgroundColor: '#0074b7'}}>
        <TouchableOpacity
          onPress={() => onPressProfile(true)}
          style={styles.flexRow}>
          <Image
            source={updatedUrl}
            defaultSource={imagepath.defaultImage}
            resizeMode="cover"
            style={styles.profileImage}
          />
          <Text style={styles.userName}>{currentUser?.fullName}</Text>
        </TouchableOpacity>
        {profileItemList.map((item, index) => (
          <Animated.View
            key={index}
            style={{
              transform: [{translateX: slideAnim[index]}], // Apply animated value
            }}>
            <TouchableOpacity
              onPress={() => onPressProfileList(item.screenName)}
              style={[styles.flexRow, {paddingTop: 24}]}>
              <Image style={styles.listItemImage} source={item.img} />
              <Text style={styles.listItemText}>{item.title}</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
        <View
          style={{
            flex: 1,
            margin: 16,
            position: 'absolute',
            bottom: 0,
          }}>
          <TouchableOpacity onPress={openModal}>
            <View style={styles.logOut}>
              <LogoutCurve size="20" color="white" />
              <Text style={[styles.logouttext, commonStyles.fontSize14Regular]}>
                Logouts
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <TouchableOpacity
            style={{flex: 1}}
            activeOpacity={1}
            onPress={closeModal}
          />
          <View
            style={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderRadius: 6,
              paddingBottom: 45,
              borderColor: APP_COLOR.cccolor,
            }}>
            <View style={styles.line} />
            <Text style={styles.popuptext}>
              Are you sure you want to logout ?
            </Text>
            <View style={styles.buttonsContainer}>
              <CustomButtonScreen
                label="Logout"
                onPress={logout}
                containerStyle={{flex: 1, marginRight: 16}}
              />
              <TouchableOpacity
                onPress={closeModal}
                style={styles.buttonCancel}>
                <Text style={styles.textCancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <Animated.View
        style={[
          styles.bottomTabConatiner,
          {
            borderRadius: shouldShowDrawer ? 12 : 0,
            transform: [{scale}, {translateX}],
          },
        ]}>
        <Animated.View
          style={[
            styles.bottomTabConatiner,
            {
              borderRadius: shouldShowDrawer ? 12 : 0,
              transform: [{translateX: translateX1}],
            },
          ]}>
          <Tab.Navigator
            initialRouteName={SCREENS.HOME}
            screenOptions={{
              tabBarActiveTintColor: '#0074B7',
              tabBarInactiveTintColor: 'black',
              headerShown: false,
            }}>
            {BOTTOM_TAB_SCREENS.map(item => (
              <Tab.Screen
                key={item.name}
                name={item.name}
                component={item.component}
                initialParams={{onPressProfile}}
                options={{
                  tabBarIcon: TabBarIcon[item.name],
                  tabBarLabel: ({focused, color}) => (
                    <Text
                      style={{
                        color: focused ? '#0074B7' : 'black',
                        fontFamily: 'Rubik',
                        fontWeight: '400',
                        fontSize: 10,
                      }}>
                      {item.name}
                    </Text>
                  ),
                }}
              />
            ))}
          </Tab.Navigator>
        </Animated.View>
      </Animated.View>
    </WrapperContainer>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  flexRow: {flexDirection: 'row', alignItems: 'center'},
  profileImage: {width: 45, height: 45, borderRadius: 45},
  userName: {
    fontFamily: fontFamily.medium,
    fontSize: 18,
    color: 'white',
    marginLeft: 12,
  },
  listItemImage: {tintColor: 'white', height: 18, width: 18},
  listItemText: {
    // paddingTop: 16,
    marginLeft: 12,
    color: 'white',
    fontFamily: fontFamily.normal,
    fontSize: 17,
  },
  bottomTabConatiner: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
    backgroundColor: '#0037D5',
    overflow: 'hidden',
  },
  logOut: {
    alignItems: 'center',
    // borderColor: 'white',
    // borderWidth: 2,
    // // padding: 8,
    // height: 48,
    // borderRadius: 8,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignSelf: 'center',
    marginVertical: 8,
    // width: '100%',
  },
  logouttext: {
    color: 'white',
    fontFamily: fontFamily.medium,
    marginHorizontal: 6,
    fontWeight: 'bold',
  },
  line: {
    width: 50,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 4,
  },

  buttonsContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  },

  buttonLogout: {
    backgroundColor: APP_COLOR.PrimaryColor,
    height: 48,
    // borderRadius: Platform.OS === 'ios' ? 8 : 8,
    // paddingTop: Platform.OS === 'ios' ? 17 : '',
    // width: 171,
    // height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: 16,
    borderRadius: 6,
    // width: InputWidth,
    // height: InputHeight,
    color: APP_COLOR.cards,
    // textAlign: 'center',
    // padding: 14,
    // textAlignVertical: 'center',
  },
  textLogout: {color: 'white'},
  buttonCancel: {
    borderColor: APP_COLOR.PrimaryColor,
    borderWidth: 1,
    height: 48,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    borderRadius: 6,
    // marginHorizontal: 16,
  },
  textCancel: {color: APP_COLOR.PrimaryColor, fontSize: 14, fontWeight: '500'},
  popuptext: {
    textAlign: 'center',
    marginHorizontal: 20,
    color: APP_COLOR.black,
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 20,
  },
});
