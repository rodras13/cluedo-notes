import { TABLE_DATA } from "./assets/cluedo-note";
import DataSection from "./components/DataSection";
import PlayerSection from "./components/PlayerSection";

function App() {

  const cluedoElements = TABLE_DATA;

  return (
    <main className="p-2 max-w-[375px] min-w-[344px]">
      <PlayerSection
        tableSection={cluedoElements.players}
        title={"Jugadores"}
      />
      <DataSection
        dataObject={cluedoElements.who}
        title={"¿Quíen?"}
      />
      <DataSection
        dataObject={cluedoElements.what}
        title={"¿Con qué arma?"}
      />
      <DataSection
        dataObject={cluedoElements.where}
        title={"¿Dónde?"}
      />
    </main>
  );
}

export default App;