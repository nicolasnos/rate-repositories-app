import { StyleSheet, Text, ScrollView, StatusBar, View } from "react-native";
import React from "react";
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
    <ScrollView horizontal style={styles.container}>
      <AppBar to={"/"}>Random coctel</AppBar>
      <AppBar to={"/search"}>Search cocktails</AppBar>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: StatusBar.currentHeight + 15,
    borderRadius: 10,
  },
  text: {
    color: "#000",
    fontWeight: "bold",
    paddingHorizontal: 15,
    fontSize: 22,
  },
});
