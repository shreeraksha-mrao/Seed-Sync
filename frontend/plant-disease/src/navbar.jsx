import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './login';
import LogoutButton from './logout';
import About from './about';



export const Navbar = () => {
  const {user} = useAuth0()
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/potato" className="nav-link">Potato Plant Disease</Link>
        </li>
        <li className="nav-item">
          <Link to="/tomato" className="nav-link">Tomato Plant Disease</Link>
        </li>
        <li className="nav-item">
          <Link to="/capsicum" className="nav-link">Capsicum Plant Disease</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About US</Link>
        </li>
        {user ?
        <>
          <li className="nav-item">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
          <li style = {{color:'#5b52c2'}} className="nav-item">
          Hello, {user.name}
          </li>
          <li className="nav-item logbuton"> <LogoutButton /> </li>
        </>
        :
        <li className="nav-item logbutton"><Login/> </li>}
      </ul>
    </nav>
  );
};
