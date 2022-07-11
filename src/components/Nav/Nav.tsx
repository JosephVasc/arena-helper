import React from 'react';
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class NavBar extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  render() {
    return (
        <NavbarBs sticky="top" className="bg-gradient-dark   shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              <FontAwesomeIcon icon={faBars} />
            </Nav.Link>
            <Nav.Link to="/leaderboard" as={NavLink}>
              <FontAwesomeIcon icon={faTrophy} />
            </Nav.Link>
            <Nav.Link to="/search" as={NavLink}>
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link to="/leaderboard" as={NavLink}>
              <Button variant="outline-dark" onClick={this.scrollToTop}>
                Leaderboard
              </Button>
            </Nav.Link>
          </Nav>
          </Container>
          </NavbarBs>
    );
    }
};



