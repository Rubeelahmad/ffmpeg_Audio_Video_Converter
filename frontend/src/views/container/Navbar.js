import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const style={
    navDropdown: {
        marginLeft: '50px',
    }
}

function NavbarComponent() {
    return (
        <div>
            {/* <Link to='/' className="text-warning m-3">Home</Link>
            <Link to='/converter' className="text-warning m-3">Converter</Link> */}
            <Navbar style={{backgroundColor: 'white'}} expand="lg">
                <Container>
                    <Link to='/' title="Converter">
                        <Navbar.Brand className="m-3">
                            <img
                                src="/logo/small-converter-logo.jpg"
                                width="200"
                                height="50"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto m-2">
                            <NavDropdown style={style.navDropdown} title="Converter" id="basic-nav-dropdown">
                                {/* <NavDropdown.Item>Converter</NavDropdown.Item> */}
                                {/* <NavDropdown.Divider /> */}
                                <NavDropdown.Item as={Link} to="/audio-converter">Audio</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/video-converter">Video</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/mp4-to-mp3">MP4 To MP3</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown style={style.navDropdown} title="Tools" id="basic-nav-dropdown">
                                {/* <NavDropdown.Item>Compressor</NavDropdown.Item> */}
                                {/* <NavDropdown.Divider /> */}
                                <NavDropdown.Item as={Link} to="/video-compressor">Video Compressor</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;