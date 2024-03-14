import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import BackHeader from '../../components/backHeader';
import styles from './styles';
import {ItemSeparator, JobsCard} from '../../components';
import {INTERNALJOBS} from '../../data/service/user';
import {useQuery} from '@apollo/client';
import WrapperContainer from '../../components/WrapperContainer/WrapperContainer';

const InternalJobs = ({navigation}: any) => {
  const [selectedView, setSelectedView] = useState(null);
  const [interJobData, setInternalJobData] = useState([]);
  const {
    loading: loading,
    error: error,
    data: getAllJobs,
  } = useQuery(INTERNALJOBS, {
    onCompleted(data) {
      setInternalJobData(data?.getAllJobs);
      // console.log(data, 'this is data ');
    },
    onError(error) {
      console.log(error, 'this is data error');
    },
  });

  const handleViewClick = (viewName: any) => {
    setSelectedView(viewName);
  };

  const getViewStyle = (viewName: any) => {
    return {
      ...styles.text,
      color: selectedView === viewName ? '#4682B4' : 'rgba(0, 0, 0, 0.1)', // Darker color for selected, lighter for others
    };
  };

  if (loading && interJobData.length == 0) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <ActivityIndicator size="small" color="#0074B7" />
      </View>
    );
  }
  return (
    <WrapperContainer containerStyle={{padding: 0}}>
      <BackHeader
        containerStyle={{paddingHorizontal: 16, paddingTop: 16}}
        title={'Jobs'}
        navigation={navigation}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={getViewStyle('Engineering')}
          onPress={() => handleViewClick('Engineering')}>
          <Text style={styles.text}>Engineering</Text>
        </TouchableOpacity>
      </View>
      <ItemSeparator />
      <FlatList
        data={interJobData}
        contentContainerStyle={{padding: 16}}
        ItemSeparatorComponent={() => <View style={{padding: 4}} />}
        renderItem={({item: job, index}) => <JobsCard item={job} />}
      />
    </WrapperContainer>
  );
};

export default InternalJobs;
