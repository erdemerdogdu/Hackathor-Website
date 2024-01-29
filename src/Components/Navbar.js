import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {hackhathorLogo} from '../Assets'
import "../CSS/Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = (e) => {
      if(document.getElementById("mobile-list").classList.contains("is-open"))
        document.getElementById("mobile-list").classList.remove("is-open");
      else
        setTimeout(() => {
          if(!document.getElementById("mobile-list").classList.contains("is-open"))
            document.getElementById("mobile-list").classList.add("is-open");
          else
            document.getElementById("mobile-list").classList.remove("is-open");
        }, 500)
      
      setIsOpen((open) => !open)
    }

    return (
      <div className="navBar">
        <header>
          <div className={`header-inner ${isOpen ? "is-open" : ""}`}>
            <div className={`mobile-nav ${isOpen ? "is-open" : ""}`}>
              <div className="mobile-upper">
                <img src={hackhathorLogo} alt="hackathor"/>
                <FontAwesomeIcon onClick={toggleMenu} icon={faBars} />
              </div>
              <ul className={`mobile-list`} id="mobile-list">
                <li onClick={toggleMenu}><a href="#about">Hakkında</a></li>
                <li onClick={toggleMenu}><a href="#team">Koordinatörler</a></li>
                <li onClick={toggleMenu}><a href="#footer">İletişim</a></li>
              </ul>
            </div>
            <div className={`desktop-nav ${isOpen ? "is-open" : ""}`}>
              <img src={hackhathorLogo} alt="hackathor"/>
              <ul className="desktop-list">
                <li><a href="#about">Hakkında</a></li>
                <li><a href="#team">Koordinatörler</a></li>
                <li><a href="#footer">İletişim</a></li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    )
}
export default Navbar;