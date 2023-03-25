import { useCallback, useEffect } from "react";
import { Text, TouchableHighlight, Modal, StyleSheet, View, Pressable, TouchableOpacity, } from "react-native";
import React, { useState } from 'react';
import Select from "./Select";






const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

function DetailsScreen({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [correct, setCorrect] = useState(false);

  const onClick = useCallback(() => {
    navigation.navigate("Home");
  }, [navigation]);


  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={ItemData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
  // return (
  //   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //     <TouchableHighlight onPress={onClick}>
  //       <Text>디테일 스크린</Text>
  //     </TouchableHighlight>
  //   </View>
  // );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'blue',
    flexDirection: 'row',
    margin: 'auto'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 150,
    flexDirection: 'row'
  },
  title: {
    fontSize: 32,
  },
});



export default DetailsScreen