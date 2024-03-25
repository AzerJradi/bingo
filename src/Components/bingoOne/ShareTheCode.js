import React from "react";
import '../../AllThings.css'
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ShareTheCode() {
  return (
    <div>
      <Card>
        <Card.Header>Your code is:</Card.Header>
        <Card.Body>
          <Card.Title>Share this link with your friends:</Card.Title>
          <Card.Text>
            Link Generator
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">PlayeName has joined</Card.Subtitle>
          <Link to="StartMultiGame"><Button variant="primary">Start</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ShareTheCode;
