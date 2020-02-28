const url = "http://localhost:3001/storageLinks/";

export async function storeLink(category, urlToStore) {
  const urlPath = url;

  try {
    let response = await fetch(urlPath, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        categorie: category,
        urlToStore
      })
    });

    let responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getLinkByCategory(category) {
  const urlPath = url + "category/" + category;

  try {
    let response = await fetch(urlPath, {
      method: "GET"
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteLink(id) {
  const urlPath = url + id;

  try {
    let response = await fetch(urlPath, {
      method: "DELETE"
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
