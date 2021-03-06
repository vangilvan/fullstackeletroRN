import React from "react";
import { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import colors from "../../styles/colors";

class Produto extends Component {
  render() {
    return (
      <View
        style={{
          height: 400,
          width: 310,

          padding: 25,
          marginLeft: 20,
          marginTop: 20,

          borderRadius: 5,
          borderWidth: 0.5,
          borderColor: colors.secondary,
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imagem}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "contain",
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 24 }}>
            {this.props.produto}
          </Text>
          <Text style={{ color: "white", fontSize: 15 }}>
            R$ {this.props.preco}
          </Text>
          <TouchableHighlight
            style={{
              backgroundColor: colors.secondary,
              borderRadius: 200,
              marginTop: 20,
              width: 200,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Compre esse!
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Produto;
