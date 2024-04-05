import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import React from "react";

const StyledText = ({ children, list, header, parragraph }) => {
  const stylesArray = [
    list && styles.list,
    header && styles.header,
    parragraph && styles.parragraph,
  ];
  return <Text style={stylesArray}>{children}</Text>;
};

export default StyledText;

const styles = StyleSheet.create({
  list: {
    fontSize: 18,
    color: "#000",
    padding: 5,
    margin: "auto",
  },
  header: {
    fontSize: 24,
    color: "#000000",
    paddingVertical: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  parragraph: {
    fontSize: 18,
    padding: 15,
  },
});
