import './AllThings.css'
import { Route, Routes } from "react-router-dom";
import game from './DB/ListOfGames.json'
import players from './DB/player'
import teams from './DB/Teams'
import nat from './DB/Nat'
import {pep} from './DB/Coaches'
import {Klopp} from './DB/Coaches'
import ListOfGames from "./Components/bingoOne/ListOfGames";
import ChooseSingleOrMulti from "./Components/bingoOne/ChooseSingleOrMulti";
import ListOfCards from "./Components/bingoOne/ListOfCards";
import CreateRoom from "./Components/bingoOne/CreateRoom";
import JoinRoom from "./Components/bingoOne/JoinRoom";
import ShareTheCode from "./Components/bingoOne/ShareTheCode";

function App() {
  // game={game} pep={pep} players={players} teams={teams} nat={nat} Klopp={Klopp}
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <ListOfGames game={game}/> } />
        {/* bingo */}
        <Route path="BingoGame" element={ <ChooseSingleOrMulti/> }/>
        <Route path="singlePlayer" element={<ListOfCards game={game} pep={pep} players={players} teams={teams} nat={nat} Klopp={Klopp}/>}/>
        <Route path="MultiPlayer" element={<div> <CreateRoom/> <JoinRoom/></div>}/>
        <Route path="ShareCode" element={<ShareTheCode/>}/>
        <Route path="StartPlay" element={<ListOfCards game={game} pep={pep} players={players} teams={teams} nat={nat} Klopp={Klopp}/>}/>
        <Route path="StartMultiGame" element={<ListOfCards game={game} pep={pep} players={players} teams={teams} nat={nat} Klopp={Klopp}/>}/>
        {/* XO */}
        <Route path='/xo' element={<listOfChoices/>}/>
      </Routes>
    </div>
  );
}

export default App;
