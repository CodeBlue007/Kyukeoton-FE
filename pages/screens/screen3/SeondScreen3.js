import { Text, View, TouchableOpacity, Image } from "react-native";
import { SecondScreenStyle } from "./SecondScreenStyle";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient"
import ProgressBar from "../../components/ProgressBar"
import Spinner from "../../components/Spinner";
import * as API from "../../../api/API"
import Modall from "../../components/Modall"
import axios from "axios";



const SecondScreen3 = ({ navigation }) => {


    const [fullItems, setfullItems] = useState([]);
    const [answerList, setAnswerList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [solution, setSolution] = useState('')


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
        setSolution(name);
        setIsModalVisible(true);
    }


    useEffect(() => {
        axios.get(`http://13.124.233.9:8080/categories/5/questions?page=2`)
            .then(({ data }) => {
                console.log(data);
                setfullItems(data);
                setAnswerList(data.answers);
                setLoading(false);
            })
            .catch((err) => console.log(err))


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
            <ProgressBar curNum={3} backGroundProp={'#F39C12'} />
            <Modall isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} correct={correct} next={"SecondScreen4"} navigation={navigation} solution={solution} />
        </LinearGradient>
    )
}

export default SecondScreen3;