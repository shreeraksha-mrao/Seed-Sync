// Home.jsx
import React from 'react';
import './home.css';
import { useAuth0 } from '@auth0/auth0-react';

export const Home = () => {
  const {user} = useAuth0()
  return (
    <div className="home-content">
    </div>
  );
};
