import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";


export default function Contact() {
    return (
        <Container>
            <Row style={{ marginBottom: '2rem' }}>
                <div className="contact-main-container">
                    <Col>
                        <p className='contact-text'>For pricing or inquiries, please contact me using any of the options below:</p>
                        <div className="contact-credentials">
                            {/* Call Now */}
                            <div className="call-now-container">
                                <p className="call-text">TAKE A FREE CALL</p>
                                <a href="tel: +923074079459" rel="noreferrer" title="+92 311 8478658" style={{ color: 'white', textDecoration: 'none' }}><button type="button" className="phone_call_button btn btn-primary" style={{ display: 'flex', alginItems: 'center' }}><span style={{ paddingRight: '10px', display: 'flex', alginItems: 'center' }}>
                                    <FaPhone />
                                </span>CALL NOW</button></a>
                            </div>

                            {/* Contact on Email */}
                            <div className="call-now-container">
                                <p className="call-text">SEND AN EMAIL NOW</p>
                                <a href="mailto:mubbasher.yasin.02@gmail.com?subject= Need help?" rel="noreferrer" title="mubbasher.yasin.02@gmail.com" style={{ color: 'white', textDecoration: 'none' }}><button type="button" className="phone_call_button btn btn-primary" style={{ display: 'flex', alginItems: 'center' }}><span style={{ paddingRight: '10px', display: 'flex', alginItems: 'center' }}>
                                    <MdOutlineMailOutline />
                                </span>EMAIL NOW</button></a>
                            </div>

                            {/* Contact on WhatsApp */}
                            <div className="call-now-container">
                                <p className="call-text">CONTACT ON WHATSAPP</p>
                                <a href="https://wa.me/923118478658/?text=Hey! Can you help me?" rel="noreferrer" title="+92 311 8478658" style={{ color: 'white', textDecoration: 'none' }}><button type="button" className="phone_call_button btn btn-primary" style={{ display: 'flex', alginItems: 'center' }}><span style={{ paddingRight: '10px', display: 'flex', alginItems: 'center' }}>
                                    <IoLogoWhatsapp />
                                </span>INBOX NOW</button></a>
                            </div>
                        </div>
                    </Col>
                </div>

            </Row>

            {/* Calendly: Book A Meeting */}
            <div className="calendly-inline-widget" data-url="https://calendly.com/mubbasher-yasin/30min" style={{ minWidth: '320px', height: '670px' }}></div>


            {/* Contact Handles */}
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
    )
}
