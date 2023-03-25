import { Text, View, TouchableOpacity, Image } from "react-native";
import { SecondScreenStyle } from "./SecondScreenStyle";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient"
import ProgressBar from "../../components/ProgressBar"
import Spinner from "../../components/Spinner";
import * as API from "../../../api/API"
import Modall from "../../components/Modall"
import axios from "axios";
import { DurationTime, DurationCleanUp } from "../../../atom";
import { useRecoilState } from "recoil";



const SecondScreen4 = ({ navigation }) => {


    const [fullItems, setfullItems] = useState([]);
    const [answerList, setAnswerList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [solution, setSolution] = useState('');
    const [durationTime, setDurationTime] = useRecoilState(DurationTime);
    const [durationCleanup, setDurationCleanup] = useRecoilState(DurationCleanUp);


    const fetchInitialData = async () => {
        const data = await API.get(`/categories/5/questions?page=2`);
        setLoading(false);
        setfullItems(data);
        setAnswerList(data.answers);
    }

    const compare = (isCorrect, name) => {
        if (isCorrect !== correct) {
            setCorrect(true)
        }
        setIsModalVisible(true);
    }


    useEffect(() => {
        axios.get(`http://13.124.233.9:8080/categories/5/questions?page=3`)
            .then(({ data }) => {
                console.log(data);
                setfullItems(data);
                setAnswerList(data.answers);
                setLoading(false);
                const arr = data.answers
                arr.map((item) => {
                    if (item.isCorrect === true) {
                        setSolution(item.content)
                    }
                })
            })
            .catch((err) => console.log(err))

        return durationCleanup.cleanUpFn();
    }, []);


    if (isLoading) {
        return (<Spinner />)
    }

    return (
        <LinearGradient colors={['#F39912', '#FFCC00', '#FFCC00']} style={SecondScreenStyle.container}>
            <Text style={SecondScreenStyle.title}>{fullItems.content}</Text>
            <Image style={SecondScreenStyle.ImgBox} source={{ uri: fullItems.questionImages[0].url, }}
            ></Image>
            <View style={SecondScreenStyle.answerBox}>
                {answerList.slice(0, 2).map(({ content, isCorrect }, idx) =>
                    <TouchableOpacity style={SecondScreenStyle.answerBtn} key={`${content}-${idx}`} onPress={() => compare(isCorrect, content)}
                    ><Text style={SecondScreenStyle.answerBtn_text}>{content}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={SecondScreenStyle.answerBox}>
                {answerList.slice(2, 4).map(({ content, isCorrect }, idx) =>
                    <TouchableOpacity style={SecondScreenStyle.answerBtn} key={`${content}-${idx}`} onPress={() => compare(isCorrect, content)}
                    ><Text style={SecondScreenStyle.answerBtn_text}>{content}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <ProgressBar curNum={4} backGroundProp={'#F39C12'} />
            <Modall isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} correct={correct} next={"Last"} navigation={navigation} solution={solution} />
        </LinearGradient>
    )
}

export default SecondScreen4;