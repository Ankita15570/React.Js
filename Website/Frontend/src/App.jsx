import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const location = useLocation();
  return (
    <div className="app-wrapper">
      <header className="header">
        <span className="logo">🛒 Patil Store</span>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/user/101">User</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {location.pathname === "/contact" && null}
      <footer className="footer-fixed">
        <p>© 2026 Patil Store | All Rights Reserved</p>
      </footer>
    </div>
  );
}
export default App;
