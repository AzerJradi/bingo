import React from "react";
import '../../AllThings.css'
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ChooseSingleOrMulti() {
  return (
    <div>
      {/* single Player */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Single Player Mood</Card.Title>
          <Card.Text>
                You can play by yourself to improve your football knowledge
          </Card.Text>
          <Link to="/singlePlayer"><Button variant="primary">play Now</Button></Link>
        </Card.Body>
      </Card>

      {/* MultiPlayer */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Multi Player Mood</Card.Title>
          <Card.Text>
                create or join a party to play with your friends.
          </Card.Text>
          <Link to="/MultiPlayer"><Button variant="primary">play Now</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ChooseSingleOrMulti;
