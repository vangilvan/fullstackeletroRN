import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Plataform,
  StatusBar,
  Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GlobalStyles from "../../styles/GlobalStyles";
import Produtos from "../produtos";
import { TouchableHighlight } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <View style={GlobalStyles.view}>
      <Image
        source={require("../../components/home/img/icon.png")}
        style={GlobalStyles.logoHome}
      />
      <Text style={GlobalStyles.title}>Full Stack Eletro</Text>
      <View style={GlobalStyles.hr} />
      <Text style={GlobalStyles.defaultText}>
        Aqui é a loja onde programadores pagam menos
      </Text>
      <TouchableOpacity
        style={GlobalStyles.buttonHome}
        title="Ir para loja"
        onPress={() => navigation.navigate("Produtos")}
      >
        <Text style={GlobalStyles.defaultText}>Ver produtos</Text>
      </TouchableOpacity>
      <View style={GlobalStyles.bottomBar}>
        <TouchableOpacity
          style={GlobalStyles.btnBottomBar}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../../components/home/img/home.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={GlobalStyles.btnBottomBar}
          onPress={() => navigation.navigate("Login")}
        >
          <Image
            source={require("../../components/home/img/logout.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
