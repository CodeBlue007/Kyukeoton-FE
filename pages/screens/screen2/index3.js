import { useCallback, useEffect } from "react";
import { Text, TouchableHighlight, Modal,StyleSheet,View,Pressable,TouchableOpacity,} from "react-native";
import React, {useState} from 'react';
import Select from "./Select";
import {LinearGradient} from "expo-linear-gradient"



function DetailsScreen3({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [correct,setCorrect] = useState(false);

    const onClick = useCallback(() => {
      navigation.navigate("Last");
    }, [navigation]);

    const close = ()=>{
      setIsModalVisible(false)
    }


    const open1 = ()=>{
      setIsModalVisible(true)
      setCorrect(true)
    }


    return (
        <LinearGradient
        colors={['#0091EA','#9EDAFF']}
        style={styles.container1}
        >
        <View style={{ position:'relative',flex: 1, alignItems: "center"}}>
            <Text style={styles.title1}>마지막문제</Text>
            <Text style={styles.title2}>계절</Text>
          <View style={styles.selectImg}>
            <View  style={{ flexDirection:'row'}}>
              <TouchableHighlight style={styles.container} onPress={onClick}>
                  <Select/>
              </TouchableHighlight>
              <TouchableHighlight  style={styles.container} onPress={onClick}>
                  <Select/>
              </TouchableHighlight>
            </View>
            <View style={{ flexDirection:'row'}}>
              <TouchableHighlight  style={styles.container} onPress={onClick}>
                  <Select/>
              </TouchableHighlight>
              <TouchableHighlight style={styles.container}>
                  <Select/>
              </TouchableHighlight>
            </View>
          </View>
            <View style={styles.btn}>
            <View style={{ flexDirection:'row'}}>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => setIsModalVisible(true)}
                    >
                <Text style={styles.buttonText}>스키</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setIsModalVisible(true)}
                    >
                <Text style={styles.buttonText}>농구</Text>
                </TouchableOpacity>
            </View>
              <View style={{ flexDirection:'row'}}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setIsModalVisible(true)}
                    >
                <Text style={styles.buttonText}>축구</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={open1}
                    >
                <Text style={styles.buttonText}>야구</Text>
                </TouchableOpacity>
               </View>
              </View>
            <Modal
              animationType={"slide"}
              style={{width:40,height:10}}
              transparent={true}
              visible={isModalVisible}
              onRequestClose={() => {
                  isModalVisible(!isModalVisible)
              }}
          >
              <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{correct?'정답입니다.':'오답이에요'}</Text>
              <Text style={styles.modalText1}>{correct?'참 잘했어요':'정답 : 눈사람'}</Text>
              <Pressable
                style={correct?[styles.button1, styles.buttonClose]:[styles.button1, styles.button1Close]}
                onPress={()=>{
                  close()
                  onClick()
                }}>
                <Text style={styles.textStyle}>계속하기</Text>
              </Pressable>
            </View>
          </View>
          </Modal>
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
  



export default DetailsScreen3