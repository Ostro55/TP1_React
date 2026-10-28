import RarityBadge from "./RarityBadge.jsx";
import FavoriteButton from "./FavoriteButton.jsx";
import { isRare } from "../domain/card.js";

function CardTile({ card, children }) {
  return (
    <article className={`card-tile rarity-${card.rarity}`}>
      <div className="actions">
        <h3>{card.name}</h3>
        <FavoriteButton cardId={card.id} />
      </div>
      <RarityBadge rarity={card.rarity} />
      {isRare(card) && <p className="highlight">★ Carte rare</p>}
      <p className="meta">{card.set} · {card.rarity}</p>
      <p className="price">{card.price} €</p>
      {card.quantity === 0 && <p className="sold-out">Plus aucun exemplaire</p>}
      {children && (
        <div className="actions">
          {children}
        </div>
      )}
    </article>
  );
}

export default CardTile;
