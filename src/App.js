import './AllThings.css'
import { Route, Routes } from "react-router-dom";
import game from './DB/ListOfGames.json'
import players from './DB/player'
import teams from './DB/Teams'
import nat from './DB/Nat'
import {pep} from './DB/Coaches'
import {Klopp} from './DB/Coaches'
import ListOfGames from "./Components/ListOfGames";
import ChooseSingleOrMulti from "./Components/ChooseSingleOrMulti";
import ListOfCards from "./Components/ListOfCards";
import CreateRoom from "./Components/CreateRoom";
import JoinRoom from "./Components/JoinRoom";
import ShareTheCode from "./Components/ShareTheCode";

function App() {
  // game={game} pep={pep} players={players} teams={teams} nat={nat} Klopp={Klopp}
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <ListOfGames game={game}/> } />
        <Route path="BingoGame" element={ <ChooseSingleOrMulti/> }/>
        <Route path="singlePlayer" element={<ListOfCards game={game} pep={pep} players={players} teams={teams} nat={nat} Klopp={Klopp}/>}/>
        <Route path="MultiPlayer" element={<div> <CreateRoom/> <JoinRoom/></div>}/>
        <Route path="ShareCode" element={<ShareTheCode/>}/>
        <Route path="StartPlay" element={<ListOfCards game={game} pep={pep} players={players} teams={teams} nat={nat} Klopp={Klopp}/>}/>
        <Route path="StartMultiGame" element={<ListOfCards game={game} pep={pep} players={players} teams={teams} nat={nat} Klopp={Klopp}/>}/>
      </Routes>
    </div>
  );
}

export default App;
