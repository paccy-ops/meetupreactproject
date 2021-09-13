import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemFavorite: (meetUpId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoritesHandler(favoriteMeetup) {
    setUserFavorites((previewFavorites) => {
      return previewFavorites.concat(favoriteMeetup);
    });
  }
  function removeFavotesHandler(meetupId) {
    setUserFavorites((previewFavorites) => {
      return previewFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemFavoritesHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavotesHandler,
    itemFavorite: itemFavoritesHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;
