import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { callApi } from "./Client/Client.mjs";

export default function App() {
  useEffect(() => {
    callApi()
      .then((json) => {
        console.log(json.drinks[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>not Fast rendering!</Text>
      <Text>trying phone rendering</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f",
    alignItems: "center",
    justifyContent: "center",
  },
});
