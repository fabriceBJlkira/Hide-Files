import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, InputGroup  } from 'react-bootstrap';
import { FaUserPlus, FaUser, FaEnvelope, FaLock, FaLockOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import classe from '../assets/css/Login.module.css';
import AxiosClient from '../api/AxiosClient';

const Register = () => {

  /**
   * state fo our field in form
   */
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  /**
   * state of our validation
   */
  const [errors, setErrors] = useState({});

  /**
   * function who change the state when user fill each field in form
   * @param {*} e
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   * ours validation
   * @returns json
   */
  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Password confirmation is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  /**
   * function to submit the form
   * @param {*} e
   */
  const formSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      const response = AxiosClient.post('insertUser.php', formData);
      console.log(response);
    } else {
      setErrors(formErrors);
    }
  }
  return (
    <Container fluid className={"vh-100 d-flex align-items-center justify-content-center " +classe.bg}>
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className={"p-4 shadow "+classe.transparent}>
            <div className="text-center mb-4">
              <FaUserPlus size={60} color="#ffffff" />
            </div>
            <h3 className="text-center mb-4 text-light">Register</h3>
            <Form onSubmit={formSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label className='text-light'>Username</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaUser />
                      </InputGroup.Text>
                      <Form.Control type="text" name='username' onChange={handleChange} placeholder="Enter username" />
                    </InputGroup>
                    {errors.username && <span className='text-danger'>{errors.username}</span>}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className='text-light'>Email address</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaEnvelope />
                      </InputGroup.Text>
                      <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} />
                    </InputGroup>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
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
                      <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} />
                    </InputGroup>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label className='text-light'>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaLockOpen />
                      </InputGroup.Text>
                      <Form.Control type="password" name="confirmPassword" placeholder="Confirm password" onChange={handleChange} />
                    </InputGroup>
                    {errors.confirmPassword && <span className='text-danger'>{errors.confirmPassword}</span>}
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
