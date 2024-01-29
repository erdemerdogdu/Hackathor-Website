import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Team from "./Components/Team"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
