import { useCallback } from "react";
import { Text, TouchableHighlight, View } from "react-native";

function HomeScreen({ navigation }) {
    const onClick = useCallback(() => {
      navigation.navigate("Details");
    }, [navigation]);
  
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableHighlight onPress={onClick}>
          <Text>홈 스크린</Text>
        </TouchableHighlight>
      </View>
    );
  }

  export default HomeScreen;