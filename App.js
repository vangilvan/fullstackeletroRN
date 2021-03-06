import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import GlobalStyles from "./src/styles/GlobalStyles";
import colors from "./src/styles/colors";

// Import das páginas:
import Home from "./src/pages/home";
import Produtos from "./src/pages/produtos";
import Login from "./src/pages/login";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator
        screenOptions={{
          headerMode: "none",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          option={{ title: "Login" }}
        />
        <Stack.Screen name="Home" component={Home} option={{ title: "Home" }} />

        <Stack.Screen
          name="Produtos"
          component={Produtos}
          option={{ title: "Produtos" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
