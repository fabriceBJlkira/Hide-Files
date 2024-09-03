import React from 'react';
import { Container, Row, Col, Form, Button, Card, InputGroup  } from 'react-bootstrap';
import { FaUserPlus, FaUser, FaEnvelope, FaLock, FaLockOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import classe from '../assets/css/Login.module.css';

const Register = () => {
  return (
    <Container fluid className={"vh-100 d-flex align-items-center justify-content-center " +classe.bg}>
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className={"p-4 shadow "+classe.transparent}>
            <div className="text-center mb-4">
              <FaUserPlus size={60} color="#ffffff" />
            </div>
            <h3 className="text-center mb-4 text-light">Register</h3>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label className='text-light'>Username</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaUser />
                      </InputGroup.Text>
                      <Form.Control type="text" placeholder="Enter username" />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className='text-light'>Email address</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaEnvelope />
                      </InputGroup.Text>
                      <Form.Control type="email" placeholder="Enter email" />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className='text-light'>Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaLock />
                      </InputGroup.Text>
                      <Form.Control type="password" placeholder="Password" />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label className='text-light'>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaLockOpen />
                      </InputGroup.Text>
                      <Form.Control type="password" placeholder="Confirm password" />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="outline-light" type="submit" className="w-100 mt-4">
                Register
              </Button>

              <div className="text-center mt-3">
                <Link to={'/login'} className="text-light">Already have an account? Login</Link>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
