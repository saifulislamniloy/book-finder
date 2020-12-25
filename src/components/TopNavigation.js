import React, {Component, Fragment} from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {
    render() {
        return (
            <Fragment>
                <Container className="topNavigation">
                    <Navbar bg="primary" variant="dark"  fixed="top" collapseOnSelect expand="lg">
                        <Navbar.Brand href="/" href="#home">Book Finder</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                            </Nav>
                            <Nav >
                                <NavLink exact activeStyle={{color: '#002C42'}}  to="/">Home</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Fragment>
        );
    }
}

export default TopNavigation;