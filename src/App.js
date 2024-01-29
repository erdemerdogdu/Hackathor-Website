import "./App.css";
import { HashLink as Link } from "react-router-hash-link";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Team from "./Components/Team"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
