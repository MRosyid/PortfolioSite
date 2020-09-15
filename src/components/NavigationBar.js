import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Adding navigation bar
class NavigationBar extends Component {
    render() {
        return (
            <div className="navigation-bar d-flex justify-content-end">
                <Navbar expand="sm">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Item>
                                <NavLink className="nav-item" to="/">Projects</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className="nav-item" to="/resume">About Me</NavLink>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;