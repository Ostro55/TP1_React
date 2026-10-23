import './domain/card';
import './components/CardTile';
import {collectionValue, SAMPLE_CARDS} from "./domain/card.js";
import Panel from "./components/Panel.jsx";
import CardGrid from "./components/CardGrid.jsx";
import {useState} from "react";
import Summary from "./components/Summary.jsx";
import SearchBar from "./components/SearchBar.jsx";
import {useDocumentTitle} from "./hooks/useDocumentTitle.js";
import {useCards} from "./hooks/useCards.js";

function App() {

  const [query, setQuery] = useState("")
  const [rarity, setRarity] = useState("toutes")

  const {request, handleRetry, handleQuantityChange, handleRemove} = useCards()

  const cards = request.status === "success" ? request.cards : []

  const value = collectionValue(cards)
  useDocumentTitle(`Ma collection TCG (${value})`)

  let visibleCards = cards.filter(card => card.name.toLowerCase().includes(query.toLowerCase()) && (rarity === "toutes" || card.rarity === rarity))

  return (
      <>
        <main className="app">
          <header className="app-header">
            <h1>Ma collection TCG</h1>
            <Summary cards={cards} />
          </header>
          <SearchBar query={query} onQueryChange={setQuery} rarity={rarity} onRarityChange={setRarity}/>
          {request.status === "loading" && <p>Chargement...</p>}
          {request.status === "error" && (
            <p className="error">
              Erreur : {request.message}{" "}
              <button onClick={handleRetry}>Réessayer</button>
            </p>
          )}
          {request.status === "success" && (
            <Panel title={`Mes cartes (${visibleCards.length} / ${cards.length})`}>
              <div className="grid">
                  <CardGrid cards={visibleCards} onQuantityChange={handleQuantityChange} onRemove={handleRemove}/>
              </div>
            </Panel>
          )}
        </main>
      </>
  )
}

export default App
