const url = "http://localhost:3001/";

export async function getStorage(categorie, urlToStore) {
  const urlPath = url + "storageLinks";

  try {
    let response = await fetch(urlPath, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        categorie,
        urlToStore
      })
    });

    let responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
