const callApi = async () => {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const callApiByIngredient = async (word) => {
  try {
    const res = await fetch(
      `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${word}`
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { callApi, callApiByIngredient };
