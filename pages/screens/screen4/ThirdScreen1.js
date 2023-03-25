import { Text, View, TouchableOpacity, Image } from "react-native";
import { Screen3Style } from "./Screen3Style";
import { useState, useEffect } from "react";
import ProgressBar from "../../components/ProgressBar"
import { LinearGradient } from "expo-linear-gradient"
import * as API from "../../../api/API"
import Modall from "../../components/Modall"
import Spinner from "../../components/Spinner";
import { useRecoilState } from "recoil";
import { DurationTime, DurationCleanUp } from "../../../atom";





const ThirdScreen1 = ({ navigation }) => {
    const [fullItems, setfullItems] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [answerList, setAnswerList] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [solution, setSolution] = useState('');
    const [durationTime, setDurationTime] = useRecoilState(DurationTime);
    const [durationCleanup, setDurationCleanup] = useRecoilState(DurationCleanUp);



    const compare = (isCorrect, name) => {
        if (isCorrect !== correct) {
            setCorrect(true)
        }
        setIsModalVisible(true);
    }


    const fetchInitialData = async () => {
        const data = await API.get(`/categories/7/questions?page=0`);
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
    }

    const countClosure = () => {
        const countProgress = setInterval(() => {
            setDurationTime(current => current + 1);
        }, 1000);

        return () => clearInterval(countProgress);
    };


    useEffect(() => {
        fetchInitialData();

        const cleanUp = countClosure();
        setDurationCleanup({ cleanUpFn: cleanUp });
    }, []);


    if (isLoading) return (<Spinner />)

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
            <ProgressBar curNum={1} backGroundProp={'#00A542'} />
            <Modall isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} correct={correct} next={"ThirdScreen2"} navigation={navigation} solution={solution} />


        </LinearGradient >)



}

export default ThirdScreen1;