import React, {useEffect, useState} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {UPDATE_USER_SKILLS} from '../graphql/mutations/skills';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {GET_SKILLS} from '../graphql/queries/skills';
import {SCREENS} from '../screens';

const useSkills = () => {
  const [Skills, setSkills] = useState<any>([]);
  const [isEdit, setIsEdit] = useState(false);
  const navigation = useNavigation();
  var tech: any;
  var addtech: any;
  const [SkillToUpdate, setSkillToUpdate] = useState<any>([]);
  const {data: technology, loading: skillsLoading} = useQuery(GET_SKILLS, {
    onCompleted: data => {
      if (data.getUserById.skills) {
        setSkills(data.getUserById.skills);
      }
    },
    onError(error) {
      console.log(error, 'this is data error');
    },
  });
  const handleDelete = text => {
    const newSkillList = Skills.filter(item => item.technology !== text);
    setSkills(newSkillList);
  };
  const saveSkills = () => {
    setSkillToUpdate([]);
    Skills.forEach(element => {
      tech = {
        technology: element.technology,
        expertise: 'EXPERT',
        skillExperience: 2.0,
        isPrimary: true,
        stack: 'BACKEND',
      };

      SkillToUpdate.push(tech);
    });
    setIsEdit(false);
    updateSkills({
      variables: {
        inp: {
          skills: SkillToUpdate,
        },
      },
      // onCompleted(data, clientOptions) {
      //   setIsEdit(false)
      // },
    });
  };
  const addSkills = (text: string) => {
    setSkillToUpdate([]);
    if (
      (Skills?.length === 0 && text !== '') ||
      (text !== '' &&
        !Skills?.some(
          (n: {technology: string}) =>
            n.technology.toLowerCase() === text.toLowerCase(),
        ))
    ) {
      addtech = {
        technology: text,
        expertise: 'EXPERT',
        skillExperience: 2.0,
        isPrimary: true,
        stack: 'BACKEND',
      };
      SkillToUpdate.push(addtech);
    } else {
      if (text === '') {
        Toast.show({
          type: 'error',
          text1: 'Skills not entered',
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Skills Already Exist',
        });
      }
      return;
    }
    if (Skills?.length) {
      Skills.forEach(element => {
        tech = {
          technology: element.technology,
          expertise: 'EXPERT',
          skillExperience: 2.0,
          isPrimary: true,
          stack: 'BACKEND',
        };

        SkillToUpdate.push(tech);
      });
    }
    updateSkills({
      variables: {
        inp: {
          skills: SkillToUpdate,
        },
      },
      onCompleted(data, clientOptions) {
        navigation.goBack();
      },
    });
    Toast.show({
      type: 'success',
      text1: 'Your skills has been updated successfully',
    });
    // navigation.navigate(SCREENS.ADD_SKILLS);
  };
  const [updateSkills, {data, loading, error}] = useMutation(
    UPDATE_USER_SKILLS,
    {
      onCompleted: data => {
        setSkills(data.updateUser.skills);
        Toast.show({
          type: 'success',
          text1: 'Your skills has been updated successfully',
        });
      },
      onError(error) {
        console.log(error, 'this is data error');
      },
      refetchQueries: [GET_SKILLS, 'getUserById'],
    },
  );
  useFocusEffect(
    React.useCallback(() => {
      if (technology) {
        setSkills(technology.getUserById.skills);
      }
    }, [technology]),
  );
  return {
    Skills,
    handleDelete,
    saveSkills,
    addSkills,
    isEdit,
    setIsEdit,
    skillsLoading,
  };
};
export default useSkills;
