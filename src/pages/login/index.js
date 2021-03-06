import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  StatusBar,
} from "react-native";

import GlobalStyles from "../../styles/GlobalStyles";

export default function Login(props) {
  const { navigation } = props;
  return (
    <View style={GlobalStyles.viewLogin}>
      <StatusBar backgroundColor={"#343a40"} />
      <Image
        source={require("./../../components/home/img/icon.png")}
        style={GlobalStyles.logoHome}
      />
      <Text style={GlobalStyles.login}>Login</Text>
      <View style={GlobalStyles.card}>
        <TextInput
          style={GlobalStyles.input}
          placeholder="type your email"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={GlobalStyles.input}
          placeholder="type your password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
        />
        <TouchableHighlight
          style={GlobalStyles.buttonLogin}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={GlobalStyles.defaultText}>Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
