import { useCallback } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import Button from "./components/Button";

function HomeScreen({ navigation }) {
  const onClick = useCallback(() => {
    navigation.navigate("Details");
  }, [navigation]);

  const a = 1
  const b = 2
  const c = 3


  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'red' }}>
      <TouchableHighlight onPress={onClick}>
        <Text>홈 스크린</Text>
      </TouchableHighlight>
      <Button num={a} navigation={navigation} />
      <Button num={b} navigation={navigation} />
      <Button num={c} navigation={navigation} />
    </View>
  );
}

export default HomeScreen;



