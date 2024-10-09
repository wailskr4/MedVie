import React, { useEffect } from 'react';
import "./Navstyle.css";

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

    // Script Elfsight
    const scriptElf = document.createElement('script');
    scriptElf.src = 'https://static.elfsight.com/platform/platform.js';
    scriptElf.setAttribute('data-use-service-core', '');
    scriptElf.defer = true;
    document.body.appendChild(scriptElf);


  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container-fluid">
         
          <a className="navbar-brand" href="#">Vita Med</a>

          {/* Bouton de navigation pour mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Liens de navigation */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto navbar-nav-scroll navbar-nav "> {/* ms-auto pour aligner à droite */}
              <li className="nav-item" id="li1"> 
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item" id="li2">
                <a className="nav-link" href="#Services">Services</a>
              </li>
              <li className="nav-item" id="li3">
                <a className="nav-link" href="#About">About</a>
              </li>
              <li className="nav-item" id="li4">
                <a className="nav-link" href="#ContactUs">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Elfsight widget */}
      <div className="elfsight-app-a5650f33-1ec9-42ac-ae7e-ca785c974b57" data-elfsight-app-async></div>
    </header>
    
  );
};

export default Header;

