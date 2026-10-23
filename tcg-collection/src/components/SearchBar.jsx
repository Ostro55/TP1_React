import { RARITIES, parseRarity } from "../domain/card.js";
import {useEffect} from "react";

export function SearchBar({ query, onQueryChange, rarity, onRarityChange }) {

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                onQueryChange("");
                onRarityChange("toutes");
            }
        })
    }, [onQueryChange, onRarityChange])

    return (
        <div className="toolbar" role="search">
            <label>
                Recherche <input type="search" value={query} onChange={(e) => onQueryChange(e.target.value)} />
            </label>
            <label>
                Rareté{" "}
                <select
                    value={rarity}
                    onChange={(e) => onRarityChange(parseRarity(e.target.value) ?? "toutes")}
                >
                    <option value="toutes">Toutes</option>
                    {Object.values(RARITIES).map((r) => (
                        <option key={r} value={r}>
                            {r}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}

export default SearchBar;
