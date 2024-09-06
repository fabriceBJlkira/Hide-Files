import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import { FaUserCircle, FaEnvelope, FaLock } from 'react-icons/fa';
import classe from '../assets/css/Login.module.css';
import { Link } from 'react-router-dom';
import AxiosClient from '../api/AxiosClient';
import { useAuthContext } from '../contexts/AuthContext';

const Login = () => {

  /**
   * state fo our field in form
   */
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  /**
   * token
   */
  const {setToken} = useAuthContext()

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
      const response = AxiosClient.post('connection.php', formData);
      response.then((res)=> {
        if (res.status === 200) {
          // console.log(res.data.user);
          setToken(JSON.stringify(res.data.user));
        }
      }).catch((error) => {
        console.log(error);
      });
    } else {
      setErrors(formErrors);
    }
  }
  return (
    <Container fluid className={"vh-100 d-flex align-items-center justify-content-center " +classe.bg}>
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card className={"p-4 shadow "+classe.transparent}>
            <div className="text-center mb-4">
              <FaUserCircle size={60} color="#ffffff" />
            </div>
            <h3 className="text-center mb-4 text-light">Login</h3>
            <Form onSubmit={formSubmit}>
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

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label className='text-light'>Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaLock />
                  </InputGroup.Text>
                  <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} />
                </InputGroup>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
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
