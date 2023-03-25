import {
    StyleSheet,
} from 'react-native';


export const Screen3Style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: '#F39C12',
    },

    title: {
        fontSize: 24,
        marginTop: 40,
        marginBottom: 30,
    },

    content: {
        width: 339,
        height: 350,
        marginBottom: 40,
        backgroundColor: '#D9D9D9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    contentBox: {
        display: "flex",
        flexDirection: "row",
        marginTop: 15,
    },

    contentText: {
        flex: 1,
        textAlign: 'center',
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
        fontSize: 20,
    }

});
