import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    itemContainer: {
      //backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 6,
      marginHorizontal: 1,
    },
    itemContentleft: {
      flexDirection: 'row',
      marginVertical:5,
    },
    itemContentright: {
      flexDirection: 'row',
      marginRight:15
    },
    itemText: {
      marginLeft: 10,
      fontSize: 14,
    },
    itemPrice: {
      fontSize: 12,
    },
    separator: {
      height: 1,
      backgroundColor: 'lightgray',
    },
  });

  export default styles;
