import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
    return (
        <div>
            {/* <Link to='/' className="text-warning m-3">Home</Link>
            <Link to='/converter' className="text-warning m-3">Converter</Link> */}
            {/* <Navbar>
                <Container>
                    <Link to='/' title="Converter">
                        <Navbar.Brand>
                            <img
                                src="/logo/converter-logo.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </Link>
                    <NavDropdown title="Dropdown123" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar> */}
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to='/' title="Converter">
                        <Navbar.Brand>
                            <img
                                src="/logo/converter-logo.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Converter" id="basic-nav-dropdown">
                                <NavDropdown.Item>Converter</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.1">Audio</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Video</NavDropdown.Item>
                                <Link to="/mp4-to-mp3"><NavDropdown.Item>MP4 to MP3</NavDropdown.Item></Link>

                            </NavDropdown>
                            <NavDropdown className="" title="Tools" id="basic-nav-dropdown">
                                <NavDropdown.Item>Compressor</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.1">Video</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;