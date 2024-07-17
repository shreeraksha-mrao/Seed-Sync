import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


export const Register = ({ setCurrentForm }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/register',{
        name:name,
        email: email,
        password: pass
    });
    console.log(res);

  };

  const handleButtonClick = () => {
    setCurrentForm('login');
  };

  return (
    <div className='form-container'>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your Full Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          name="name"
          id="name"
          placeholder="Richa"
        />

        <label htmlFor="email">Enter your Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="youremail@gmail.com"
        />

        <label htmlFor="pass">Password</label>
        <input
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          type="password"
          name="pass"
          id="pass"
          placeholder="********"
        />

        <button type='submit'>Create Account</button>
      </form>
      <button className='secondary' onClick={handleButtonClick}>
        Already Have an account? Login Here.
      </button>
    </div>
  );
};

export default Register;
