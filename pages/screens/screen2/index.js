import { useCallback } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';



const ItemData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

function DetailsScreen({ navigation }) {

  const [selectedId, setSelectedId] = useState();

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