import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../screens/screen1"
import DetailsScreen from "../screens/screen2"
import SecondScreen from "../screens/screen3/SeondScreen"

const Stack = createNativeStackNavigator()
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "메인", headerStyle: { backgroundColor: 'red' }, headerTintColor: 'blue', headerTitleStyle: { fontSize: '30px' } }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "디테일", headerBackVisible: false }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{ title: "디테일", headerBackVisible: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation