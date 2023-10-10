import React from 'react'
import "../CSS/Footer.css"

function Footer() {
  return (
    <div class="Footer">
        <footer class="top">
            <div class="links">
            <div class="links-column">
                <h2>Address</h2>
                <a>Example</a>
            </div>
            <div class="links-column">
                <h2>Mail</h2>
                <a>Example</a>
            </div>
            <div class="links-column socials-column">
                <h2>Social Media</h2>
                <p>
                Follow us on social media to find out the latest updates on our
                progress.
                </p>
                <div class="socials">
                <a class="fa-brands fa-facebook"></a>
                <a class="fa-brands fa-instagram"></a>
                <a class="fa-brands fa-linkedin"></a>
                </div>
            </div>
            </div>
        </footer>
        <footer class="bottom">
            <img src="hackathor2.png" />
            <p class="copyright">© 2023 All rights reserved</p>
        </footer>
    </div>
  )
}

export default Footer