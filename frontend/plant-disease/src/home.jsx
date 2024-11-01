import React, { useState, useEffect } from 'react';
import './home.css';
import { useAuth0 } from '@auth0/auth0-react';

export const Home = () => {
  const [currentSubheading, setCurrentSubheading] = useState(0);
  const [exiting, setExiting] = useState(false);
  const subheadings = [
    "Intelligence for greener growth",
    "Cultivating Tomorrow's Agriculture with Cutting-Edge AI",
    "Bringing Smart Farming to Life",
    "Revolutionizing Agriculture Through Technology"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setCurrentSubheading((prevSubheading) => (prevSubheading + 1) % subheadings.length);
        setExiting(false);
      }, 1000); // Match this duration with the exit animation duration
    }, 3000); // Change subheading every 3 seconds
    return () => clearInterval(intervalId);
  }, [subheadings.length]);

  return (
    <div className="home-content">
      <div className="spiral-line"></div>
      <h2>Welcome to SeedSync AI</h2>
      <h5 className={`animated-heading ${exiting ? 'exit' : 'enter'}`}>
        {subheadings[currentSubheading]}
      </h5>
    </div>
  );
};
