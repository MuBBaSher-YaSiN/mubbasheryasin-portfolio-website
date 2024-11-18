import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import MubbasherResume from "../../Assets/Mubbasher-Resume.pdf"
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";


function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={MubbasherResume} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Digital Marketing & Website Manager at Midnight Comfort"
              date="May 2024 - Present"
              content={[
                "Redesigned and currently managing the website to improve user experience and functionality.",
                "Running Google and Meta ads to boost sales and strengthen brand presence in the competitive bedding market.",
              ]}
            />
            <Resumecontent
              title="Frontend Developer at Diniubire"
              date="July 2023 - May 2024"
              content={[
                "Transitioned from part-time to full-time, enhancing user interfaces and user experience.",
                "Leveraged React and Next.js for advanced, responsive designs and optimized frontend performance.",
              ]}
            />
            <Resumecontent
              title="Frontend Developer at WebBugs"
              date="February 2023 - August 2023"
              content={[
                "Led frontend development with React and Next.js, creating dynamic, responsive interfaces.",
                "Collaborated with backend teams to integrate frontend with server-side logic using Redux Toolkit.",
              ]}
            />
            <Resumecontent
              title="MERN Stack Web Developer at Ideoversity Lahore"
              date="June 2022 - January 2023"
              content={[
                "Gained expertise in HTML, CSS, Bootstrap, JavaScript, ReactJs, Node.js, and MongoDB.",
                "Developed visually appealing, responsive websites and modular user interfaces.",
              ]}
            />
            <h3 className="resume-title">Projects</h3>
            <Resumecontent
              title="Midnight Comfort"
              content={[
                "Developed and manage the WordPress site with advanced custom coding, keyword optimization, and Google/Meta ad campaigns to drive visibility and boost sales.",
              ]}
            />
            <Resumecontent
              title="Tembekasua Multi-Vendor Website"
              content={[
                "Built a multi-vendor agriculture platform in React with Tailwind CSS and Redux Toolkit, providing customizable vendor features and a user-friendly design.",
              ]}
            />
            <Resumecontent
              title="RegularHost Hosting Website"
              content={[
                "Redesigned the hosting site’s navigation and pricing sections, improving responsiveness and optimizing the overall user experience.",
              ]}
            />
            <Resumecontent
              title="Dinmunte E-Commerce Website"
              content={[
                "Revamped the dashboard with React, TypeScript, and Firebase, adding features like coupon codes, discount pricing, and custom image uploads for orders.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelor of Computer Science (Lahore Leads University)"
              date="2020 - 2024"
              content={[
                `CGPA: 3.6/4 `,
                "I completed my bachelor degree from Lahore Leads Univerrsity.",
              ]}
            />

            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              title="Full Stack Web Development"
              content={[
                `Completed an in-depth Full Stack Web Development course and get certified. Achieved top placement in a class project and led a successful team project, demonstrating advanced skills in web development and project management.`,
              ]}
            />
            <Resumecontent
              title="SEO Specialist"
              content={[
                `Earned an SEO Specialist certification with a focus on optimizing websites for search engines. Gained expertise in On-Page, Off-Page, and Technical SEO, as well as keyword research and analytics, equipping me to drive measurable traffic and improve search visibility.`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={MubbasherResume} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
