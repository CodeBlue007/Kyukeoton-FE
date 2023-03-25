import { useCallback, useEffect } from "react";
import React, {useState} from 'react';
import { Text, TouchableHighlight, Modal,StyleSheet,View,Pressable,TouchableOpacity,Image} from "react-native";

const Modall = ({isModalVisible,setIsModalVisible,correct,next,navigation,solution}) => {



  const onClick = useCallback(() => {
    navigation.navigate(next);
  }, [navigation]);

  const close = ()=>{
    setIsModalVisible(false)
  }


  return (
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
    {correct?
        <View style={styles.centeredView3}>
        <Image
        style={styles.tinyLogo}
        source={require('../../assets/Subtract.png')}
        />
        </View>:
        <View style={styles.centeredView2}>
        <Image
        style={styles.tinyLogo}
        source={require('../../assets/Union.png')}
        />
        </View>}
              
        <View style={styles.modalView}>
        {correct?
        <View style={{display:'flex',flexDirection:'row'}}>
          <Image
          style={styles.tinyLogo2}
          source={require('../../assets/yes1.png')}
          />
          <Text style={styles.modalText2}> 참 잘했어요</Text>
        </View>
        :
        <View style={{display:'flex',flexDirection:'row'}}>
          <Image
          style={styles.tinyLogo1}
          source={require('../../assets/no.png')}
          />
          <Text style={styles.modalText}> 오답이에요</Text>
        </View>
        }
              <Text style={styles.modalText1}>{correct?'':`정답 : ${solution}`}</Text>
              <Pressable
                style={correct?[styles.button1, styles.buttonClose]:[styles.button1, styles.button1Close]}
                onPress={()=>{
                  close()
                  onClick()
                }}>
                <Text style={styles.textStyle}>{next==="Last"?'확인':'계속하기'}</Text>
              </Pressable>
            </View>
          </View>
    </Modal>
  )
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
    tinyLogo1:{
      width:30,
      height:30,
      zIndex:5
    },
    tinyLogo2:{
      width:32,
      height:32,
      zIndex:6
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
    bottom:0,
    
  
  },
  modalView: {
  
    backgroundColor: 'white',
    position:'relative',
    width:390,
    padding: 30,
    borderRadius:20,
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
    marginTop: 18,
    marginBottom: 50,
    borderRadius: 8,
    width:350,
    height:62,
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
    color: '#ffffff',
    textAlign: 'center',
      fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 18,
   lineHeight: 22
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:21,
    lineHeight: 25,
    fontWeight:700,
    color: '#DB3434'
  },
  modalText2: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:21,
    lineHeight: 25,
    fontWeight:700,
    color: '#3498DB'
  },
  modalText1: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 21,
    lineHeight: 25,
    color: '#3C3C3C'
  },
  buttonText:{
    fontWeight: 700,
    lineHeight: 22,
    fontSize: 18, 
    color: "#0061C1",
    textAlign:'center'
  }
  
  });


export default Modall