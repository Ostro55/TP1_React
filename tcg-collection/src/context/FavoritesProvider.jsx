import { useState } from "react";
import { FavoritesContext } from "./favorites.js";

function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const toggleFavorite = (cardId) => {
    setFavoriteIds((prev) =>
      prev.includes(cardId) ? prev.filter((id) => id !== cardId) : [...prev, cardId]
    );
  };

  return (
    <FavoritesContext value={{ favoriteIds, toggleFavorite }}>
      {children}
    </FavoritesContext>
  );
}

export default FavoritesProvider;
