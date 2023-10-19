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
      <iframe id="iframe" src='https://my.spline.design/untitled-95349a3cc9f2583d8899c74574ecc42d/' >annen</iframe>
      <Home />
      <Body />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
