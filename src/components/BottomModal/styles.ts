import { Dimensions, Platform, StyleSheet } from 'react-native';
import { APP_COLOR } from '../../theme/color';


const styles = StyleSheet.create({
    line: {
        width: 50,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 4,
    },
    buttonsflex: {
        backgroundColor: APP_COLOR.cards,
        flex: 0,
        paddingBottom:50,
        width: '100%',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderWidth: 1,
        borderColor: 'lightgray',
        paddingHorizontal: 20,
    },
    buttons: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 20,
    },
    SavePostStyles: {
        flexDirection: 'row',
        alignItems:'center',
        padding: 10,
    },
    Save: {
        fontSize: 16,
        fontWeight: '400',
        color: '#202124',
    },
    SavePost: {
        color: '#202124',
        fontWeight: '300',
        fontSize: 10,
        marginHorizontal: 5,
    },
    ContentStyles: {
        // bottom: 6,
        marginHorizontal: 10,
    },
});

export default styles;