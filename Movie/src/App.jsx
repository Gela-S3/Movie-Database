import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import Single from './component/Single';
import Navbar from './component/Navbar';
import './App.css';


const App = () => {
  const url = "http://www.omdbapi.com/?apikey=e9b7fc46&";

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path ="/single" element = {<Single />}></Route>
      </Routes>
    </Router>
  );
}  

export default App;  