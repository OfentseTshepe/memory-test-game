
import GameBoard from "./Components/GameBoard/GameBoard";
import Navbar from "./Components/Navbar/Navbar";
import ScoreBoard from "./Components/ScoreBoard/ScoreBoard";
import StartButton from "./Components/StartButton/StartButton";
import ModalMessage from "./Components/ModalMessage/ModalMessage";
import {DataProvider} from "./GameContext";


function App() {
  return (
    <div>
      <DataProvider>
        <Navbar />
        <ScoreBoard />
        <GameBoard />
        <StartButton/>
        <ModalMessage/>
      </DataProvider>

    </div>
  );
}

export default App;
