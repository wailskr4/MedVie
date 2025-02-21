import React from 'react'
import  "../footer/styleF.css"

function Footer() {
  return (

<footer className="footer">
    <div classNameName="containerf">
        <div className="footer-top">
            <div className="footer-logo">
                <h1 className="FirstH">Vita Med</h1>
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About </a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-info">
                <p>&copy; 2024 Vit Med. All rights reserved.</p>
                <p>03 rue mohamed sadek tiab pour renseignement sur site.<br />
    et pour consulation Le cabinet est situé a tlemcen . </p>
                <p>Phone: 0773937748 | Email: skrwail1998@gmail.com</p>
            </div>
            <div className="footer-social">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
         </div>
        </div>
    </div>
   
</footer>
    
  )
}

export default Footer
