// Home.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './navbar';
import { useState } from 'react';
import axios from 'axios';
// import './App.css';
import { Home } from './home';
import Dashboard from './dashboard';
import './PlantDisease.css';
import Login from './login';
import About from './about';
import { useAuth0 } from '@auth0/auth0-react';


const PotatoPlantDisease = () => {
  const [causes,setCauses] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const {user} = useAuth0();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const imageFile = event.target.elements.image.files[0];
    const formData = new FormData();
    formData.append('file', imageFile);

    try {
      const response = await axios.post('http://localhost:8000/predict/potato', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data);
      console.log(response.data.class);
      let a = response.data.class
      let arr = a.split(' ')

      let b = "Potato_" + arr[0] + "_" + arr[1]
      if(user){
          const res2 = await axios.post('http://localhost:3000/incrementPotato',{
          email: user.email,
          response: b
        })
        console.log(response.data.class)
      }
      const res3 = await axios.post('http://localhost:3000/getFromDB',{
        response: response.data.class
      })

      setCauses(res3.data.data)
      
      setError(null);
    } 
    catch (err) {
      setError('Failed to predict the disease' + err);
      console.error(err);
    }
  };

  return (
    <div className='Renderthispotato'>
      <h1>Potato Plant Disease</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Click here to Upload Image
            <input type="file" name="image" accept="image/*" required />
          </label>
          <button type="submit">Submit</button>
        </form>
        {/* optional rendering */}
        {prediction && (
          <div className="prediction-result">
            <h3>Prediction Result:</h3>
            <p>Class: {prediction.class}</p>
            <p>Confidence: {prediction.confidence * 100}</p>
          </div>
        )}

        {prediction?.class !== 'Healthy' && causes && (
          <div className="cause-result">
            <h3>Cause and Prevention:</h3>
            <p>Causes: {causes.causeause}</p>
            <p>Prevention: {causes.prevention}</p>
          </div>
        )}


        {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </div>
  );
};

const TomatoPlantDisease = () => {
  const[causes, setCauses] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const {user} = useAuth0();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const imageFile = event.target.elements.image.files[0];
    const formData = new FormData();
    formData.append('file', imageFile);

    try {
      const response = await axios.post('http://localhost:8000/predict/tomato', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data);
      console.log(response.data.class);
      
      if(user){

        const res2 = await axios.post('http://localhost:3000/incrementGeneral',{
          email: user.email,
          response: response.data.class
        })
      }
      const res3 = await axios.post('http://localhost:3000/getFromDB',{
        response: response.data.class
      })

      setCauses(res3.data.data)
      
      setError(null);
    } 
    catch (err) {
      setError('Failed to predict the disease');
      console.error(err);
    }
  };

  return (
    <div className='Renderthistomato'>
      <h1>Tomato Plant Disease</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Click here to Upload Image
            <input type="file" name="image" accept="image/*" required />
          </label>
          <button type="submit">Submit</button>
        </form>
        {/* optional rendering */}
        {prediction && (
          <div className="prediction-result">
            <h3>Prediction Result:</h3>
            <p>Class: {prediction.class}</p>
            <p>Confidence: {prediction.confidence * 100}</p>
          </div>
        )}

        {prediction?.class !== 'Tomato_healthy' && causes && (
          <div className="cause-result">
            <h3>Cause and Prevention:</h3>
            <p>Causes: {causes.causeause}</p>
            <p>Prevention: {causes.prevention}</p>
          </div>
        )}

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>

    
  );
};

const CapsicumPlantDisease = () => {
  const[causes,setCauses] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const {user} = useAuth0();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const imageFile = event.target.elements.image.files[0];
    const formData = new FormData();
    formData.append('file', imageFile);

    try {
      const response = await axios.post('http://localhost:8000/predict/capsicum', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data);
      console.log(response.data.class);
      
      if(user){
        const res2 = await axios.post('http://localhost:3000/incrementGeneral',{
          email: user.email,
          response: response.data.class
        })
      }
      const res3 = await axios.post('http://localhost:3000/getFromDB',{
        response: response.data.class
      })

      setCauses(res3.data.data)
      
      setError(null);
      
      
    } 
    catch (err) {
      setError('Failed to predict the disease');
      console.error(err);
    }
  };


  return (
    <div className='Renderthiscapsicum'>
      <h1>Bell Pepper Plant Disease</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Click here to Upload Image
            <input type="file" name="image" accept="image/*" required />
          </label>
          <button type="submit">Submit</button>
        </form>
        {/* optional rendering */}
        {prediction && (
          <div className="prediction-result">
            <h3>Prediction Result:</h3>
            <p>Class: {prediction.class}</p>
            <p>Confidence: {prediction.confidence * 100}</p>
          </div>
        )}
        {prediction?.class !== 'Pepper__bell___healthy' && causes && (
          <div className="cause-result">
            <h3>Cause and Prevention:</h3>
            <p>Causes: {causes.causeause}</p>
            <p>Prevention: {causes.prevention}</p>
          </div>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};


const App = () => {
  const {user, isAuthenticated} = useAuth0()
  useEffect(()=>{
      const makeRequest = async() =>
      {
        const res = await axios.post("http://localhost:3000/login",{
          email: user?.email,
          name: user?.name
        })
        console.log("LOGIN SUCCESSFUL" , res)
        
      }
      makeRequest()
  },[isAuthenticated, user])

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/potato" element={<PotatoPlantDisease />} />
          <Route path="/tomato" element={<TomatoPlantDisease />} />
          <Route path="/capsicum" element={<CapsicumPlantDisease />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
