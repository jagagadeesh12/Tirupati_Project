import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../types/Colors';

const styles = StyleSheet.create({
  contentContainer: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'whitesmoke',
    borderRadius: 8,
    backgroundColor: '#FFFFF',
  },
  jobTitle: {
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  jobDescriptionHeader:{
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    bottom: 2,
  },
  jobDetailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: '',
    marginTop: 5,
  },
  jobDetails: {
    // font-family: Rubik;
    fontSize: 14,
    fontWeight: '300',
    color: '#0074B7',
  },
  description: {
    marginTop: 10,

    // height: 100,
  },
  qualificationStyle: {
    top: 4,
    fontFamily: 'Rubik',
    fontSize: 12,
    fontWeight: '400',
    color: '#454C52',
  },
  bottomView: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activeTill: {
    top: 4,
    fontFamily: 'Rubik',
    fontSize: 12,
    fontWeight: '300',
    color: '#454C52',
  },
  refer: {
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '400',
    color: '#0074B7',
  },
  referImage: {
    width: 16,
    height: 16,
    top: 1.5,
  },
  expandButtonBottom: {
    alignItems: 'center',
    marginTop: 8,
  },
  MonthContainer: {
    height: 4,
    marginLeft: 4,
    marginRight: 4,
    width: 4,
    borderRadius: 40,
    backgroundColor: APP_COLOR.PrimaryColor,
  },
});

export default styles;
