import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

function Navigation() {
  return (
    <div className="Navigation">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Link to="/main" className="nav-link" style={{ marginRight: '20px' }}>스케줄 등록</Link>
            <Link to="/solution" className="nav-link" style={{ marginRight: '25px' }}>솔루션</Link>
            <Link to="/event" className="nav-link">행사</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
