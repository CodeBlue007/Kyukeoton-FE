import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../screens/screen1"
import DetailsScreen from "../screens/screen2"
import DetailsScreen1 from "../screens/screen2/index1"
import DetailsScreen2 from "../screens/screen2/index2"
import DetailsScreen3 from "../screens/screen2/index3"
import LastScreen from "../screens/screen2/index4"
import SecondScreen1 from "../screens/screen3/SeondScreen1"
import SecondScreen2 from "../screens/screen3/SeondScreen2"
import SecondScreen3 from "../screens/screen3/SeondScreen3"
import SecondScreen4 from "../screens/screen3/SeondScreen4"
import ThirdScreen1 from "../screens/screen4/ThirdScreen1"
import ThirdScreen2 from "../screens/screen4/ThirdScreen2"
import ThirdScreen3 from "../screens/screen4/ThirdScreen3"
import ThirdScreen4 from "../screens/screen4/ThirdScreen4"



const Stack = createNativeStackNavigator()
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "", headerStyle: { backgroundColor: '#0091EA' }, headerTintColor: '#ffffff', headerTitleStyle: { fontSize: '30px' } }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "기본인지능력", headerStyle: { backgroundColor: '#0091EA' }, headerTintColor: '#ffffff', headerTitleStyle: { fontSize: '30px' }, headerBackVisible: false }}
        />

        <Stack.Screen
          name="Details1"
          component={DetailsScreen1}
          options={{ title: "기본인지능력", headerStyle: { backgroundColor: '#0091EA' }, headerTintColor: '#ffffff', headerTitleStyle: { fontSize: '30px' }, headerBackVisible: false }}
        />
        <Stack.Screen
          name="Details2"
          component={DetailsScreen2}
          options={{ title: "기본인지능력", headerStyle: { backgroundColor: '#0091EA' }, headerTintColor: '#ffffff', headerTitleStyle: { fontSize: '30px' }, headerBackVisible: false }}
        />
        <Stack.Screen
          name="Details3"
          component={DetailsScreen3}
          options={{ title: "기본인지능력", headerStyle: { backgroundColor: '#0091EA' }, headerTintColor: '#ffffff', headerTitleStyle: { fontSize: '30px' }, headerBackVisible: false }}
        />
        <Stack.Screen
          name="Last"
          component={LastScreen}
          options={{ title: "Last", headerStyle: { backgroundColor: '#0091EA' }, headerTintColor: '#ffffff', headerTitleStyle: { fontSize: '30px' }, headerBackVisible: false }}
        />
        <Stack.Screen
          name="SecondScreen1"
          component={SecondScreen1}
          options={{ title: "시각적 주의력", headerBackVisible: false }}
        />
        <Stack.Screen
          name="SecondScreen2"
          component={SecondScreen2}
          options={{ title: "시각적 주의력", headerBackVisible: false }}
        />
        <Stack.Screen
          name="SecondScreen3"
          component={SecondScreen3}
          options={{ title: "시각적 주의력", headerBackVisible: false }}
        />
        <Stack.Screen
          name="SecondScreen4"
          component={SecondScreen4}
          options={{ title: "시각적 주의력", headerBackVisible: false }}
        />
        <Stack.Screen
          name="ThirdScreen1"
          component={ThirdScreen1}
          options={{ title: "수학적 사고력", headerBackVisible: false }}
        />
        <Stack.Screen
          name="ThirdScreen2"
          component={ThirdScreen2}
          options={{ title: "수학적 사고력", headerBackVisible: false }}
        />

        <Stack.Screen
          name="ThirdScreen3"
          component={ThirdScreen3}
          options={{ title: "수학적 사고력", headerBackVisible: false }}
        />

        <Stack.Screen
          name="ThirdScreen4"
          component={ThirdScreen4}
          options={{ title: "수학적 사고력", headerBackVisible: false }}
        />



      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation