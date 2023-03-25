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
        backgroundColor: '#0091EA',
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
        height: 400,
        marginBottom: 12,
        backgroundColor: '#D9D9D9',
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
        marginTop: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
        height: 100,
    },

    answerBtn: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 160,
        height: 60,
        color: '#0061C1',



    }


});