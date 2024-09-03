import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import classe from '../assets/css/DefaultLayout.module.css';

const DefaultLayout = () => {

  const exit = () => {
    window.close();
  };

  return (
    <Container fluid className={classe.container}>
      <Row>
        <Col xs={3} className={classe.sidebar}>
          <Nav className="flex-column">
            <Nav.Link as={Link} to={"#"} className={classe.link} >Video</Nav.Link>
            <Nav.Link as={Link} to={"#"} className={classe.link}>Photos</Nav.Link>
            <Nav.Link as={Link} to={"#"} className={classe.link}>Settings</Nav.Link>
            <Nav.Link as={Link} to={"#"} className={classe.link} onClick={exit}>exit App</Nav.Link>
          </Nav>
        </Col>
        <Col xs={9} className={classe.content}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}

export default DefaultLayout
