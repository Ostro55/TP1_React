import './domain/card';
import './components/CardTile';
import {SAMPLE_CARDS} from "./domain/card.js";
import Panel from "./components/Panel.jsx";
import CardGrid from "./components/CardGrid.jsx";
import {useState} from "react";
import Summary from "./components/Summary.jsx";

function App() {

  const [cards, setCards] = useState(SAMPLE_CARDS)

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
          <Panel title="Mes cartes">
            <div className="grid">
                <CardGrid cards={cards} onQuantityChange={handleQuantityChange} onRemove={handleRemove}/>
            </div>
          </Panel>
        </main>
      </>
  )
}

export default App
