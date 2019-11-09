import React from "react"
import {Navbar, Nav} from "react-bootstrap"

const TopBar = () => {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Navbar.Brand href="#home">Kattistan Voting System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TopBar