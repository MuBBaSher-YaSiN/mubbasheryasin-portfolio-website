import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from 'react-icons/di'
import {
  SiFirebase,
  SiTypescript,
  SiShopify,
  SiWordpress,
  SiGoogleads,
  SiMarketo,
  SiSemrush,
  SiFacebook,
  SiPostman,
} from 'react-icons/si'

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript Programming Language" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript title="TypeScript: Typed JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React: JavaScript Library for UI" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js: JavaScript Runtime" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase title="Firebase: Backend as a Service" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python: Programming Language" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB: NoSQL Database" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiShopify title="Shopify: E-commerce Platform" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress title="WordPress: Content Management System" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSemrush title="Semrush: SEO and Marketing Tool" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleads title="Google Ads: Online Advertising" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMarketo title="Marketo: Digital Marketing Automation" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFacebook title="Meta Ads: Advertising on Facebook" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman: API Testing" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git: Version Control System" />
      </Col>
    </Row>
  )
}

export default Techstack;
