
import GameBoard from "./Components/GameBoard/GameBoard";
import Navbar from "./Components/Navbar/Navbar";
import ScoreBoard from "./Components/ScoreBoard/ScoreBoard";
import StartButton from "./Components/StartButton/StartButton";
import ModalMessage from "./Components/ModalMessage/ModalMessage";
import {DataProvider} from "./GameContext";
import InstructionsModal from "./Components/ModalMessage/Instructions";


function App() {
  return (
    <div>
      <DataProvider>
        <Navbar />
        <ScoreBoard />
        <GameBoard />
        <StartButton/>
        <ModalMessage/>
        <InstructionsModal/>
      </DataProvider>

    </div>
  );
}

export default App;
