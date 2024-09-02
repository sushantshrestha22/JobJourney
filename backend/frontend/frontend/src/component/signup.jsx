import React from "react";
import { useState } from "react";
import { Container, Form, Image, Button, Row, Col } from "react-bootstrap";
import Imag from "../image/image1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link, Outlet } from "react-router-dom";

export default function Register() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch("http://127.0.0.1:8000/register/", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      window.location.href = data.redirect;
    } else {
      setErrorMessage(data.error1 || data.error || data.error2);
    }
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
            <h3>Cheers !!! to the new start</h3>
          </Row>
          <hr />
          <Row>
            <Form method="POST" onSubmit={handleSubmit}>
              <Row className="mt-2">
                <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
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
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control
                    name="password"
                    id="password"
                    type="password"
                    required
                  ></Form.Control>
                </Form.Group>
              </Row>
              <Row className="mt-2">
                <Form.Group>
                  <Form.Label htmlFor="confirm">Confirm Password</Form.Label>
                  <Form.Control
                    name="confirm"
                    id="confirm"
                    type="password"
                    required
                  ></Form.Control>
                </Form.Group>
              </Row>
              {errorMessage && (
                <Row>
                  <Col>
                    <div className="alert alert-danger">{errorMessage}</div>
                  </Col>
                </Row>
              )}
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
