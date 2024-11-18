import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am Website Developer, CMS (WordPress & Shopify) Developer and Digital Marketing Specialist 🤷‍♂️
              <br />
              <br />Proficient in
              <i>
                <b className="purple"> JavaScript, TypeScript, React and Next JS. </b>
              </i>
              <br />
              <br />
              My field of Interest is to drive business growth through strategic marketing for my loyal clients. I specialize in &nbsp;
              <i>
                <b className="purple">Web Technologies, Development, SEO, Google Ads, and Meta Ads{' '}
                </b>{' '}
              </i>
              <br />
              <br />
              My passion lies in building web technologies and exploring areas like <i><b className="purple">Deep Learning, Natural Language Processing </b> and </i>
              <i>
                <b className="purple"> Artificial Intelligence</b>
              </i>
              <br />
              I also enjoy developing products using &nbsp;
              <i>
                <b className="purple">Node.js, Firebase, and frontend modern frameworks
                </b>
                like <b className='purple'>React.js and Next.js</b>
                {' '}
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* Calendly: Book A Meeting */}
        <div className="calendly-inline-widget" data-url="https://calendly.com/mubbasher-yasin/30min" style={{ minWidth: '320px', height: '670px' }}></div>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://fiverr.com/mubbashir_yasin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <TbBrandFiverr />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.upwork.com/freelancers/~01f0949d7df89ab9ed"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiUpwork />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/MuBBaSher-YaSiN/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mubbasher-yasin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mubbasher_yasin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
