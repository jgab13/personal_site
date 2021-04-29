import React from "react";
import "./styles.css";
import { Redirect, withRouter } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaGooglePlay, FaFacebookSquare } from 'react-icons/fa'
import Project from './../Project'
import generic from './project.jpg'
import Resume from './../Resume'
import resumeFile from './../Resume/resume.pdf'
import transcript from './../Resume/transcript.pdf'

/* Component for the Home page */
class Home extends React.Component {

  // <Resume/>

  render() {
    const project1 = "Our mission at Talent Swap is to engage a community of teachers and learners to exchange knowledge. Teachers seeking to educate or instruct can offer courses to users on our platform. Learners can take interesting courses available on our platform. We provide users the medium and tools to lifelong learn."
    const project2 = "Shoppies is a simple web app that uses the OMDB API to search for movies based on keyword search. Users can nominate up to 5 movies at which point they will not be able to nominate any other movies unless they remove a movie from their nominations. A banner will indicate that they have reached the 5 movie nomination threshold and confetti will run down the window. Please use this URL to access the web app http://shoppies-jg.herokuapp.com/."
    const project3 = "fr.js allows developers to build easy to use, intuitive financial report tables. Click API to read through fr.js documentation. Click examples to see the library in action!"
    
    return (
      <div>
      <div className="header">
      <span>My name is Jonathan and I am a 4th year Computer Science student at the University of Toronto. </span>
      </div>
      <div className="top row row-cols-1 row-cols-md-3">

      <Project picture={generic} title="Talent Swap" text={project1} github="https://github.com/jgab13/TalentSwap" linkedin="https://www.linkedin.com/in/jonathan-g-b4a44616/" buttonText="Random button" />
      <Project picture={generic} title="Shoppies" text={project2} github="https://github.com/jgab13/Shoppies" linkedin="https://www.linkedin.com/in/jonathan-g-b4a44616/" buttonText="Random button" />
      <Project picture={generic} title="fr.js Library" text={project3} github="https://github.com/jgab13/FrLibrary" linkedin="https://www.linkedin.com/in/jonathan-g-b4a44616/" buttonText="Random button" />
      <a href={resumeFile} target="_blank">My Resume</a>
      <a href={transcript} target="_blank">My Transcript</a>
      </div></div>
    );  
    
    
  }
}

export default Home;