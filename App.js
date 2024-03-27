import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeRouter } from "react-router-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RandomCoctel from "./Components/Random";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <RandomCoctel />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
