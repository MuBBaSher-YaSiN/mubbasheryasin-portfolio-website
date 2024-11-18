import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import RegularhostSolutions from "../../Assets/Projects/Regularhost-solutions.webp";
import RegularHostSolutionsDemo from "../../Assets/Projects/RegularHost-Solutions.mp4";
import AgricultureMultivendorWebsite from "../../Assets/Projects/Agriculture-Multivendor-Website.webp";
import AgricultureMultivendorDemo from "../../Assets/Projects/Agriculture-Multivendor.mp4";
import MidnightComfort from "../../Assets/Projects/Midnight-Comfort.webp";
import MidnightComfortDemo from "../../Assets/Projects/Midnight-Comfort.mp4";
import DinMunteEcommerceWebsite from "../../Assets/Projects/DinMunte-Ecommerce-Website.webp";
import DinMunteDemo from "../../Assets/Projects/DinMunte.mp4";
import BaroqueEcommerceProject from "../../Assets/Projects/Baroque-Ecommerce-Project.webp";
import BaroqueEcommerceDemo from "../../Assets/Projects/Baroque-Ecommerce.mp4";
import Groupomania from "../../Assets/Projects/Groupomania.webp";
import GroupomaniaDemo from "../../Assets/Projects/Groupomania.mp4";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <div className="navbar-container-div">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RegularhostSolutions}
              isBlog={false}
              title="Regularhost Hosting Solutions"
              description="I transformed Regularhost into a top web hosting platform using tailored HTML, CSS, and JavaScript. I focused on the frontend, fixed responsive issues, and created several components. With an improved UI/UX and a custom backend, the platform ensured a better user experience and higher customer satisfaction. Whether it was shared, dedicated, or cloud hosting."
              link={RegularHostSolutionsDemo}
              liveLink="https://regularhost.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AgricultureMultivendorWebsite}
              isBlog={false}
              title="Agriculture Multivendor Website"
              description="I developed the complete, fully responsive frontend for a multi-vendor agriculture eCommerce platform using React. The application offered a seamless user experience, intuitive vendor management, advanced filtering, and an engaging design built for scalability. Through my approach, I ensured flawless functionality across all devices, setting a high standard in the agriculture marketplace industry."
              link={AgricultureMultivendorDemo}
              liveLink="https://mubbasheryasin.com/contact"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MidnightComfort}
              isBlog={false}
              title="Midnight Comfort"
              description="I redesigned and manage the Midnight Comfort website, enhancing its performance and user experience. Built on WordPress with advanced customization, the site offers a seamless shopping journey for luxury beds. I also run targeted Google and Meta ads, driving traffic and increasing sales. Through strategic management and advertising, I've helped the brand to grow into a successful business."
              link={MidnightComfortDemo}
              liveLink="https://midnightcomfort.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DinMunteEcommerceWebsite}
              isBlog={false}
              title="DinMunte Ecommerce Website"
              description="Revamped DinMunte, a niche eCommerce platform for wellness products like soap and salt, enhancing its overall appeal and adding advanced features. Leveraged React TypeScript and Firebase to build a modern, fully responsive frontend and improve backend functionality. Enhanced SEO, increased performance, and boosted user engagement and sales by over 20%, contributing to a more seamless and engaging shopping experience."
              link={DinMunteDemo}
              liveLink="https://www.dinmunte.ro/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BaroqueEcommerceProject}
              isBlog={false}
              title="Baroque Ecommerce Project"
              description="Revamped the Baroque eCommerce project by developing a fully responsive and visually appealing frontend using React alongside Bootstrap and Tailwind CSS. Employed best practices in UI/UX design to create an engaging and seamless shopping experience for users. Integrated key eCommerce functionalities such as a dynamic cart and wishlist, significantly enhancing user interaction and encouraging substantial online sales growth."
              link={BaroqueEcommerceDemo}
              liveLink="https://baroque.pk/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Groupomania}
              isBlog={false}
              title="Groupomania Social Network App"
              description="Developed Groupomania, a full-stack social network application using React for the frontend and Node.js for the backend. Implemented user authentication for seamless login and signup. Users can create posts with or without images, engage through likes and comments, and manage their content by deleting their own posts. The platform encourages interaction, allowing users to like and comment on each other’s posts, fostering a vibrant online community."
              link={GroupomaniaDemo}
              liveLink="https://www.fiverr.com/mubbashir_yasin"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Projects;
