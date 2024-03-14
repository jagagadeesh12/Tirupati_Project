import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CheckBox from '../CheckBox'
import styles from './style';

interface Item {
  id: string;
  title: string;

}

interface Props {
  data:ArrayLike<any>| null | undefined;
  selectedItems: string[];
  setSelectedItems: (itemId: string) => void;
  
}

const ItemList: React.FC<Props> = ({data, selectedItems, setSelectedItems}) => {
  const renderItem = ({item}: {item: Item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemContentleft}>
      <Text style={styles.itemText}>{item.title}</Text>
      </View>
      <View style={styles.itemContentright}>
        <CheckBox
          isChecked={selectedItems.includes(item.id)}
          onChange={() => setSelectedItems(item.id)}
        />
        
      </View>
      
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};
export default ItemList;
