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

export { callApi };
