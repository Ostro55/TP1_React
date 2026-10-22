import './domain/card';
import './components/CardTile';
import {collectionValue, copyCount, SAMPLE_CARDS} from "./domain/card.js";
import Panel from "./components/Panel.jsx";
import CardGrid from "./components/CardGrid.jsx";

function App() {

  return (
      <>
        <main className="app">
          <header className="app-header">
            <h1>Ma collection TCG</h1>
              <p className="summary">{SAMPLE_CARDS.length} cartes · {copyCount(SAMPLE_CARDS)} exemplaires · {collectionValue(SAMPLE_CARDS)} €.</p>
          </header>
          <Panel title="Mes cartes">
            <div className="grid">
                <CardGrid cards={SAMPLE_CARDS} />
            </div>
          </Panel>
        </main>
      </>
  )
}

export default App
