import { Text, View, Button } from "react-native";
import { SecondScreenStyle } from "./SecondScreenStyle";
import { useEffect, useState } from "react";



const SecondScreen = () => {

    const [iconInfo, setIconInfo] = useState([]);
    const [answerList, setAnswerList] = useState([]);

    const makeData = () => {
        const IconList = [];
        for (let i = 1; i <= 36; i++) {
            IconList.push("✔");
        }
        return [...IconList];
    }

    useEffect(() => {
        setIconInfo(makeData());
        setAnswerList(['보기1', '보기2', '보기3', '보기4'])

    }, [])


    return (
        <View style={SecondScreenStyle.container}>
            <Text style={SecondScreenStyle.title}>✔가 총 몇개일까요?</Text>
            <View style={SecondScreenStyle.fullBox}>
                <View style={SecondScreenStyle.itemBox}>
                    {iconInfo.slice(0, 6).map((val, idx) => <View style={SecondScreenStyle.eachItem} key={`${val}-${idx}`}><Text>{val}</Text></View>)}
                </View>
                <View style={SecondScreenStyle.itemBox}>
                    {iconInfo.slice(6, 12).map((val, idx) => <View style={SecondScreenStyle.eachItem} key={`${val}-${idx}`}><Text>{val}</Text></View>)}
                </View>
                <View style={SecondScreenStyle.itemBox}>
                    {iconInfo.slice(12, 18).map((val, idx) => <View style={SecondScreenStyle.eachItem} key={`${val}-${idx}`}><Text>{val}</Text></View>)}
                </View>
                <View style={SecondScreenStyle.itemBox}>
                    {iconInfo.slice(18, 24).map((val, idx) => <View style={SecondScreenStyle.eachItem} key={`${val}-${idx}`}><Text>{val}</Text></View>)}
                </View>
                <View style={SecondScreenStyle.itemBox}>
                    {iconInfo.slice(24, 30).map((val, idx) => <View style={SecondScreenStyle.eachItem} key={`${val}-${idx}`}><Text>{val}</Text></View>)}
                </View>
                <View style={SecondScreenStyle.itemBox}>
                    {iconInfo.slice(30, 36).map((val, idx) => <View style={SecondScreenStyle.eachItem} key={`${val}-${idx}`}><Text>{val}</Text></View>)}
                </View>
            </View>

            <View style={SecondScreenStyle.answerBox}>
                {answerList.slice(0, 2).map((val) =>
                    <Button style={SecondScreenStyle.answerBtn} title={val} onPress={() => console.log('Button with adjusted color pressed')} />
                )}
            </View>
        </View>
    )
}

export default SecondScreen;