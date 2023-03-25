import {
    StyleSheet,
} from 'react-native';


export const SecondScreenStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
    },

    title: {
        fontSize: 24,
        marginTop: 40,
        marginBottom: 30,
    },

    gridBox: {
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        height: 300,
        backgroundColor: '#D9D9D9',
        marginBottom: 40,
    },

    itemBox: {
        display: 'flex',
        width: 300,
        height: 50,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
    },


    eachItem: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
    },

    answerBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        height: 62,
        marginBottom: 18,
    },

    answerBtn: {
        backgroundColor: '#FFFFFF',
        width: 165,
        height: 62,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
    },

    answerBtn_text: {
        color: '#F38B12',
        height: 20,
        fontWeight: 'bold',

    }


});