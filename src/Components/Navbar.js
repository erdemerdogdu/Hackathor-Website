import React, {useRef} from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import "../CSS/Navbar.css";

function Navbar(props) {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  if (width > 768)
  {
    return (
      <header class="header">
        <a href="#" class="logo"><img src={require("../Assets/hackathor.png")} alt="logo"></img></a>
        <nav class="navbar">
          <a href="#whatis" class="">About</a>
          <a href="#" class="">Photos</a>
          <a href="#" class="">Coordinators</a>
          <a href="#footer" class="">Contact</a>
        </nav>
      </header>
    )
  }
  else{
    return ( 
      <header>
        <h3>LOGO</h3>
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">My work</a>
          <a href="/#">Blog</a>
          <a href="/#">About me</a>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </header>
    )
  }

}
export default Navbar;