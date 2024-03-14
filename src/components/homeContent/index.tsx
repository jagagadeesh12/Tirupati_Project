import {View, FlatList, ScrollView} from 'react-native';
import React from 'react';
import TimingCards from '../timingCards';
import ContentHeader from './contentHeader';
import HolidayCards from './holidayCards';
import CelebrationCard from './celebrationCard';

const USER_TIMINGS = [
  {
    id: 1,
    primaryText: '9:48AM',
    secondaryText: 'Last Checked In wed 30th Aug',
    Icon: 'ImportSquare',
  },
  {
    id: 2,
    primaryText: '6:48AM',
    secondaryText: 'Last Checked Out wed 30th Aug',
    Icon: 'ExportSquare',
  },
  {
    id: 3,
    primaryText: '98',
    secondaryText: 'onTime',
    Icon: 'Clock',
  },
  {
    id: 4,
    primaryText: '28',
    secondaryText: 'Last Checked-In wed 30th Aug',
    Icon: 'Calendar',
  },
];

const HOLIDAYS = [
  {
    img: 'https://im.indiatimes.in/content/2023/Jul/ganesh-chaturthi-2023-date5_64bfd09399947.jpg?w=820&h=540&cc=1',
    date: '18th September',
    info: 'Ganesha Chaturthi',
  },
  {
    img: 'https://images.yourstory.com/cs/2/11718bd02d6d11e9aa979329348d4c3e/Gandhi-Jayanti-1601566817209.png?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces',
    date: '2nd October',
    info: 'Gandhi Jayanti',
  },
  {
    img: 'https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1608795513.jpg?im=FeatureCrop,size=(826,465)',
    date: '25 December',
    info: 'Christmas',
  },
  {
    img: 'https://im.indiatimes.in/content/2023/Jul/ganesh-chaturthi-2023-date5_64bfd09399947.jpg?w=820&h=540&cc=1',
    date: '2nd October',
    info: 'Ganesha Chaturthi',
  },
];
const CELEBRATION_DATA = [
  {
    img: 'https://im.indiatimes.in/content/2023/Jul/ganesh-chaturthi-2023-date5_64bfd09399947.jpg?w=820&h=540&cc=1',
    date: '18th Sep',
    name: 'Srija',
    info: 'Birthday',
  },
  {
    img: 'https://images.yourstory.com/cs/2/11718bd02d6d11e9aa979329348d4c3e/Gandhi-Jayanti-1601566817209.png?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces',
    date: '2nd Oct',
    name: 'Sneha',
    info: '2nd Anniversary',
  },
  {
    img: 'https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1608795513.jpg?im=FeatureCrop,size=(826,465)',
    date: '25 Dec',
    name: 'Ravi',
    info: 'Project Handover',
  },
  {
    img: 'https://im.indiatimes.in/content/2023/Jul/ganesh-chaturthi-2023-date5_64bfd09399947.jpg?w=820&h=540&cc=1',
    name: 'Praveen',
    date: '2nd Oct',
    info: 'Ganesha Chaturthi',
  },
];

const HomeContent = () => {
  return (
    <ScrollView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: '#F5F5F5',
        flex: 1,
        marginTop: 20,
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        padding: 20,
      }}>
      {/* <SwipeCheck /> */}
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          flexDirection: 'row',
          // flexWrap: 'wrap',
          paddingBottom: 0,
        }}
        data={USER_TIMINGS}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <TimingCards key={item.id} {...item} index={index} />
        )}
        numColumns={2}
      />
      <View style={{marginTop: 8}}>
        <ContentHeader
          title="Upcoming Holidays"
          onPress={() => {
            // console.log('i');
          }}
        />
        <FlatList
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingBottom: 8,
          }}
          data={HOLIDAYS}
          keyExtractor={item => item.info.toString()}
          renderItem={({item}) => <HolidayCards key={item.date} {...item} />}
          horizontal
        />
      </View>
      <View style={{marginTop: 8,}}>
        <ContentHeader
          title="Birthdays & Anniversaries"
          onPress={() => {
            // console.log('i');
          }}
        />
        <FlatList
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingBottom: 0,
          }}
          data={CELEBRATION_DATA}
          keyExtractor={item => item.info.toString()}
          renderItem={({item}) => <CelebrationCard key={item.date} {...item} />}
          horizontal
        />
      </View>
      <View style={{padding: 20}} />
    </ScrollView>
  );
};

export default HomeContent;
