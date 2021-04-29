import React from "react";
import "../Home/styles.css";
import { Redirect, withRouter } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaGooglePlay, FaFacebookSquare } from 'react-icons/fa'

/* Component for the ProjectPage page */
class ProjectPage extends React.Component {

  state = {
       picture: this.props.location.state.pic,
       title: this.props.location.state.title,
       text: this.props.location.state.text,
       github: this.props.location.state.github,
       linkedin: this.props.location.state.linkedin

    };

  render() {
    console.log(this.state)
    return (
      <div>
      <div className="Project">
        <Card style={{ width: '60rem' }}>
          
          <Card.Body>
            <Card.Title>{this.state.title}</Card.Title>
            <Card.Text>
              {this.state.text}
            </Card.Text>
            <a href={this.state.github} target="_blank"><FaGithub/></a>
            <a href={this.state.linkedin} target="_blank"><FaLinkedin/></a>
            <FaGooglePlay/>
            <FaFacebookSquare/>
          </Card.Body>
          <Card.Img variant="bottom" src={this.state.picture} />
        </Card>
        </div>
      </div>
    );  
    
    
  }
}

export default ProjectPage;