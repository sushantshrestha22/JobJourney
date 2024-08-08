import React from "react";
import { useEffect, useState } from "react";
import { Container, Form, Image, Button, Row, Col } from "react-bootstrap";
import Imag from "../image/image1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link, Outlet } from "react-router-dom";

export default function Register() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, seterrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    seterrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 letters";
    }

    if (data.confirm !== data.password) {
      errors.confirm = "Passwords doesnot match";
    }

    return errors;
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
            <Form
              method="POST"
              onSubmit={handleSubmit}
              action="http://127.0.0.1:8000/register/"
            >
              <Row className="mt-2">
                {/* <Form.Group>
                  <Form.Label for="username">Username</Form.Label>
                  <Form.Control
                    name="username"
                    id="username"
                    type="text"
                    required
                  ></Form.Control>
                </Form.Group> */}
                <Form.Group>
                  <Form.Label for="email">Email</Form.Label>
                  <Form.Control
                    name="email"
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  ></Form.Control>
                  {errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
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
                    value={formData.password}
                    onChange={handleChange}
                  ></Form.Control>
                  {errors.password && (
                    <span className="text-danger">{errors.password}</span>
                  )}
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
                    value={formData.confirm}
                    onChange={handleChange}
                  ></Form.Control>
                  {errors.confirm && (
                    <span className="text-danger">{errors.confirm}</span>
                  )}
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
