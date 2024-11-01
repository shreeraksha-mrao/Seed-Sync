import React from 'react';
import './about.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h1>About SeedSync AI</h1>
        <p>
          SeedSync AI is committed to revolutionizing agriculture through advanced AI-driven solutions.
          Our mission is to empower farmers and agricultural stakeholders with cutting-edge technology
          to detect plant diseases, optimize crop yields, and foster sustainable farming practices.
        </p>
        <p>
          With a team of passionate experts in artificial intelligence and agriculture, SeedSync AI
          leverages deep learning and computer vision to provide accurate, efficient, and impactful solutions.
          Join us in shaping the future of farming.
        </p>
        <h2>Contact Us</h2>
        <p><a href="mailto:seedsyncai@gmail.com">seedsyncai@gmail.com</a></p>
      </div>
    </div>
  );
};

export default AboutUs;
