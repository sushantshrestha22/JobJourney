import React from "react";
import { Container, Form, Image, Button, Row, Col } from "react-bootstrap";
import Imag from "../image/image1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link, Outlet } from "react-router-dom";

export default function Login() {
  return (
    <Container fluid="md" class="d-flex ">
      <Row>
        <Col>
          <Image src={Imag} alt="" class="w-50"></Image>
        </Col>
        <Col>
          <h1 class="text-primary hello">Jobjourney</h1>
          <h3>cheers !!! to the new start</h3>
          <hr></hr>
          <Form method="POST" action="http://127.0.0.1:8000/home/">
            <Form.Group>
              <Form.Label for="email">Email</Form.Label>
              <Form.Control name="email" id="email"></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label for="password">Password</Form.Label>
              <Form.Control name="password" id="password"></Form.Control>
            </Form.Group>
            <Button type="submit">Login</Button>
            <Form.Text>
              Don’t have account? <Link to="/register">Register?</Link>
            </Form.Text>
          </Form>
        </Col>
      </Row>

      <Outlet />
    </Container>
  );
}
