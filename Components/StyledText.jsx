import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StyledText = ({ children, list, header }) => {
  const stylesArray = [list && styles.list, header && styles.header];
  return <Text style={stylesArray}>{children}</Text>;
};

export default StyledText;

const styles = StyleSheet.create({
  list: {
    fontSize: 12,
    color: "grey",
    padding: 5,
    margin: "auto",
  },
  header: {
    fontSize: 20,
    color: "#000000",
    paddingBottom: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    margin: "auto",
  },
});
