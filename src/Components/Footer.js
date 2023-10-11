import React from 'react'
import "../CSS/Footer.css"

function Footer() {
  return (
    <div class="footer">
      <div class="content">
        <div class="social-media">
          <h4>Social</h4>
          <p>
            <a href="#"
              ><i class="fab fa-linkedin"></i> Linkedin</a>
          </p>
          <p>
            <a href="#"
              ><i class="fab fa-twitter"></i> Twitter</a>
          </p>
          <p>
            <a href="#"
              ><i class="fab fa-github"></i> Github</a>
          </p>
          <p>
            <a href="#"
              ><i class="fab fa-facebook"></i> Facebook</a>
          </p>
          <p>
            <a href="#"
              ><i class="fab fa-instagram"></i> Instagram</a>
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
      <footer>
        <hr />
        <img src="./hackathor2.png"></img>
        <br />
        © 2023 Bilkent YES
      </footer>
    </div>
  )
}

export default Footer