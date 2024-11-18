import React from 'react'
import Card from 'react-bootstrap/Card'

function ServiceCards(props) {
    return (
        <Card className="project-card-view">
            {/* <Card.Img variant="top" alt="card-img" style={{ height: '250px', objectFit: 'contain' }} /> */}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: 'start' }}>
                    {props.description}
                </Card.Text>
                {props.descriptionList && (
                    <ul>
                        {props.descriptionList.map((item, index) => (
                            <li key={index} style={{ textAlign: 'start' }}>{item}</li>
                        ))}
                    </ul>
                )}


                {/* <div
                    style={{
                        display: 'flex',
                        justifyContent: props.liveLink ? 'space-between' : 'center',
                    }}
                >
                    <Button variant="primary" href={props.link} target="_blank">
                        <BiLinkExternal /> &nbsp;
                        {props.isBlog ? 'View Blog' : 'View Demo'}
                    </Button>
                    {props.liveLink && (
                        <Button variant="primary" href={props.liveLink} target="_blank">
                            <BiLinkExternal /> &nbsp; Live
                        </Button>
                    )}
                </div> */}
            </Card.Body>
        </Card>
    )
}
export default ServiceCards;
