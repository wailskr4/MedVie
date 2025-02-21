import React, { useEffect } from 'react';
import "./Navstyle.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  useEffect(() => {
    // Charger les scripts externes après le montage du composant
    const scriptAos = document.createElement('script');
    scriptAos.src = 'https://unpkg.com/aos@next/dist/aos.js';
    scriptAos.async = true;
    document.body.appendChild(scriptAos);

    // Animer les items du menu avec délai
    const items = [
      { selector: "#li1", timer: 550 },
      { selector: "#li2", timer: 650 },
      { selector: "#li3", timer: 750 },
      { selector: "#li4", timer: 850 }
    ];

    const loadItem = (item) => {
      const element = document.querySelector(item.selector);
      if (element) {
        element.style.visibility = "visible";
      }
    };

    items.forEach(item => {
      setTimeout(() => {
        loadItem(item);
      }, item.timer);
    });



  }, []);

  return (
    <header>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
</style>
<nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Vita Med</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* Liens de navigation centrés */}
      <ul className="navbar-nav mx-auto">
        <li className="nav-item"> 
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Services" >Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/aboutus" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" >Contact</NavLink>
        </li>
      </ul>

      {/* Barre de recherche alignée à droite */}
      <form className="d-flex ms-auto" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


    
    </header>
    
  );
};

export default Header;

