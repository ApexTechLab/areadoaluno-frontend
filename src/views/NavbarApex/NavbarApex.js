import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { NavItem } from 'react-bootstrap';
class NavbarApex extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Área do Aluno | Apex</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Turmas" id="collasible-nav-dropdown">
                <LinkContainer to="/class">
                  <NavItem>Listar</NavItem>
                </LinkContainer>
                <LinkContainer to="/class/create">
                  <NavItem>Cadastrar</NavItem>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Alunos" id="collasible-nav-dropdown">
                <LinkContainer to="/student/list">
                  <NavItem>Listar</NavItem>
                </LinkContainer>
                <LinkContainer to="/student/create">
                  <NavItem>Cadastrar</NavItem>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }

}

export default NavbarApex;