import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hello, I am <span className="purple">Mubbasher Yasin </span>
            {/* from <span className="purple"> Gujarat, India.</span> */}
            <br />I am a Full Stack Javascript Developer.
            <br />
            <br />
            A versatile WordPress, Shopify, and Full-Stack Developer with expertise in Digital Marketing, SEO, and impactful Google/Meta Ad Campaigns.
          </p>
          <br />
          <div className='purple' style={{ textAlign: 'left'}}>Beyond the Code</div>
          <span style={{ textAlign: 'left' }}>I'm committed to:</span>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Helping businesses stand out and grow in competitive markets
            </li>
            <li className="about-activity">
              <ImPointRight /> Tackling complex and innovative projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to meaningful projects, including work for non-profit organizations
            </li>
          </ul>

          <p style={{marginBlockEnd: 0, color: 'rgb(155 126 172)'}}>
            "Code with purpose, craft experiences that matter."{' '}
          </p>
          <footer className="blockquote-footer">My Motto</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard;
