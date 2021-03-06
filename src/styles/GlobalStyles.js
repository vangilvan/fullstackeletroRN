import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "./colors";

const Styles = StyleSheet.create({
  logoHome: {
    width: 150,
    height: 150,
  },
  view: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingTop: 50,
  },
  viewLogin: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingTop: 50,
  },
  defaultText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  buttonHome: {
    margin: 50,
    width: 200,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: colors.secondary,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.secondary,
    width: 350,
    height: 300,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginBottom: 35,
  },
  login: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    margin: 35,
  },
  input: {
    fontSize: 14,
    color: "#fff",

    margin: 12,
    padding: 12,

    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 200,

    width: "80%",
    height: 40,
  },
  buttonLogin: {
    width: "50%",
    height: 50,

    marginTop: 23,

    backgroundColor: colors.secondary,

    borderColor: "#cf2534",
    borderWidth: 2,
    borderRadius: 250,

    alignItems: "center",
    justifyContent: "center",
  },
  hr: {
    width: "100%",
    height: 1,
    backgroundColor: "#26282b",
    position: "relative",
    bottom: 20,
  },
  bottomBar: {
    marginTop: 230,
    paddingTop: 15,
    justifyContent: "space-evenly",
    flexDirection: "row",

    width: "100%",
    height: 100,
    borderTopWidth: 1,
    borderColor: colors.secondary,
  },
});

export default Styles;
