import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorties: [],
  totalFavorites: 0,
  addFavorites: (favoriteMeetup) => {},
  removeFavorites: (meetupId) => {},
  itemIsFavorites: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  function addFavoritesHandler() {
    setUserFavorites((prevUserFavorites) => {
      prevUserFavorites.concat(userFavorites);
    });
  }
  function removeFavoritesHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemIsFavoritesHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }
  const context = {
    favorties: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoritesHandler,
    removeFavorites: removeFavoritesHandler,
    itemIsFavorites: itemIsFavoritesHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;
