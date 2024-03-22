import React from "react";
import '../AllThings.css';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListOfGames({game}) {
  return (
    <div>
      <p className="listOfGame-Title">Welcome to the best football website</p>
        <div className="listOfGame-Games">
          {game.map(game => (
                <Card className="eachGame" style={{ width: "30%", height:"280px" }}>
                <Card.Body>
          <Card.Title><p className="listOfGameTitle">{game.titleOfGame}</p></Card.Title>
          <Card.Text>
              {game.desGame}
          </Card.Text>
          <Link to= "/BingoGame"><Card.Link className="listOfGameBtn">Play</Card.Link></Link>
                </Card.Body>
              </Card>
                ))}
        </div>
    </div>
  );
}

export default ListOfGames;
