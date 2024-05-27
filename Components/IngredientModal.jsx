import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import React from "react";

export default function IngredientModal({
  cocktailModalData,
  setShowCocktailModal,
}) {
  console.log("chamo", cocktailModalData);
  const handleCloseModal = () => {
    setShowCocktailModal(false);
  };
  return (
    <SafeAreaView style={styles.centeredView}>
      {/* <Pressable onPressOut={() => closeModal(true)}>
        <Image alt="closeIcon" />
      </Pressable>
      <Image alt="image of the cocktail" /> */}
      <Pressable onPressOut={handleCloseModal}>
        <Text>clos</Text>
      </Pressable>
      <Text>hola mi perro</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
});
