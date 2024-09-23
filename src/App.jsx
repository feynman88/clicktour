import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Destinations from "./pages/destinations-page";
import Nav from "./Nav";
import "./output.css";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Sustainability from "./pages/Sustainability";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
        <Route path="/sustainability" element={<Sustainability />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
