import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import HomeScreen from "../screens/screen1"
import DetailsScreen from "../screens/screen2"

const Stack = createNativeStackNavigator()
const Navigation = ()=>{
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "홈" }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: "디테일" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
export default Navigation