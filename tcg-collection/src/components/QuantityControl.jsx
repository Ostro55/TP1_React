function QuantityControl({quantity, onChange}) {

    return (
        <>
        <div className="quantity-control">
            {quantity > 0 && <button onClick={() => onChange(- 1)}
                                     aria-label="Retirer un exemplaire">-</button>}
            <strong>{quantity}</strong>
            <button onClick={() => onChange(1)}
                    aria-label="Ajouter un exemplaire">+</button>
        </div>
        </>
    );
}

export default QuantityControl;