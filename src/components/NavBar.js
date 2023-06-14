import React from 'react'
import styles from '../styles/NavBar.module.css'
import { Nav, Navbar, Container, Image } from 'react-bootstrap'
import logo from '../assets/logo.png'

const NavBar = () => {
    return <Navbar className={styles.NavBar} expand="md" fixed="top">
        <Container>
            <Navbar.Brand href="#home"><Image src={logo} alt="logo" height="45" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="ml-auto text-center" navbarScroll>
                    <Nav.Link href="#home">
                        <i class="fa-solid fa-house-chimney"></i>
                        <br />
                        Home
                    </Nav.Link>
                    {/* User Authenticated */}
                    <Nav.Link href="#boosted">
                        <i class="fa-solid fa-rocket"></i>
                        <br />
                        Boosted
                    </Nav.Link>
                    <Nav.Link href="#requests">
                        <i class="fa-solid fa-envelope"></i>
                        <br />
                        Requests
                    </Nav.Link>
                    <Nav.Link href="#logout">
                        <i class="fa-solid fa-user-minus"></i>
                        <br />
                        Logout
                    </Nav.Link>
                    <Nav.Link href="#profile">
                        <i class="fa-solid fa-user"></i>
                        <br />
                        User Avatar
                    </Nav.Link>
                    {/* User Authenticated End */}

                    {/* User Not Authenticated */}
                    <Nav.Link href="#signin">
                        <i class="fa-solid fa-user"></i>
                        <br />
                        Sign In
                    </Nav.Link>
                    <Nav.Link href="#signup">
                        <i class="fa-solid fa-user-plus"></i>
                        <br />
                        Sign Up
                    </Nav.Link>
                    {/* User Not Authenticated */}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavBar