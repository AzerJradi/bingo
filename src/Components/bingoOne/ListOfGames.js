import React from "react";
import '../../AllThings.css'
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListOfGames({game}) {
  return (
    <div>
      <p className="listOfGame-Title">Welcome to the best football website</p>
        <div className="listOfGame-Games">
                <Card className="eachGame" style={{ width: "30%", height:"280px" }}>
                <Card.Body>
          <Card.Title><p className="listOfGameTitle">Bingo</p></Card.Title>
          <Card.Text>
          Football Bingo challenges players to match randomly appearing footballers to one of the 16 categories on a bingo card until either the card is completed or all footballers are exhausted.
          </Card.Text>
          <Link to= "/BingoGame"><Card.Link className="listOfGameBtn">Play</Card.Link></Link>
                </Card.Body>
              </Card>

              <Card className="eachGame" style={{ width: "30%", height:"280px" }}>
                <Card.Body>
          <Card.Title><p className="listOfGameTitle">X O</p></Card.Title>
          <Card.Text>
          X O: a football-themed tic-tac-toe game to play with friends locally or online, featuring grids based on football clubs, nations, trophies, and awards; challenge opponents worldwide or play against the clock; choose from European leagues or specific divisions; use steals for added challenge.
          </Card.Text>
          <Link to= "/xo"><Card.Link className="listOfGameBtn">Play</Card.Link></Link>
                </Card.Body>
              </Card>
        </div>
    </div>
  );
}

export default ListOfGames;
