import { StyleSheet, View, FlatList, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { callApi } from "../Client/Client.mjs";
import StyledText from "./StyledText";

export default function RandomCoctel() {
  const [coctelData, setCoctelData] = useState({});

  useEffect(() => {
    callApi()
      .then((json) => {
        setCoctelData(json.drinks[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(coctelData);
  return (
    <View style={styles.content}>
      <StyledText header>{coctelData.strDrink} </StyledText>
      {coctelData.strDrinkThumb && (
        <Image
          source={{ uri: coctelData.strDrinkThumb }}
          style={styles.image}
        />
      )}
      <StyledText header>Preparation</StyledText>
      {coctelData.strInstructions && (
        <StyledText parragraph>{coctelData.strInstructions}</StyledText>
      )}
      <StyledText header>Ingredients</StyledText>
      <FlatList
        style={{ paddingTop: 10 }}
        data={[
          { key: coctelData.strIngredient1 ?? coctelData.strIngredient1 },
          { key: coctelData.strIngredient2 ?? coctelData.strIngredient2 },
          { key: coctelData.strIngredient3 ?? coctelData.strIngredient3 },
          { key: coctelData.strIngredient4 ?? coctelData.strIngredient4 },
          { key: coctelData.strIngredient5 ?? coctelData.strIngredient5 },
          { key: coctelData.strIngredient6 ?? coctelData.strIngredient6 },
          { key: coctelData.strIngredient7 ?? coctelData.strIngredient7 },
          { key: coctelData.strIngredient8 ?? coctelData.strIngredient8 },
          { key: coctelData.strIngredient9 ?? coctelData.strIngredient9 },
          { key: coctelData.strIngredient10 ?? coctelData.strIngredient10 },
        ]}
        renderItem={({ item }) => {
          return (
            <View>
              <StyledText list>{item.key}</StyledText>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 25,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    padding: 2,
  },
});
