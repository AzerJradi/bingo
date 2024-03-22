import React from "react";
import '../AllThings.css';
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function CreateRoom() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Create a new room</Form.Label>
          <Card.Subtitle className="mb-2 text-muted">Host, invite and compete against your friends</Card.Subtitle>
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Link to="/ShareCode">
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Link>
      </Form>
    </>
  );
}

export default CreateRoom;
