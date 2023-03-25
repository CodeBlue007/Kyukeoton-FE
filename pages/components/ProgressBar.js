import { StyleSheet, View } from "react-native";

const ProgressBarStyle = (curNum, backGroundProp) => StyleSheet.create({
    container: {
        marginTop: 30,
        width: 350,
        backgroundColor: '#FFFFFF',
        height: 8,
        borderTopRightRadius: 5.5,
        borderTopLeftRadius: 5.5,
        borderBottomRightRadius: 5.5,
        borderBottomLeftRadius: 5.5,
    },
    content: {
        backgroundColor: backGroundProp,
        width: 87.5 * curNum,
        height: 8,
        borderTopRightRadius: 5.5,
        borderTopLeftRadius: 5.5,
        borderBottomRightRadius: 5.5,
        borderBottomLeftRadius: 5.5,
    },
});

const ProgressBar = ({ curNum, backGroundProp }) => {

    return (<View style={ProgressBarStyle(curNum, backGroundProp).container}>
        <View style={ProgressBarStyle(curNum, backGroundProp).content}>
        </View>
    </View>)
}

export default ProgressBar;

