import React from "react";
import "./styles.css";
import { Redirect, withRouter, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaGooglePlay, FaFacebookSquare } from 'react-icons/fa'

/* Component for the Project page */
class Project extends React.Component {
  

  render() {
    const {picture, title, text, github, buttonText} = this.props;
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
            <div >
            <a className="button-body" href={github} target="_blank"><FaGithub/></a>
            <FaGooglePlay className="button-body" />
            <FaFacebookSquare className="button-body"/>
            <Link className="button-body" to={{
                  pathname: "/ProjectPage/" + title.replace(/\s+/g, ''),
                  state: { pic: picture, title: title, text: text, github: github } }}>
              <Button variant="primary">{buttonText}</Button>
            </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    );  
    
    
  }
}

export default Project;