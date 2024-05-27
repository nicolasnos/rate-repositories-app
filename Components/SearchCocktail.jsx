import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import { callApiByIngredient, callApiByCocktailId } from "../Client/Client.mjs";
import React, { useState } from "react";
import IngredientModal from "./IngredientModal";

const SearchCocktail = () => {
  const [searchIngredient, setSearchIngredient] = useState("");
  const [showCocktailModal, setShowCocktailModal] = useState(false);
  const [cocktailsData, setCocktailsData] = useState({});
  const [dataStatus, setDataStatus] = useState("none");
  const [cocktailModalData, setCocktailModalData] = useState({});
  const [viewMoreCocktail, setViewMoreCocktail] = useState({});

  const search = async () => {
    if (searchIngredient) {
      const cocteles = await callApiByIngredient(searchIngredient);
      setCocktailsData(cocteles);
      if (cocteles === undefined) {
        Alert.alert(
          "Search error",
          "Sorry we couldn't find any cocktail with your ingredient",
          ["okay"]
        );
        setDataStatus("error");
        return;
      } else if (cocteles.drinks) {
        setDataStatus("success");
      }
      return;
    } else {
      Alert.alert(
        "User Error",
        "To find your cocktail, you need to type an igredient",
        ["okay"]
      );
      setDataStatus("error");
    }
    return;
  };

  const handleShowModal = async (data) => {
    const info = await callApiByCocktailId(data.idDrink);
    setCocktailModalData(info.drinks[0]);
    setShowCocktailModal(true);
  };

  return (
    <View>
      <TextInput
        placeholder="search coctail by ingredient"
        onChangeText={setSearchIngredient}
      />
      <Pressable onPress={search} style={styles.searchButton}>
        <Text style={styles.searchButton}>search cocktail</Text>
      </Pressable>
      {dataStatus === "success" && (
        <FlatList
          style={styles.dataContainer}
          data={cocktailsData.drinks}
          keyExtractor={(cocktail) => cocktail.idDrink}
          renderItem={(cocktail) => (
            <View style={styles.itemContainter}>
              <Text>{cocktail.item.strDrink}</Text>
              <Pressable onPress={() => handleShowModal(cocktail.item)}>
                <Text>View more</Text>
              </Pressable>
            </View>
          )}
        />
      )}

      {showCocktailModal && (
        <View style={styles.modalContainer}>
          <IngredientModal
            cocktailModalData={cocktailModalData}
            setShowCocktailModal={setShowCocktailModal}
          />
        </View>
      )}
    </View>
  );
};

export default SearchCocktail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainter: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 5,
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  dataContainer: {
    paddingVertical: 5,
  },
  searchButton: {
    fontSize: 15,
    backgroundColor: "skyblue",
    borderRadius: 50,
    padding: 5,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  modalContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 300,
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
