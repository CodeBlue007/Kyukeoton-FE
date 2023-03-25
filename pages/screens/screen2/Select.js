import React from 'react'
import { Text, TouchableHighlight,StyleSheet, View,TouchableOpacity,Image } from "react-native";

const Select = ({data}) => {
  return (
        <View style={styles.box}>
          <View>
            <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: data.url,
                    }}

                    />
          </View>
          <Text style={styles.text}>{data.name}</Text>
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
    color:'black',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 21
  },
  tinyLogo:{
    width: 60,
    height: 60,
    zIndex:3
  }
})