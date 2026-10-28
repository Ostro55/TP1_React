import { useFavorites } from "../context/favorites.js";

function FavoriteButton({ cardId }) {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteIds.includes(cardId);

  return (
    <button
      type="button"
      className={`favorite ${isFavorite ? "is-on" : ""}`}
      onClick={() => toggleFavorite(cardId)}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
    >
      {isFavorite ? "★" : "☆"}
    </button>
  );
}

export default FavoriteButton;
