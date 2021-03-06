import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";

import Produto from "../../components/produtos";
import colors from "../../styles/colors";

export default function Produtos({ navigation }) {
  return (
    <View style={GlobalStyles.view}>
      <StatusBar backgroundColor={"#343a40"} />
      <Text
        style={{
          fontWeight: "700",
          color: "#fff",
          textAlign: "center",
          fontSize: 24,
        }}
      >
        Veja nossa lista de produtos:
      </Text>
      <View style={{ height: 430 }}>
        <ScrollView horizontal={true}>
          <Produto
            imagem={require("../../components/produtos/img/fogao1.png")}
            produto="Fogão Genérico"
            preco="240,99"
          />
          <Produto
            imagem={require("../../components/produtos/img/fogao2.png")}
            produto="Fogão Drift"
            preco="9999,99"
          />
          <Produto
            imagem={require("../../components/produtos/img/geladeira1.png")}
            produto="Geladeira Junior"
            preco="900,99"
          />
          <Produto
            imagem={require("../../components/produtos/img/geladeira2.png")}
            produto="Geladeira Brava"
            preco="1500,60"
          />
        </ScrollView>
      </View>
      <View
        style={{
          marginTop: 215,
          paddingTop: 15,
          justifyContent: "space-evenly",
          flexDirection: "row",

          width: "100%",
          height: 100,
          borderTopWidth: 1,
          borderColor: colors.secondary,
        }}
      >
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
