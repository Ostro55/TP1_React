import {collectionValue, copyCount} from "../domain/card.js";

function Summary({ cards}) {

    return (
        <>
            <p className="summary">{cards.length} cartes · {copyCount(cards)} exemplaires · {collectionValue(cards)}.</p>
        </>
    )

}

export default Summary;