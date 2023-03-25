import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../screens/screen1"
import DetailsScreen from "../screens/screen2"
import DetailsScreen1 from "../screens/screen2/index1"
import DetailsScreen2 from "../screens/screen2/index2"
import DetailsScreen3 from "../screens/screen2/index3"
import LastScreen from "../screens/screen2/index4"
import SecondScreen from "../screens/screen3/SeondScreen"

const Stack = createNativeStackNavigator()
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "메인", headerStyle: { backgroundColor: '#0091EA' }, headerTintColor: '#ffffff', headerTitleStyle: { fontSize: '30px' }}}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "디테일",  headerStyle: { backgroundColor: '#0091EA' }, headerTintColor: '#ffffff', headerTitleStyle: { fontSize: '30px' } ,headerBackVisible: false }}
        />

        <Stack.Screen
          name="Details1"
          component={DetailsScreen1}
          options={{ title: "디테일",  headerStyle: { backgroundColor: '#0091EA' }, headerTintColor: '#ffffff', headerTitleStyle: { fontSize: '30px' }, headerBackVisible: false }}
        />
        <Stack.Screen
          name="Details2"
          component={DetailsScreen2}
          options={{ title: "디테일",  headerStyle: { backgroundColor: '#0091EA' }, headerTintColor: '#ffffff', headerTitleStyle: { fontSize: '30px' },headerBackVisible: false }}
        />
         <Stack.Screen
          name="Details3"
          component={DetailsScreen3}
          options={{ title: "디테일",  headerStyle: { backgroundColor: '#0091EA' }, headerTintColor: '#ffffff', headerTitleStyle: { fontSize: '30px' },headerBackVisible: false }}
        />
        <Stack.Screen
          name="Last"
          component={LastScreen}
          options={{ title: "Last",  headerStyle: { backgroundColor: '#0091EA' }, headerTintColor: '#ffffff', headerTitleStyle: { fontSize: '30px' },headerBackVisible: false }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{ title: "디테일",  headerStyle: { backgroundColor: '#0091EA' }, headerTintColor: '#ffffff', headerTitleStyle: { fontSize: '30px' },headerBackVisible: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation