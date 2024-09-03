import React from 'react';
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import { FaUserCircle, FaEnvelope, FaLock } from 'react-icons/fa';
import classe from '../assets/css/Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container fluid className={"vh-100 d-flex align-items-center justify-content-center " +classe.bg}>
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card className={"p-4 shadow "+classe.transparent}>
            <div className="text-center mb-4">
              <FaUserCircle size={60} color="#ffffff" />
            </div>
            <h3 className="text-center mb-4 text-light">Login</h3>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className='text-light'>Email address</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaEnvelope />
                  </InputGroup.Text>
                  <Form.Control type="email" placeholder="Enter email" />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label className='text-light'>Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaLock />
                  </InputGroup.Text>
                  <Form.Control type="password" placeholder="Password" />
                </InputGroup>
              </Form.Group>

              <Button variant="outline-light" type="submit" className="w-100 mt-4">
                Login
              </Button>

              <div className="d-flex justify-content-between mt-3">
                <a href="#" className="text-light">Forgot Password?</a>
                <Link to={'/register'} className="text-light">Register</Link>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login
