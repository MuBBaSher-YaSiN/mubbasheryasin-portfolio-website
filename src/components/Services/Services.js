import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCards";
import Particle from "../Particle";
import { IoLogoWhatsapp } from "react-icons/io5";
import ReactGA from "react-ga";

function Services() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    return (
        <Container fluid className="project-section">
            <Particle />
            <div className="navbar-container-div">
                <h1 className="project-heading">
                    Unlock Your <strong className="purple">Digital Potential </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Your One-Stop Solutions for Digital Marketing & Web Development Services.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ServiceCard
                            isBlog={false}
                            title="Custom Web Development"
                            description="Create high-performing, secure web applications with end-to-end Full Stack Development."
                            descriptionList={[
                                "Full Stack Web Development",
                                "Scalable, High-Security Architecture",
                                "Custom API Integration",
                                "Database Design & Management",
                                "Advanced Code & Performance Optimization",
                                "Responsive and Mobile-First Design",
                                "Cutting-Edge Technology Integration",
                            ]}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ServiceCard
                            isBlog={false}
                            title="Design to Web"
                            description="Turn your PSD, Figma, or Sketch designs into fully functional websites with precision."
                            descriptionList={[
                                "PSD/Figma to HTML & React",
                                "Pixel-Perfect, SEO-Friendly Conversions",
                                "Web Accessibility & Mobile Responsiveness",
                                "Figma to Next.js",
                                "WordPress Speed Optimization",
                                "Interactive & Dynamic Elements",
                                "Performance-Focused Conversions",
                            ]}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ServiceCard
                            isBlog={false}
                            title="SEO Optimization & Growth"
                            description="Drive organic traffic and maximize visibility with professional SEO strategies."
                            descriptionList={[
                                "Keyword Research & SEO Audits",
                                "On-Page, Off-Page & Technical SEO",
                                "Content Optimization & Analytics",
                                "Local SEO & Conversion Rate Optimization",
                                "User Engagement & Traffic Growth",
                                "SEO-Friendly Code & Structure",
                                "Comprehensive SEO Reporting",
                            ]}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ServiceCard
                            isBlog={false}
                            title="Google & Meta Ads"
                            description="Boost brand awareness and drive sales with targeted Google and Meta ad campaigns."
                            descriptionList={[
                                "Google Ads Strategy & Optimization",
                                "Facebook & Instagram Ad Management",
                                "Custom Ad Campaigns for Your Audience",
                                "Keyword Planning & Ad Analytics",
                                "Conversion Tracking & Optimization",
                                "Data-Driven Campaign Adjustments",
                                "Retargeting & Customer Engagement",
                            ]}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ServiceCard
                            isBlog={false}
                            title="Industry-Specific Solutions"
                            description="Tailored web solutions for unique industry needs, driving targeted results."
                            descriptionList={[
                                "Custom LMS, Real Estate, and eCommerce Sites",
                                "Event Booking & Subscription Solutions",
                                "Community Forums & Membership Sites",
                                "Interactive User Interface Design",
                                "SEO-Enhanced Industry Solutions",
                                "Secure, Scalable Architecture",
                                "Advanced Features for Enhanced UX",
                            ]}
                        />
                    </Col>


                    <Col md={4} className="project-card">
                        <ServiceCard
                            isBlog={false}
                            title="Web Mastery Coaching"
                            description="Learn and grow with personalized coaching in Full Stack and SEO-friendly development."
                            descriptionList={[
                                "HTML, CSS, JavaScript, React, Node, Firebase & More",
                                "Real-World Project Guidance",
                                "Mastering SEO for Developers",
                                "Tailored Learning Plans",
                                "Hands-On Problem-Solving Skills",
                            ]}
                        />
                    </Col>
                </Row>
                <div className="services-call-now">
                    <p className="call-text">Need any of above or different service? Text Now</p>
                    <a href="https://wa.me/923118478658/?text=Hey! Can you help me?" rel="noreferrer" title="+92 311 8478658" style={{ color: 'white', textDecoration: 'none' }}><button type="button" className="phone_call_button btn btn-primary" style={{ display: 'flex', alginItems: 'center' }}><span style={{ paddingRight: '10px', display: 'flex', alginItems: 'center' }}>
                        <IoLogoWhatsapp />
                    </span>INBOX NOW </button></a>
                </div>

                {/* Calendly: Book A Meeting */}
                <div className="calendly-inline-widget" data-url="https://calendly.com/mubbasher-yasin/30min" style={{ minWidth: '320px', height: '670px' }}></div>

            </div>
        </Container>
    );
}

export default Services;
