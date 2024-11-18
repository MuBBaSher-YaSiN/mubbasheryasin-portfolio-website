import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";

function Footer() {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <Container fluid className="footer">
      <div className='footer-container-div'>
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Mubbasher Yasin</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} MY</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">

              {/* Fiverr */}
              <li className="social-icons">
                <a
                  href="https://fiverr.com/mubbashir_yasin"
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandFiverr />
                </a>
              </li>

              {/* Upwork */}
              <li className="social-icons">
                <a
                  href="https://www.upwork.com/freelancers/~01f0949d7df89ab9ed"
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiUpwork />
                </a>
              </li>

              {/* Github */}
              <li className="social-icons">
                <a
                  href="https://github.com/MuBBaSher-YaSiN/"
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/* LinkedIn */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mubbasher-yasin/"
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/* Instagram */}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mubbasher_yasin/"
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Footer;
