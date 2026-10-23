import './domain/card';
import './components/CardTile';
import {SAMPLE_CARDS} from "./domain/card.js";
import Panel from "./components/Panel.jsx";
import CardGrid from "./components/CardGrid.jsx";
import {useState} from "react";
import Summary from "./components/Summary.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {

  const [cards, setCards] = useState(SAMPLE_CARDS)
  const [query, setQuery] = useState("")
  const [rarity, setRarity] = useState("toutes")

  let visibleCards = cards.filter(card => card.name.toLowerCase().includes(query.toLowerCase()) && (rarity === "toutes" || card.rarity === rarity))

  const handleQuantityChange = (id, delta) => {
    setCards((previous) => previous.map(card => card.id === id ? {...card, quantity: Math.max(0, card.quantity + delta)} : card))
  }

  const handleRemove = (id) => {
    setCards((previous) => previous.filter(card => card.id !== id))
  }

  return (
      <>
        <main className="app">
          <header className="app-header">
            <h1>Ma collection TCG</h1>
            <Summary cards={cards} />
          </header>
          <SearchBar query={query} onQueryChange={setQuery} rarity={rarity} onRarityChange={setRarity}/>
          <Panel title={`Mes cartes (${visibleCards.length} / ${cards.length})`}>
            <div className="grid">
                <CardGrid cards={visibleCards} onQuantityChange={handleQuantityChange} onRemove={handleRemove}/>
            </div>
          </Panel>
        </main>
      </>
  )
}

export default App
