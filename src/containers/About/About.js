// AboutPage.js

import React from 'react';
import './about.css'; // Import your CSS file for styling
import {My, abc} from './imports';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-content">Welcome to our tech blog where we explore the fascinating intersection of web development and machine learning. Our mission is to share insights, discoveries, and innovations in these rapidly evolving fields. Whether you're a developer, a machine learning enthusiast, or simply curious about the future of technology, you're in the right place.</p>

      <h2 className="about-team-title">Meet the Team</h2>
      <div className="about-team">
        <div className="team-member">
          <img src={My} alt="Author 1" className="team-member-image" />
          <h3 className="team-member-name">Rajiv Kumar</h3>
          <p className="team-member-description">Web Developer & Machine Learning Enthusiast</p>
        </div>

        <div className="team-member">
          <img src={abc} alt="Author 2" className="team-member-image" />
          <h3 className="team-member-name">Jane Smith</h3>
          <p className="team-member-description">Machine Learning Enthusiast</p>
        </div>
      </div>
    </div>
  );
};

export default About;
