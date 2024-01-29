import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { yesLogo } from '../Assets'
import "../CSS/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="content">
        <div className="content-image">
          <img src={yesLogo}></img>
        </div>
        <div class="social-media" id="footer">
          <h4>Social</h4>
          <p>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a>
          </p>
          <p>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
          </p>
          <p>
            <a href="#"><FontAwesomeIcon icon={faGithub} /> Github</a>
          </p>
          <p>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
          </p>
          <p>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
          </p>
        </div>
        <div class="details">
          <h4 class="address">Address</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Cupiditate, qui!
          </p>
          <h4 class="mail">Email</h4>
          <p><a href="#">bilkentyes@gmail.com</a></p>
        </div>
      </div>
      <p>© 2023 Bilkent YES</p>
    </div>
  )
}

export default Footer