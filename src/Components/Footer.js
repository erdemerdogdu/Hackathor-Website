import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import "../CSS/Footer.css"

function Footer() {
  return (
    <div class="footer">
      <hr />
      <div class="content">
      <div>
        <img src={require("../Assets/yes.png")}></img>
        
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
      © 2023 Bilkent YES
    </div>
  )
}

export default Footer