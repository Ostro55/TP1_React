import './domain/card';
import {collectionValue, copyCount, SAMPLE_CARDS} from "./domain/card.js";
function App() {

  return (
      <>
        <main className="app">
          <header className="app-header">
            <h1>Ma collection TCG</h1>
              <p className="summary">{SAMPLE_CARDS.length} cartes · {copyCount(SAMPLE_CARDS)} exemplaires · {collectionValue(SAMPLE_CARDS)} €.</p>
          </header>
        </main>
      </>
  )
}

export default App
