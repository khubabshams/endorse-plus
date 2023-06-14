import React from 'react'
import { Nav, Navbar, Container, Image } from 'react-bootstrap'
import logo from '../assets/logo.png'

const NavBar = () => {
    return <Navbar bg="light" expand="md" fixed="top">
        <Container>
            <Navbar.Brand href="#home"><Image src={logo} alt="logo" height="45" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#signin">Sign In</Nav.Link>
                    <Nav.Link href="#signup">Sign Up</Nav.Link>
                    {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavBar