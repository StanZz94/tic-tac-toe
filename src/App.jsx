import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player1" symbol="X"/>
          <Player name="Player2" symbol="O"/>
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App
