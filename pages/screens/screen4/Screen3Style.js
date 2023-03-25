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
        color: '#FFFFFF',

    },
    ImgBox: {
        backgroundColor: "#FFFFFF",
        width: 300,
        height: 300,
        marginBottom: 25,
    },

    subTitle: {
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderBottomColor: '#3C3C3C',
        height: 30,
        fontSize: 18,
        fontWeight: "bold",
    },

    content: {
        width: 350,
        height: 350,
        marginBottom: 40,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    line: {
        fontWeight: 'bold',
        marginTop: 20,
    },

    contentBox: {
        display: "flex",
        flexDirection: "row",
        marginTop: 15,
    },

    contentLabel: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold'
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
