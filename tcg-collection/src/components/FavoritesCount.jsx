import { useFavorites } from "../context/favorites.js";

function FavoritesCount() {
  const { favoriteIds } = useFavorites();
  const count = favoriteIds.length;
  const label = count > 1 ? "favoris" : "favori";

  return (
    <span className="favorites-count">
      ★ {count} {label}
    </span>
  );
}

export default FavoritesCount;
