import {useState} from "react";
import {FavoriteContext} from "./favorites.js";

function FavoriteProvider({children}) {

    const [favoriteIds, setFavoriteIds] = useState([])

    const toggleFavorite = (cardId) => {
        favoriteIds.includes(cardId) ? setFavoriteIds(favoriteIds.filter(id => id !== cardId)) : setFavoriteIds([...favoriteIds, cardId])
        return <FavoriteContext value={{favoriteIds, toggleFavorite}}>{children}</FavoriteContext>
    }
}

export default FavoriteProvider