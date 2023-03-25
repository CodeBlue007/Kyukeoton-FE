import { Text, View, TouchableOpacity, Image } from "react-native";
import { Screen3Style } from "./Screen3Style";
import { useState, useEffect } from "react";
import ProgressBar from "../../components/ProgressBar"
import { LinearGradient } from "expo-linear-gradient"
import * as API from "../../../api/API"
import Modall from "../../components/Modall"
import Spinner from "../../components/Spinner";




const ThirdScreen3 = ({ navigation }) => {
    const [fullItems, setfullItems] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [answerList, setAnswerList] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [solution, setSolution] = useState('');


    const compare = (isCorrect, name) => {
        if (isCorrect !== correct) {
            setCorrect(true)
        }
        setSolution(name);
        setIsModalVisible(true);
    }


    const fetchInitialData = async () => {
        const data = await API.get(`/categories/7/questions?page=2`);
        setfullItems(data);
        setAnswerList(data.answers);
        setLoading(false);
    }

    useEffect(() => {
        fetchInitialData();

    }, []);


    if (isLoading) return <Spinner />

    return (
        <LinearGradient colors={['#00BC4B', '#9EE398']} style={Screen3Style.container}>
            <Text style={Screen3Style.title}>{fullItems.content}</Text>
            <Image style={Screen3Style.ImgBox} source={{ uri: fullItems.questionImages[0].url, }}
            ></Image>

            <View style={Screen3Style.answerBox}>
                {answerList.slice(0, 2).map(({ isCorrect, content }, idx) =>
                    <TouchableOpacity style={Screen3Style.answerBtn} key={`${content}-${idx}`} onPress={() => compare(isCorrect, content)}
                    ><Text style={Screen3Style.answerBtn_text}>{content}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={Screen3Style.answerBox}>
                {answerList.slice(2, 4).map(({ isCorrect, content }, idx) =>
                    <TouchableOpacity style={Screen3Style.answerBtn} key={`${content}-${idx}`} onPress={() => compare(isCorrect, content)}
                    ><Text style={Screen3Style.answerBtn_text}>{content}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <ProgressBar curNum={3} backGroundProp={'#00A542'} />
            <Modall isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} correct={correct} next={"ThirdScreen4"} navigation={navigation} solution={solution} />


        </LinearGradient >)



}

export default ThirdScreen3;