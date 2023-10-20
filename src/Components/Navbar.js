import React, {useRef} from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import "../CSS/Navbar.css";

function Navbar(props) {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  if (width > 768)
  {
    return (
      <div>
      <header class="header">
      <img src="./hackathor.png" />
      <nav class="navbar">
        <a href="#whatis" class="">About</a>
        <a href="#" class="">Photos</a>
        <a href="#" class="">Coordinators</a>
        <a href="#footer" class="">Contact</a>
      </nav>
      </header>
      </div>
    )
  }
  else{
    return ( 
      <>
      <style>
        
      </style>
      <h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					{/* <FaTimes /> */}
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				{/* <FaBars /> */}
			</button>
      </>
    )
  }

}
export default Navbar;