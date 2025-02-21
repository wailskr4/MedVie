import React, { useState, useEffect } from 'react'; // Import useState hook


import "./home.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navigation, Autoplay } from 'swiper/modules';
import Doctors from '../Doctors/Doctors';
const ServiceBox = ({ icon, text }) => (
  <div className="service-box">
    <div className="service-icon">{icon}</div>
    <div className="service-text">{text}</div>
  </div>
);

const Hstyle = {
  color: "#ffffffb9",
  textAlign: "center",
  marginRight: "30px",
};

function Home() {
  // State to store the email input value
  const [email, setEmail] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission
    alert('Email submitted: ' + email);

    // You can add your email subscription logic here, like an API call.
    // After submission, you may want to clear the email input
    setEmail('');
  };

  
  useEffect(() => {
    AOS.init();
  }, []);


  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
   /* const [formdata, setFormdata] = useState({name: ""}, {email:""}, {service:""}, {message:""});

    const handling= (change) => {
      setFormdata({ ...formdata, [change.target.name]: change.target.value });
    };*/
    const swiperOptions = {
  navigation: true,
  modules: [Navigation, Autoplay],
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
};

 function handleChanges  (input)  {
    const { name, value } = input.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setMail(value);
    } else if (name === 'service') {
      setService(value);  // Ensure the service state is updated correctly
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  function handleSubmits(a) {
    a.preventDefault(); // Empêche l'envoi par défaut

    if (!name || !mail || !service) {
        alert('Please fill in all required fields');
    } else {
        // Créer l'objet contenant les données du formulaire
        const formData = {
            name,
            mail,
            service,
            message
        };

        // Envoyer les données vers Laravel via fetch
        fetch('http://127.0.0.1:8000/api/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert(`Appointment booked successfully!\n${JSON.stringify(data)}`);
            
            // Réinitialiser les champs du formulaire après succès
            setName('');
            setMail('');
            setService('');
            setMessage('');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while booking the appointment.');
        });
    }
};

  return <>
    
    <main>
      <Swiper
        className="mySwiper"
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="slide1">
          <div className="placement">
            <div className="slogan">
              <h1 className="animate__animated animate__backInUp">
                Soins Adéquat pour Tous.
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide2">
          <div className="placement">
            <div className="slogan">
              <h1 className="animate__animated animate__backInUp">
                Soins d'excellence, bien-être au cœur
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide3">
          <div className="placement">
            <div className="slogan">
              <h1 className="animate__animated animate__backInUp">
                Une équipe proche de vous, à chaque étape
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>

    <section className="about">
      <div className="section-title">
        <h2>PourQuoi Nous ?</h2>
      </div>

      <div className="about-container">
        <div className="about-box">
          <div
            className="about-img"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="1200"
            data-aos-easing="ease-in-sine"
          >
            <img src={require('../Images/image6.jpg')} alt="Luxury" />
          </div>
          <div
            className="about-text"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1200"
            data-aos-easing="ease-in-sine"
          >
<h3>Des Experts Dévoués à Votre Vie</h3>
<p>
  Chaque intervention est plus qu'une mission : c'est un engagement. Notre équipe de chirurgiens expérimentés veille sur vous avec précision, humanité et un dévouement sans faille. Votre vie est entre de bonnes mains.
</p>
          </div>
        </div>

        <div className="about-box">
          <div
            className="about-text"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="1200"
            data-aos-easing="ease-in-sine"
          >
<h3>Une Équipe de Chirurgiens d'Excellence</h3>
<p>
  Votre santé est notre priorité absolue. Avec des chirurgiens hautement qualifiés et expérimentés, vous êtes entre des mains expertes pour chaque étape de votre parcours médical.
</p>

          </div>
          <div
            className="about-img"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1200"
            data-aos-easing="ease-in-sine"
          >
            <img src={require('../Images/image7.jpg')} alt="Advanced" />
          </div>
        </div>

        <div className="about-box">
          <div
            className="about-img"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="1300"
            data-aos-easing="ease-in-sine"
          >
            <img src={require('../Images/image8.jpg')} alt="Resort" />
          </div>
          <div
            className="about-text"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
          <h3>Soins Personnalisés</h3>
<p>
  Que ce soit pour une consultation ou un traitement rapide, nous mettons tout en œuvre pour faire de votre expérience un moment rassurant et bienveillant.
</p>
          </div>
        </div>
      </div>
    </section>



    <Doctors />



    <div className="container">
      <div className="left">
      <ServiceBox icon="🩺" text="General Consultation" />
<ServiceBox icon="🔍" text="Radio Consultation" />
<ServiceBox icon="💉" text="Vaccination" />
<ServiceBox icon="🩹" text="Minor Surgery" />
      </div>
      <div className="right">
      <form onSubmit={handleSubmits} method={'POST'}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChanges}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={mail}
          onChange={handleChanges}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">Select Service</label>
        <select
          id="service"
          name="service"
          value={service}  // Make sure the 'value' is bound to the state
          onChange={handleChanges}  // Ensure onChange is updating the state
          required
        >
          <option value="">Please select a service</option>
          <option value="consultation">General Consultation</option>
          <option value="vaccination">Vaccination</option>
          <option value="radio-analyses">Radio Analyses</option>
          <option value="minor-surgery">Minor Surgery</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={message}
          onChange={handleChanges}
        ></textarea>
      </div>

      <input type="submit" value="Book Appointment" />
    </form>
      </div>
    </div>

    <div className="container_letter">
  <h1 id="HeadText2" className="animate__animated animate__backInUp">Our gallery</h1>
</div>
<div className="grid1">

    <div className="div1"><img src={require('../Images/image5.jpg')} /></div>
    <div className="div2"><img src={require('../Images/image4.jpg')} /></div>
    <div className="div3"><img src={require('../Images/image3.jpg')} /></div>
    <div className="div4"><img src={require('../Images/image2.jpg')} /></div>
</div>
    





    <div className="newsletter">
      <div className="container_letter">
        <h1 id="HeadText" className="animate__animated animate__backInUp">
          Subscribe to our newsletter
        </h1>
        <h3 style={Hstyle}>Subscribe to our NewsLetter and stay updated.</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email} // Bind input value to state
            onChange={handleChange} // Update state on input change
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>


  </>;
}

export default Home;
