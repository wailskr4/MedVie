import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import doc1 from '../Images/doc1.jpg';
import doc2 from '../Images/doc2.jpg';
import doc3 from '../Images/doc3.jpg';
import doc4 from '../Images/doc4.jpg';
import doc5 from '../Images/doc5.jpg';
import doc6 from '../Images/doc6.jpg';
import './Docs.css';


const DoctorCard = ({ name, specialty, description, socialLinks, image }) => {
  return (
    <Col md={4} className="mb-5">
      <Card className="text-center h-100">
      <Card.Img
  variant="top"
  src={image}
  alt={name}
  style={{
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "50%", // Image ronde (optionnel)
    margin: "0 auto" // Centrer l'image
  }}
/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{specialty}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="mx-2 text-dark"
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Doctors = () => {
  const doctorsData = [
    {
      name: "Dr. Bouri Nesrine",
      specialty: "Médecin Chef",
      description: "Un médecin chef est celui qui guide, soutient et inspire toute une équipe vers une guérison collective",
      image: doc1,
      socialLinks: [
        { platform: "Twitter", url: "#" },
        { platform: "Facebook", url: "#" },
        { platform: "Google+", url: "#" },
        { platform: "Instagram", url: "#" }
      ]
    },
    {
      name: "Dr. Sakhri Wail",
      specialty: "Ophthalmologist",
      description: "Le regard est le miroir de l'âme, et en ophtalmologie, notre mission est d’en préserver la clarté.",
      image: doc2,
      socialLinks: [
        { platform: "Twitter", url: "#" },
        { platform: "Facebook", url: "#" },
        { platform: "Google+", url: "#" },
        { platform: "Instagram", url: "#" }
      ]
    },
    {
      name: "Dr. Sakhri oussama",
      specialty: "Dentist",
      description: "Un sourire est un geste simple, mais il peut transformer une journée. En tant que dentiste, je m’assure que ce sourire dure toute une vie.",
      image: doc6,
      socialLinks: [
        { platform: "Twitter", url: "#" },
        { platform: "Facebook", url: "#" },
        { platform: "Google+", url: "#" },
        { platform: "Instagram", url: "#" }
      ]
    },
    {
      name: "Dr. Picard, Pédiatre",
      specialty: "Pediatrician",
      description: "Un pédiatre n'est pas seulement un médecin des enfants, mais un guide pour les familles dans leur parcours de santé",
      image: doc4,
      socialLinks: [
        { platform: "Twitter", url: "#" },
        { platform: "Facebook", url: "#" },
        { platform: "Google+", url: "#" },
        { platform: "Instagram", url: "#" }
      ]
    },
    {
      name: "Dr. Ihiam burg",
      specialty: "Pediatrician",
      description: "Un diagnostic précoce en cardiologie peut transformer un simple battement en une éternité de bien-être.",
      image: doc5,
      socialLinks: [
        { platform: "Twitter", url: "#" },
        { platform: "Facebook", url: "#" },
        { platform: "Google+", url: "#" },
        { platform: "Instagram", url: "#" }
      ]
    },
    {
      name: "Dr. Lambert burg",
      specialty: "Pediatrician",
      description: "Le cerveau est la bibliothèque de notre vie, chaque neurone un livre, chaque pensée une page.",
      image: doc3,
      socialLinks: [
        { platform: "Twitter", url: "#" },
        { platform: "Facebook", url: "#" },
        { platform: "Google+", url: "#" },
        { platform: "Instagram", url: "#" }
      ]
    }
  ];

  return (
<Container className="doctors-section mt-5 mb-3  flex-row flex-wrap flex-justify-center">
  <h2 className="text-center mb-4 mx-auto">Our Qualified Doctors</h2>
  {/* Ajout de classes pour centrer */}
  <Row className="py-4 justify-content-center">
    {doctorsData.map((doctor, index) => (
      <DoctorCard
        key={index}
        name={doctor.name}
        specialty={doctor.specialty}
        description={doctor.description}
        image={doctor.image}
        socialLinks={doctor.socialLinks}
      />
    ))}
  </Row>
</Container>

  );
};

export default Doctors;
