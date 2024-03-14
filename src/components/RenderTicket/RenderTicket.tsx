import {View, Text, Image, ImageProps, TouchableOpacity} from 'react-native';
import React from 'react';
import {APP_COLOR} from '../../theme/color';
import imagepath from '../../constant/imagepath';
import {Layer, Stacks} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../screens';

const RenderTicket = ({
  item,
  isManager = false,
}: {
  isManager?: boolean;
  item: {
    image: ImageProps;
    name: string;
    status: string;
    asset: string;
    desc: string;
    assignedPersonNmae: string;
    assignedPersonImage: ImageProps;
  };
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(SCREENS.TICKET_STATUS, {item, isManager})
      }
      style={{
        // borderColor: 'whitesmoke',
        backgroundColor: 'white',
        // borderWidth: 1,
        padding: 12,
        marginTop: 12,
        borderRadius: 6,
        shadowColor: "#F5F5F5",
        shadowOffset: {
          width: 0,
          height: 3,

        },
        shadowOpacity: 0.18,
        shadowRadius: 6,
        elevation: 5,
      }}>
      {isManager && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={item.image}
            style={{width: 40, height: 40, borderRadius: 20}}
          />
          <Text style={{flex: 1, marginLeft: 12, color: 'black'}}>
            {item.name}
          </Text>
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 1,
              backgroundColor:
                item.status == 'Open'
                  ? '#53B483'
                  : item.status == 'Closed'
                  ? '#B9B9B9'
                  : item.status == 'Resolved'
                  ? '#0074B7'
                  : '#FBBC55',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
            }}>
            <Text style={{color: 'white'}}>{item.status}</Text>
          </View>
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 12,
          marginBottom: 6,
        }}>
        <Layer color="grey" size={20} />
        <Text style={{color: 'grey', marginLeft: 8}}>{item.asset}</Text>
      </View>
      <Text style={{color: 'black'}}>{item.desc}</Text>
      <View style={{justifyContent: 'center', marginTop: 12}}>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: '#F5F5F5',
            position: 'absolute',
            borderRadius: 25,
            left: -30,
          }}
        />
        <View
          style={{
            borderColor: '#6D6D6D',
            borderWidth: 0.5,
            borderStyle: 'dashed',
          }}
        />
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: '#F5F5F5',
            position: 'absolute',
            borderRadius: 25,
            right: -30,
          }}
        />
      </View>
      <Text style={{color: 'grey', marginTop: 12, marginBottom: 6}}>
        Assigned to
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          //   justifyContent: 'space-between',
        }}>
        <Image
          source={item.assignedPersonImage}
          style={{width: 30, height: 30, borderRadius: 15}}
        />
        <Text style={{flex: 1, marginLeft: 12, color: 'black'}}>
          {item.assignedPersonNmae}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderTicket;
