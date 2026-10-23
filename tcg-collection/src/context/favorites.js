import {createContext} from "react";

export const FavoriteContext = createContext(null)

export function useFavorites() {
    if (FavoriteContext == null) {
        throw new Error("useFavorites must be used within a FavoriteProvider")
    } else {
        return FavoriteContext
    }
}