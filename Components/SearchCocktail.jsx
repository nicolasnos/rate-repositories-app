import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { callApiByIngredient } from "../Client/Client.mjs";
import React, { useState } from "react";
import { FlatList } from "react-native-web";

const SearchCocktail = () => {
  const [searchIngredient, setSearchIngredient] = useState("");
  const buscar = async () => {
    const cocteles = await callApiByIngredient(searchIngredient);
  };
  return (
    <View>
      <TextInput
        placeholder="search coctail by ingredient"
        onChangeText={setSearchIngredient}
      />
      <Button title="search cocktail" onPress={buscar}></Button>

      {/* <Pressable onPress={buscar}>
        <Text>I'm pressable!</Text>
      </Pressable> */}
      <FlatList>
        {cocteles ??
          cocteles.drinks.map((drink) => {
            <View key={drink.idDrink}>
              <Text>{drink.strDrink}</Text>
            </View>;
          })}
      </FlatList>
    </View>
  );
};

export default SearchCocktail;

const styles = StyleSheet.create({});
