import React from "react";
import '../../AllThings.css'
import OneCard from "./OneCard";

function ListOfCards({game,pep,players,teams,nat,Klopp}) {
  return (
    <div>
      <OneCard game={game} pep={pep} players={players} teams={teams} nat={nat} Klopp={Klopp}/>
    </div>
  );
}

export default ListOfCards;
