import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const AppBar = ({ active, to, children }) => {
  return (
    <Link to={to}>
      <Text style={styles.text}>{children}</Text>
    </Link>
  );
};
export default function NavBar() {
  return (
    <View style={styles.container}>
      <AppBar to={"/"}>Random coctel</AppBar>
      <AppBar to={"/perro"}>Search cocktails</AppBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingTop: Constants.statusBarHeight + 15,
    paddingBottom: 10,
    paddingLeft: 10,
    flexDirection: "row",
  },
  text: {
    color: "#f5f5f5",
    fontWeight: "bold",
    paddingHorizontal: 15,
    fontSize: 22,
  },
});
