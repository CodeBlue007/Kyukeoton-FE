import { Text, View, TouchableOpacity } from "react-native";
import { Screen3Style } from "./Screen3Style";
import { useState, useEffect } from "react";


const Screen3 = () => {
    const [productInfo, setProductInfo] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [answerList, setAnswerList] = useState([]);


    const findSum = () => {
        return productInfo.reduce((acc, cur) => acc += (cur.number * cur.price), 0).toLocaleString('ko-kr');
    }

    useEffect(() => {
        const temp = [{
            name: '연필',
            number: 232,
            price: 12341,
        }, {
            name: '지우개',
            number: 232,
            price: 12341,
        }, {
            name: '크래파스',
            number: 232,
            price: 12341,
        }, {
            name: '빚',
            number: 232,
            price: 12341,
        }]
        setProductInfo(temp);
        setLoading(false);
        setAnswerList(['보기1', '보기2', '보기3', '보기4']);

    }, []);


    if (isLoading) return <Text>로딩중</Text>

    return (<View style={Screen3Style.container}>
        <Text style={Screen3Style.title}>빈칸에 들어갈 가격은 얼마일까요?</Text>
        <View style={Screen3Style.content}>
            <Text>영수증</Text>
            <Text>----------------------</Text>
            <View style={Screen3Style.contentBox}>
                {Object.keys(productInfo[0]).map((val, idx) => <Text style={Screen3Style.contentText} key={`${val}-${idx}`}>{val}</Text>)}
            </View>
            {productInfo.map(({ name, number, price }, idx) => (
                <View style={Screen3Style.contentBox}>
                    <Text style={Screen3Style.contentText} key={`${name}-${idx}`}>{name}</Text>
                    <Text style={Screen3Style.contentText} key={`${number}-${idx}`}>{number}</Text>
                    <Text style={Screen3Style.contentText} key={`${price}-${idx}`}>{price}</Text>
                </View>
            ))}
            <Text>-----------------------</Text>
            <View style={Screen3Style.contentBox}>
                <Text style={Screen3Style.contentText} key={"총금액"}>총금액</Text>
                <Text style={Screen3Style.contentText} key={"총계산금액"}>{findSum()}</Text>
            </View>
        </View>

        <View style={Screen3Style.answerBox}>
            {answerList.slice(0, 2).map((val, idx) =>
                <TouchableOpacity style={Screen3Style.answerBtn} key={`${val}-${idx}`} onPress={() => alert("hi")}
                ><Text style={Screen3Style.answerBtn_text}>{val}</Text>
                </TouchableOpacity>
            )}
        </View>
        <View style={Screen3Style.answerBox}>
            {answerList.slice(2, 4).map((val, idx) =>
                <TouchableOpacity style={Screen3Style.answerBtn} key={`${val}-${idx}`} onPress={() => alert("hi")}
                ><Text style={Screen3Style.answerBtn_text}>{val}</Text>
                </TouchableOpacity>
            )}

        </View>
    </View >)



}

export default Screen3;