import React from "react";
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Baris, erdem, Onurcan, Bilgehan } from '../Assets'
import "../CSS/Team.css";

function Team() {
  return (
    <div className="team" id="team">
      <h2>Koordinatörlerimiz</h2>
      <div className="coordinators">
        <div className="coordinator">
          <div className="coordinator-image">
            <img src={Baris} />
          </div>
          <p>Barış Cihanoğlu</p>
          <p>Aktif Üye</p>
          <div className="contact">
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
        <div className="coordinator">
          <div className="coordinator-image">
            <img src={erdem} />
          </div>
          <p>Erdem Erdoğdu</p>
          <p>Aktif Üye</p>
          <div className="contact">
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
        <div className="coordinator">
          <div className="coordinator-image">
            <img src={Onurcan} />
          </div>
          <p>Name Surname</p>
          <p>Role</p>
          <div className="contact">
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
        <div className="coordinator">
          <div className="coordinator-image">
            <img src={Bilgehan} />
          </div>
          <p>Name Surname</p>
          <p>Role</p>
          <div className="contact">
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
