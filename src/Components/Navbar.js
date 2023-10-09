import React from "react";
import "../CSS/Navbar.css";

function Navbar(props) {
  return (
    <div>
    <header class="header">
    <a href="#" class="logo"><img src="hackathor2.png" alt="logo"></img></a>
    <nav class="navbar">
      <a href="#" class="">About</a>
      <a href="#" class="">Photos</a>
      <a href="#" class="">Coordinators</a>
      <a href="#" class="">Contact</a>
    </nav>
    </header>
    </div>
  )
}
export default Navbar;