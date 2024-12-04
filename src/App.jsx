import charData from "./assets/cluedo-note.json";
import DataSection from "./components/DataSection";
import PlayerSection from "./components/PlayerSection";

function App() {

  const cluedoElements = charData;
  console.log(cluedoElements);

  return (
    <>
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
    </>
  );
}

export default App;