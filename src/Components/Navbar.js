import React, {useRef} from "react";
<<<<<<< HEAD
// import { FaBars, FaTimes } from "react-icons/fa";
=======
import { FaBars, FaTimes } from "react-icons/fa";
>>>>>>> 69e0b38b07cbec4e4a06c8ca5251f797566b433f
import "../CSS/Navbar.css";

function Navbar(props) {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  const [width, setWidth] = React.useState(window.innerWidth);
<<<<<<< HEAD
  const breakpoint = 620;
=======
>>>>>>> 69e0b38b07cbec4e4a06c8ca5251f797566b433f

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
<<<<<<< HEAD

  if (width > 768)
  {
    return (
      <div>
=======
  
  if (width > 768)
  {
    return (
>>>>>>> 69e0b38b07cbec4e4a06c8ca5251f797566b433f
      <header class="header">
      <a href="#" class="logo"><img src="hackathor2.png" alt="logo"></img></a>
      <nav class="navbar">
        <a href="#" class="">About</a>
        <a href="#" class="">Photos</a>
        <a href="#" class="">Coordinators</a>
        <a href="#" class="">Contact</a>
      </nav>
      </header>
<<<<<<< HEAD
      </div>
=======
>>>>>>> 69e0b38b07cbec4e4a06c8ca5251f797566b433f
    )
  }
  else{
    return ( 
<<<<<<< HEAD
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
=======
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
>>>>>>> 69e0b38b07cbec4e4a06c8ca5251f797566b433f
    )
  }

}
export default Navbar;