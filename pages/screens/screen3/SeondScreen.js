import { Text, View, TouchableOpacity } from "react-native";
import { SecondScreenStyle } from "./SecondScreenStyle";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient"
import ProgressBar from "../../components/ProgressBar"
import Spinner from "../../components/Spinner";
import * as API from "../../../api/API"
import axios from "axios";



const SecondScreen = ({ route }) => {

    const { params: { categoryId } } = route;

    const [fullItems, setfullItems] = useState([]);
    const [answerList, setAnswerList] = useState([]);
    const [isLoading, setLoading] = useState(true);


    const fetchInitialData = async () => {
        const data = await API.get(`/categories/${categoryId}/questions?page=2`);
        setLoading(false);
        setfullItems(data);
        setAnswerList(data.answers);
    }


    useEffect(() => {
        axios.get(`http://13.124.233.9:8080/categories/${categoryId}/questions?page=2`)
            .then(({ data }) => {
                console.log(data);
                setfullItems(data);
                setAnswerList(data.answers);
                setLoading(false);
            })
            .catch((err) => console.log(err))

        console.log(categoryId);

    }, []);

    const handleClick = (isCorrect) => {
        if (isCorrect) {
            alert("정답");
            return;
        }
        else {
            alert("오답");
            return;
        }
    }



    if (isLoading) {
        return (<Spinner />)
    }

    return (
        <LinearGradient colors={['#F39912', '#FFCC00', '#FFCC00']} style={SecondScreenStyle.container}>
            <Text style={SecondScreenStyle.title}>{fullItems.content}</Text>
            <View style={SecondScreenStyle.gridBox}>

            </View>

            <View style={SecondScreenStyle.answerBox}>
                {answerList.slice(0, 2).map(({ content, isCorrect }, idx) =>
                    <TouchableOpacity style={SecondScreenStyle.answerBtn} key={`${content}-${idx}`} onPress={() => handleClick(isCorrect)}
                    ><Text style={SecondScreenStyle.answerBtn_text}>{content}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={SecondScreenStyle.answerBox}>
                {answerList.slice(2, 4).map(({ content, isCorrect }, idx) =>
                    <TouchableOpacity style={SecondScreenStyle.answerBtn} key={`${content}-${idx}`} onPress={() => handleClick(isCorrect)}
                    ><Text style={SecondScreenStyle.answerBtn_text}>{content}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <ProgressBar curNum={1} backGroundProp={'#F39C12'} />
        </LinearGradient>
    )
}

export default SecondScreen;