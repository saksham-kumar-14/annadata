import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//screens
import Auth from "@/components/auth"
import GetStarted from "@/components/getStarted"
import Main from "@/components/main"
import Profile from "@/components/profile"
import Cart from "@/components/cart"
import Chat from "@/components/chat"
import Search from "@/components/search"
import Map from "@/components/api/map"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Get Started!" component={GetStarted} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}Main