import React from 'react';
import './App.css';
import Home from "./Components/home/Home";
import Nav from "./Components/navigation/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/footer/Footer";
function App() {
  return (
    <>
    
       <Router>
       <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
    
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
