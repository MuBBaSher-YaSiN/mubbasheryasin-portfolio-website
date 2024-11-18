import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai'
import { IoMdContact } from "react-icons/io";
import { CgFileDocument } from 'react-icons/cg'
import { RiCustomerService2Fill } from "react-icons/ri";

function NavBar() {
  const [expand, updateExpanded] = useState(false)
  const [navColour, updateNavbar] = useState(false)

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true)
    } else {
      updateNavbar(false)
    }
  }

  window.addEventListener('scroll', scrollHandler)

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? 'sticky' : 'navbar'}
    >
      <div className='navbar-container-div'>
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <p
              style={{
                color: '#be50f4',
                margin: 'auto',
                fontWeight: '700',
                letterSpacing: '1px',
                fontSize: '20px',
              }}
            >
              Mubbasher Yasin
            </p>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : 'expanded')
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: '2px' }} /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} />{' '}
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >
                  <CgFileDocument style={{ marginBottom: '2px' }} /> Resume
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  onClick={() => updateExpanded(false)}
                >
                  <IoMdContact style={{ marginBottom: '2px' }} /> Contact
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/services"
                  onClick={() => updateExpanded(false)}
                >
                  <RiCustomerService2Fill style={{ marginBottom: '2px' }} /> Services
                </Nav.Link>
              </Nav.Item>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </div>
    </Navbar>
  )
}

export default NavBar
