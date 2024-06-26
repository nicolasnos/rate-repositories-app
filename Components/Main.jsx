import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import RandomCoctel from "./Random";

import React from "react";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-native";
import SearchCocktail from "./SearchCocktail";

export default function Main() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<RandomCoctel />} /> */}
        <Route path="/" element={<SearchCocktail />} />
      </Routes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
});
