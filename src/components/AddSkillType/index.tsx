import React, {useState} from 'react';
import {View, TextInput, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';

const AddSkillType = ({navigation}: any) => {
  const [query, setQuery] = useState('');
  const [skills, setSkills] = useState([
    'Adaptive Security',
    'Agile Methodology',
    'Algorithms',
    'Amazon Web Services',
    'Analytics',
    'Application Development',
    'Architecture Design',
    'Artificial Intelligence',
    'Asset Management',
    'Augmented Reality',
    'Authentication',
    'Automation',
    'API Integration',
    'Azure',
    'Architecture Design',
    'Artificial Intelligence',
  ]);

  const findSkills = (query: string) => {
    if (query === '') {
      return [];
    }

    const regex = new RegExp(`${query.trim()}`, 'i');
    return skills.filter(skill => skill.search(regex) >= 0);
  };

  const renderSkillItem = ({item}: {item: string}) => (
    <TouchableOpacity onPress={() => handleSkillSelection(item)}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  const handleSkillSelection = (selectedSkill: string) => {
    console.log('Selected Skill:', selectedSkill);
    setQuery('');
  };

  return (
    <View >
      <BackHeader navigation={navigation} title={'Skills'} />
      <TextInput
        placeholder="Skill (ex: UI UX Design)"
        style={styles.inputField}
        onChangeText={text => setQuery(text)}
        value={query}
      />
      {query !== '' && (
        <FlatList
          data={findSkills(query)}
          renderItem={renderSkillItem}
          keyExtractor={item => item}
        />
      )}
    </View>
  );
};

export default AddSkillType;
