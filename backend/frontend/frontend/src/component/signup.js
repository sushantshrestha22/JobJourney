import React from "react";
import { useState } from "react";
import { Container, Form, Image, Button, Row, Col } from "react-bootstrap";
import Imag from "../image/image1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link, Outlet } from "react-router-dom";

export default function Register() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container fluid="md" class="d-flex ">
      <Row>
        <Col>
          <Image src={Imag} alt="" class="w-50"></Image>
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <Row>
            <h1 class="text-primary hello">Jobjourney</h1>
          </Row>
          <Row>
            <h3>cheers !!! to the new start</h3>
          </Row>
          <hr />
          <Row>
            <Form method="POST" action="" onSubmit={handleSubmit} noValidate validated={validated}>
              <Row>
                <Form.Group>
                  <Form.Label for="username">Username</Form.Label>
                  <Form.Control
                    name="username"
                    id="username"
                    type="text"
                    required
                  ></Form.Control>
                </Form.Group>
              </Row>
              <Row className="mt-2">
                <Form.Group>
                  <Form.Label for="email">Email</Form.Label>
                  <Form.Control
                    name="email"
                    id="email"
                    type="email"
                    required
                  ></Form.Control>
                </Form.Group>
              </Row>

              <Row className="mt-2">
                <Form.Group>
                  <Form.Label for="password">Password</Form.Label>
                  <Form.Control
                    name="password"
                    id="password"
                    type="password"
                    required
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    password must have more than 4 letters
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mt-2">
                <Form.Group>
                  <Form.Label for="confirm">Confirm Password</Form.Label>
                  <Form.Control
                    name="confirm"
                    id="confirm"
                    type="password"
                    required
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    password doesn't match
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
                  <Button type="submit" className="w-100 mt-3">
                    Signup
                  </Button>
                
              <Row className="mt-3">
                <Form.Text>
                  Don’t have account? <Link to="/">Login?</Link>
                </Form.Text>
              </Row>
            </Form>
          </Row>
        </Col>
      </Row>

      <Outlet />
    </Container>
  );
}
