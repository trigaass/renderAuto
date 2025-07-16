import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages/public/login";
import { Register } from "../pages/public/register";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="register"
           options={{ headerShown: false }}
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}