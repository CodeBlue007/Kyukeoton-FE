import { useCallback, useEffect } from "react";
import { Text, TouchableHighlight, Modal,StyleSheet,View,Pressable,TouchableOpacity,Image} from "react-native";
import React, {useState} from 'react';
import Select from "./Select";
import {LinearGradient} from "expo-linear-gradient"
import Modall from "../../components/Modall";
import axios from 'axios'
import ProgressBar from "../../components/ProgressBar"


function DetailsScreen({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [correct,setCorrect] = useState(false);
  const [solution,setSolution] = useState('')

  const [ques,setQues] =useState([
    {
      "name": "호랑이",
      "url": "456"
    },
    {
      "name": "토끼",
      "url": "4567"
    },
    {
      "name": "원숭이",
      "url": "45678"
    },
    {
      "name": "?",
      "url": "456749"
    }
  ])

  const [answer,setAnswer] = useState([
    {
      "content": "사자",
      "isCorrect": false
    },
    {
      "content": "물고기",
      "isCorrect": true
    },
    {
      "content": "새",
      "isCorrect": false
    },
    {
      "content": "오리",
      "isCorrect": false
    }
  ])



    // const open1 = ()=>{
    //   setIsModalVisible(true)
    //   setCorrect(true)
    // }

    const compare=(isCorrect,name)=>{
      if(isCorrect !== correct){
        setCorrect(true)
      }
      setSolution(name)
      setIsModalVisible(true)
    }
    
    useEffect(()=>{
      axios.get('http://13.124.233.9:8080/categories/3/questions?page=2')
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },[])


    return (
      <LinearGradient
        colors={['#0091EA','#9EDAFF']}
        style={styles.container1}
        >
        <View style={{ position:'relative',flex: 1, alignItems: "center"}}>
            <Text style={styles.title1}>‘?’에 적합한 그림이 무엇일까요?</Text>
            <Text style={styles.title2}>계절</Text>
          <View style={styles.selectImg}>

            <View style={{ flexDirection:'row'}}>
              {ques.slice(0,2).map((val)=>
                  <TouchableHighlight  style={styles.container} >
                    <Select data={val}/>
                  </TouchableHighlight>
              )}
            </View>
            <View style={{ flexDirection:'row'}}>
              {ques.slice(2,4).map((val)=>
                  <TouchableHighlight  style={styles.container} >
                    <Select data={val}/>
                  </TouchableHighlight>
              )}
            </View>

          </View>
          
            <View style={styles.btn}>
              <View style={{ flexDirection:'row'}}>
              {answer.slice(0,2).map((val)=>
                  <TouchableOpacity
                  style={styles.button}
                  onPress={() => compare(val.isCorrect,val.content)}
                    >
                  <Text style={styles.buttonText}>{val.content}</Text>
                </TouchableOpacity>
              )}
              </View>

              <View style={{ flexDirection:'row'}}>
              {answer.slice(2,4).map((val)=>
                  <TouchableOpacity
                  style={styles.button}
                  onPress={() => compare(val.isCorrect,val.content)}
                    >
                  <Text style={styles.buttonText}>{val.content}</Text>
                </TouchableOpacity>
              )}
              </View>

            </View>
            <Modall isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} correct={correct} next={"Details1"} navigation={navigation} solution={solution}/>
            <ProgressBar curNum={1} backGroundProp={'#0061C1'} />
        </View>
        
      </LinearGradient>
    );
 }

 const styles = StyleSheet.create({
  container1:{
    flex:1,
    justifyContent:'center'
  },
  selectImg:{
    display:'flex',
    marginTop:170,
    borderRadius: 20,
    overflow: "hidden"
  },
  btn:{
    display:'flex',

    marginTop:33
  },

  title1:{
    marginTop:50,
    width:310,
    position:'absolute',
    zIndex:1,
    fontSize: 24,
    lineHeight: 29,
    fontWeight: 700,
    color:'#ffffff'

  },
  title2:{
    marginTop:90,
    width:310,
    position:'absolute',
    zIndex:1,
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 29,
    textAlign:'center',
    color:'#ffffff'
  },

  container: {
    width:147,
    height:147,
    backgroundColor:'#ffffff',
    borderStyle:'solid',
    borderColor:'white',
    borderWidth:1.5
  },

  centeredView: {
  flex: 1,
  position:"absolute",
  bottom:30,

},
modalView: {

  backgroundColor: 'white',
  width:400,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
centeredView2: {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  position:"relative",
  bottom:100
 

},
centeredView3: {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  position:"relative",
  bottom:73
 

},
modalView2: {
backgroundColor:'#ffffff',
  width:400,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
button: {
  backgroundColor: "#ffffff",
  padding: 18,
  margin: 10,
  borderRadius: 16,
  width:165,
  height:62,
  display:'flex',
  justifyContent:'center',

},
button1: {
  backgroundColor: "#4B778D",
  padding: 18,
  marginTop: 20,
  borderRadius: 8,
  width:300,
  display:'flex',
  justifyContent:'center',

},
buttonClose: {
  backgroundColor: '#2196F3',
},
button1Close: {
  backgroundColor: 'red',
},
textStyle: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},
modalText: {
  marginBottom: 15,
  textAlign: 'center',
  fontSize:25
},
modalText1: {
  marginBottom: 15,
  textAlign: 'center',
  fontSize:20
},
buttonText:{
  fontWeight: 700,
  lineHeight: 22,
  fontSize: 18, 
  color: "#0061C1",
  textAlign:'center'
}

});



export default DetailsScreen