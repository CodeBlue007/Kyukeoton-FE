import React from 'react'
import { Text, TouchableHighlight,StyleSheet, View,TouchableOpacity,Image } from "react-native";

const Select = () => {
  return (
        <View style={styles.box}>
          <View>
            <Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/favicon.png')}
                    />
          </View>
          <Text style={styles.text}>벛꽃</Text>
        </View>
  )
}

export default Select

const styles = StyleSheet.create({
  box:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:160,
    margin:3
  },
  text:{
    marginTop:20,
    textAlign:'center',
    color:'white'
  },
  tinyLogo:{
    width: 60,
    height: 60,
    zIndex:3
  }
})