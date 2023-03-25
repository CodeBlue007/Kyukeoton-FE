import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ num, navigation }) => {

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => handleToSecond()}
    >
      <Text style={{ fontSize: 24, color: "white", textAlign: 'center' }}>{num}</Text>
    </TouchableOpacity>
  )
}

export default Button;


const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4B778D",
    padding: 18,
    margin: 10,
    borderRadius: 8,
    width: 250,
    display: 'flex',
    justifyContent: 'center',
  }
});
