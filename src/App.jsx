import charData from "./assets/cluedo-note.json";
import PlayerSection from "./components/PlayerSection";

function App() {

  const cluedoElements = charData;
  console.log(cluedoElements);

  return (
    <>
      <PlayerSection tableSection={cluedoElements.players} />
    </>
  );
}

export default App;