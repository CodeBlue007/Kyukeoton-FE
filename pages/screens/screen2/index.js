import { useCallback } from "react";
import { Text, TouchableHighlight, View } from "react-native";

function DetailsScreen({ navigation }) {
    const onClick = useCallback(() => {
      navigation.navigate("Home");
    }, [navigation]);
  
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableHighlight onPress={onClick}>
          <Text>디테일 스크린</Text>
        </TouchableHighlight>
      </View>
    );
  }
  
export default DetailsScreen