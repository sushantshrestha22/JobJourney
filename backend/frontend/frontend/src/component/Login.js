import React from "react";
import { Container, Form, Image, Button } from "react-bootstrap";
import Imag from "../image/image1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function Login() {
  return (
    <Container fluid="md" class=" d-flex ">
      <Image src={Imag} alt="" class="w-50"></Image>
      <Container fluid class="w-50">
        <h1 class="text-primary hello">Jobjourney</h1>
        <h3>cheers !!! to the new start</h3>
        <hr></hr>
        <Form method="POST" action="login">
          <Form.Group>
            <Form.Label for="email">Email</Form.Label>
            <Form.Control name="email" id="email"></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label for="password">Password</Form.Label>
            <Form.Control name="password" id="password"></Form.Control>
          </Form.Group>
        </Form>
        <Button type="submit">login</Button>
        <Form.Text>
          Don’t have account? <a href="#login">Register? </a>
        </Form.Text>
      </Container>
    </Container>
  );
}
