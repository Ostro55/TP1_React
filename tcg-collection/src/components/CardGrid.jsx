import CardTile from "./CardTile";

function CardGrid({ cards }) {
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
                        <CardTile key={card.id} card={card} />
                    ))}
                </div>
            </>
        )
    }
}

export default CardGrid;