import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './navbar';
import axios from 'axios';
import { Home } from './home';
import Dashboard from './dashboard';
import './PlantDisease.css';
import Login from './login';
import About from './about';
import { useAuth0 } from '@auth0/auth0-react';
import { Toaster, toast } from 'react-hot-toast';

const PotatoPlantDisease = () => {
  const [causes, setCauses] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth0();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const imageFile = event.target.elements.image.files[0];
    const formData = new FormData();
    formData.append('file', imageFile);

    try {
      setLoading(true);
      const response = await axios.post('https://fastapi-2-w5iq.onrender.com/predict/potato', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data);
      let a = response.data.class;
      let arr = a.split(' ');
      let b;
      if(a=='Healthy'){
        b = "Potato_Healthy";
      }
      else{ b = "Potato_" + arr[0] + "_" + arr[1];}
      
      if (user) {
        await axios.post('https://server-1-dbo2.onrender.com/incrementPotato', {
          email: user.email,
          response: b,
        });
      }

      const res3 = await axios.post('https://server-1-dbo2.onrender.com/getFromDB', {
        response: response.data.class,
      });
      setLoading(false);
      setCauses(res3.data.data);
      toast.success('Prediction successful!');
      setError(null);
    } catch (err) {
      setLoading(false);
      setError('Failed to predict the disease' + err);
      toast.error('Failed to predict the disease.');
    }
  };

  return (
    <div className='Renderthispotato'>
      <div className="content-wrapper">
        <h1>Potato - Solanum Tuberosum</h1>
        <div className="form-container">
          
          <form onSubmit={handleSubmit}>
            <i className="fa-solid fa-cloud-arrow-up"></i>
            <label>
              Click here to Upload Image
              <input type="file" name="image" accept="image/*" required />
            </label>
            <button type="submit">Upload</button>
          </form>
          {loading && <div>Loading...</div>}
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
    </div>
    
  );
};

const TomatoPlantDisease = () => {
  const [causes, setCauses] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth0();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const imageFile = event.target.elements.image.files[0];
    const formData = new FormData();
    formData.append('file', imageFile);

    try {
      setLoading(true);
      const response = await axios.post('https://fastapi-2-w5iq.onrender.com/predict/tomato', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data);
      if (user) {
        await axios.post('https://server-1-dbo2.onrender.com/incrementGeneral', {
          email: user.email,
          response: response.data.class,
        });
      }

      const res3 = await axios.post('https://server-1-dbo2.onrender.com/getFromDB', {
        response: response.data.class,
      });
      setLoading(false);
      setCauses(res3.data.data);
      toast.success('Prediction successful!');
      setError(null);
    } catch (err) {
      setLoading(false);
      setError('Failed to predict the disease');
      toast.error('Failed to predict the disease.');
    }
  };

  return (
    <div className='Renderthistomato'>
      <div className="content-wrapper">
        <h1>Tomato - Solanum lycopersicum</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
          <i className="fa-solid fa-cloud-arrow-up"></i>
            <label>
              Click here to Upload Image
              <input type="file" name="image" accept="image/*" required />
            </label>
            <button type="submit">Upload</button>
          </form>
          {loading && <div>Loading...</div>}
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
    </div>
  );
};

const CapsicumPlantDisease = () => {
  const [causes, setCauses] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth0();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const imageFile = event.target.elements.image.files[0];
    const formData = new FormData();
    formData.append('file', imageFile);

    try {
      setLoading(true);
      const response = await axios.post('https://fastapi-2-w5iq.onrender.com/predict/capsicum', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data);
      if (user) {
        await axios.post('https://server-1-dbo2.onrender.com/incrementGeneral', {
          email: user.email,
          response: response.data.class,
        });
      }

      const res3 = await axios.post('https://server-1-dbo2.onrender.com/getFromDB', {
        response: response.data.class,
      });
      setLoading(false);
      setCauses(res3.data.data);
      toast.success('Prediction successful!');
      setError(null);
    } catch (err) {
      setLoading(false);
      setError('Failed to predict the disease');
      toast.error('Failed to predict the disease.');
    }
  };

  return (
    <div className='Renderthiscapsicum'>
      <div className="content-wrapper">
        <h1>Bell Pepper - Capsicum annuum</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
          <i className="fa-solid fa-cloud-arrow-up"></i>
            <label>
              Click here to Upload Image
              <input type="file" name="image" accept="image/*" required />
            </label>
            <button type="submit">Upload</button>
          </form>
          {loading && <div>Loading...</div>}
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
    </div>
  );
};

const App = () => {
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    const makeRequest = async () => {
      const res = await axios.post("https://server-1-dbo2.onrender.com/login", {
        email: user?.email,
        name: user?.name,
      });
      console.log("LOGIN SUCCESSFUL", res);
    };
    makeRequest();
  }, [isAuthenticated, user]);

  return (
    <Router>
      <div>
        <Navbar />
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/potato" element={<PotatoPlantDisease />} />
          <Route path="/tomato" element={<TomatoPlantDisease />} />
          <Route path="/capsicum" element={<CapsicumPlantDisease />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;