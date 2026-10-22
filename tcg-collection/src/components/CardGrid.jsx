import CardTile from "./CardTile";
import QuantityControl from "./QuantityControl.jsx";

function CardGrid({ cards, onQuantityChange, onRemove }) {
    if (cards.length === 0) {
        return (
            <>
                <p className="hint">Aucune carte a afficher.</p>
            </>
        );
    } else {
        return (
            <>
                <div className="grid">
                    {cards.map((card) => (
                        <CardTile key={card.id} card={card}>
                            <QuantityControl quantity={card.quantity} onChange={(delta) => onQuantityChange(card.id, delta)}/>
                            <button onClick={() => onRemove(card.id)}>Supprimer</button>
                        </CardTile>
                    ))}
                </div>
            </>
        )
    }
}

export default CardGrid;