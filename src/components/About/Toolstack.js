import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiSlack, // Collaboration tool
  SiClickup, // Project management
  SiZapier, // Automation tool
  SiCanva, // Graphic design
  SiGoogleads, // Google Ads
  SiFacebook, // Meta Ads
  SiSemrush, // SEO and marketing tool
  SiMailchimp, // Email marketing
  SiHubspot, // CRM and marketing tool
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Linux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="Visual Studio Code: Code Editor" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman: API Testing" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack title="Slack: Collaboration Tool" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiClickup title="ClickUp: Project Management" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiZapier title="Zapier: Automation Tool" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva title="Canva: Graphic Design Tool" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleads title="Google Ads: Online Advertising" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFacebook title="Meta Ads: Advertising on Facebook" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSemrush title="Semrush: SEO and Marketing Tool" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMailchimp title="Mailchimp: Email Marketing" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHubspot title="HubSpot: CRM and Marketing Tool" />
      </Col>
    </Row>
  );
}

export default Toolstack;
