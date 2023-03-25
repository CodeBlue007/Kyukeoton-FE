import { Text, View, TouchableOpacity } from "react-native";
import { SecondScreenStyle } from "./SecondScreenStyle";
import { useEffect, useState } from "react";



const SecondScreen = () => {

    const [iconInfo, setIconInfo] = useState([]);
    const [answerList, setAnswerList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const makeData = () => {
        const IconList = [];
        for (let i = 1; i <= 36; i++) {
            IconList.push("✔");
        }
        return [...IconList];
    }

    useEffect(() => {
        setIconInfo(makeData());
        setAnswerList(['보기1', '보기2', '보기3', '보기4']);
        setLoading(false);

    }, [])

    if (isLoading) return <Text>로딩중</Text>


    return (
        <View style={SecondScreenStyle.container}>
            <Text style={SecondScreenStyle.title}>✔가 총 몇개일까요?</Text>
            <View style={SecondScreenStyle.gridBox}>
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
                {answerList.slice(0, 2).map((val, idx) =>
                    <TouchableOpacity style={SecondScreenStyle.answerBtn} key={`${val}-${idx}`} onPress={() => alert("hi")}
                    ><Text style={SecondScreenStyle.answerBtn_text}>{val}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={SecondScreenStyle.answerBox}>
                {answerList.slice(2, 4).map((val, idx) =>
                    <TouchableOpacity style={SecondScreenStyle.answerBtn} key={`${val}-${idx}`} onPress={() => alert("hi")}
                    ><Text style={SecondScreenStyle.answerBtn_text}>{val}</Text>
                    </TouchableOpacity>
                )}

            </View>
        </View >
    )
}

export default SecondScreen;