import React from 'react'
import '../../AllThings.css'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function JoinRoom() {
  return (
    <>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Join The Room</Form.Label>
        <Form.Control type='text' placeholder="Enter Your Name" />
        <Form.Control type='number' placeholder="Enter The Code" />
      </Form.Group>
      <Link to="/StartPlay">
        <Button variant="primary" type="submit">
          Join
        </Button>
      </Link>
    </Form>
    </>
  )
}

export default JoinRoom
