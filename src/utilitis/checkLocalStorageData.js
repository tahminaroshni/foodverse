export const checkLocalStorageData = (id, savedFavouriteItem, setSavedFavouriteItem) => {

  const isExists = savedFavouriteItem.some(favouriteItem => favouriteItem.id === id);

  if (isExists) {
    // remove data from local storage
    const reservedData = savedFavouriteItem.filter(favouriteItem => favouriteItem.id !== id);
    setSavedFavouriteItem(reservedData);
  }

  else {
    // set data into local storage
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      .then(res => res.json())
      .then(data => {
        setSavedFavouriteItem([...savedFavouriteItem, data.data.recipe]);
      })
  }
}