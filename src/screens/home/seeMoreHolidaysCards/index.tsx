import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import Viewofcards from './Viewofcards';
import {HOLIDAYSCARDLIST} from '../../../types/Colors';
const HolidaysData = [
  {
    id: '1',
    festivalname: 'Makar Sankranti',
    startDate: 'Mon, Jan 16 2023',
    titleTournament:
      'Makar Sankranti: Hindu festival on January marks suns shift from Sagittarius to Capricorn, signifying change.',
    imageSource: require('../assets/images/sankranti.png'),
  },

  {
    id: '2',
    festivalname: 'Republic Day',
    startDate: 'Thu, Feb 26 2023',
    titleTournament:
      'Republic Day: Indias Constitution came into effect on Jan 26, 1950 ending British rule, marking nationhood.',
    imageSource: require('../assets/images/republicday.png'),
  },

  {
    id: '3',
    festivalname: 'Gudi Padwa',
    startDate: 'Wed, Mar 22 2023',
    titleTournament:
      'Gudi Padwa: Spring festival, New Year for Hindus in Maharashtra, Goa, Madhya Pradesh, marks Chaitras beginning..',
    imageSource: require('../assets/images/gudipadwa.png'),
  },

  {
    id: '4',
    festivalname: 'Ramzan',
    startDate: 'Fri, Apr 21 2023',
    titleTournament:
      'Ramadan: Ninth Islamic month, global Muslim fasting, prayer, reflection, and community observance.',
    imageSource: require('../assets/images/ramzan.jpg'),
  },

  {
    id: '5',
    festivalname: 'Telangana State Formation Day',
    startDate: 'Fri, Jun 02 2023',
    titleTournament:
      'Telangana Day: State holiday in Telangana, celebrating its formation on June, annually since 2014.',
    imageSource: require('../assets/images/stateformation.png'),
  },
  {
    id: '6',
    festivalname: 'Independence Day',
    startDate: 'Tue, Aug 15 2023',
    titleTournament:
      'Independence Day: Indias public holiday, marks freedom from the United Kingdom in 1947..',
    imageSource: require('../assets/images/independenceday.png'),
  },
  {
    id: '7',
    festivalname: 'Ganesh Chaturthi',
    startDate: 'Mon, Jan 16 2023',
    titleTournament:
      'Ganesh Chaturthi: Hindu festival honors Ganesha with clay murtis at homes and elaborate pandals, celebrating devotion..',
    imageSource: require('../assets/images/ganesh.png'),
  },
  {
    id: '8',
    festivalname: 'Gandhi Jayanti',
    startDate: 'Mon, Oct 02 2023',
    titleTournament:
      'Gandhi Jayanti: Celebrated on October in India, marking Mahatma Gandhis birthday, a national holiday..',
    imageSource: require('../assets/images/gandhijayanthi.png'),
  },
  {
    id: '9',
    festivalname: 'Dussehra',
    startDate: 'Tue, Oct 24 2023',
    titleTournament:
      'Dussehra: Hindu festival concludes Navaratri, observed on 10th Ashvin day,celebrating triumph of good over evil.',
    imageSource: require('../assets/images/dushhera.png'),
  },
  {
    id: '10',
    festivalname: 'Kannada Rajayotsava',
    startDate: 'Wed, Nov 01 2024',
    titleTournament:
      'Karnataka Rajyotsava: State holiday on Nov , marks the merging of Kannada speaking regions into Karnataka in 1956.',
    imageSource: require('../assets/images/kannada.png'),
  },
  {
    id: '11',
    festivalname: 'Diwali',
    startDate: 'Tue, Nov 01 2024',
    titleTournament:
      'Diwali: Hindu festival of lights, celebrated in India, symbolizing victory of light, good over evil, knowledge over ignorance.',
    imageSource: require('../assets/images/diwali.png'),
  },
  {
    id: '12',
    festivalname: 'Christmas',
    startDate: 'Mon, Oct 02 2023',
    titleTournament:
      'Christmas: Celebrated worldwide on December, marks the birth of Jesus Christ, a significant religious and cultural event.',
    imageSource: require('../assets/images/christmas.png'),
  },
];

const HolidaySscreen = () => {
  const [islist, setisList] = useState(true);
  return (
    <View>
      <Listofscreen setisList={setisList} />
      {islist ? (
        <FlatList
          data={HolidaysData}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <Viewofcards
              titleTournament={item.titleTournament}
              startDate={item.startDate}
              festivalname={item.festivalname}
              imageSource={item.imageSource}
              backgroundColor={
                HOLIDAYSCARDLIST[index % HOLIDAYSCARDLIST.length]
              }
            />
          )}
        />
      ) : (
        <View>
          <Text>calender</Text>
        </View>
      )}
    </View>
  );
};

export default HolidaySscreen;
