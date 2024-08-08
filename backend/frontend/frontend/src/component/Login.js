import React, { useEffect, useState } from "react";
import { Container, Form, Image, Button, Row, Col } from "react-bootstrap";
import Imag from "../image/image1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link, Outlet } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({ message: "" });
  const [clicked, setClicked] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setClicked(true);
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/go/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container fluid="md" class="d-flex ">
      <Row>
        <Col>
          <Image src={Imag} alt="" class="w-50"></Image>
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <Row>
            {clicked && data.message && (
              <h3 className="text-danger">{data.message}</h3>
            )}
            <h1 class="text-primary hello">Jobjourney</h1>
          </Row>
          <Row>
            <h3>Cheers !!! to the new start</h3>
          </Row>
          <hr />
          <Row>
            <Form
              method="POST"
              action="http://127.0.0.1:8000/home/"
              onSubmit={handleSubmit}
            >
              <Row>
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
                </Form.Group>
              </Row>

              <Row>
                <Col>
                  <Button type="submit" className="w-100 mt-3">
                    Login
                  </Button>
                </Col>
              </Row>
              <Row className="mt-3">
                <Form.Text>
                  Don’t have account? <Link to="/register">Register?</Link>
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
