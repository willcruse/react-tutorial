import React from "react"
import {Navbar, Nav} from "react-bootstrap"

const TopBar = () => {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Navbar.Brand href="#home">Kattistan Voting System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    );
}

export default TopBar