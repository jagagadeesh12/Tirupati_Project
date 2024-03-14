import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../theme/color';

const styles = StyleSheet.create({
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    padding: 16,
    marginLeft: 10,
    marginTop: 30,
  },

  userName: {
    flexDirection: 'row',
    fontFamily: 'Rubik',
    color: APP_COLOR.text,
    fontWeight: '500',
    fontSize: 16,
    alignItems: 'center',
    marginLeft: 80,
    marginTop: -50,
  },

  timesAgo:{
    flexDirection: 'row',
    fontFamily: 'Rubik',
    color: APP_COLOR.text,
    fontWeight: '400',
    fontSize: 10,
    alignItems: 'center',
    marginLeft: 80,
    marginTop: 0,
  },

  entertext: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  sharedImg:{
    marginTop:10,
    marginLeft:16,
    marginRight:16,
    height:150,
    //backgroundColor:'red',
  }

});

export default styles;
