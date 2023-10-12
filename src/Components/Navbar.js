import React, {useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
      <a href="#" class="logo"><img src="hackathor2.png" alt="logo"></img></a>
      <nav class="navbar">
        <a href="#" class="">About</a>
        <a href="#" class="">Photos</a>
        <a href="#" class="">Coordinators</a>
        <a href="#" class="">Contact</a>
      </nav>
      </header>
    )
  }
  else{
    return ( 
      <header>
      <a href="#" class="logo"><img src="hackathor2.png" alt="logo"></img></a>
			<nav ref={navRef}>
        <a href="#" class="">About</a>
        <a href="#" class="">Photos</a>
        <a href="#" class="">Coordinators</a>
        <a href="#" class="">Contact</a>
				<button className="" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button class="" onClick={showNavbar}>
				<FaBars />
			</button>
      </header>
    )
  }

}
export default Navbar;