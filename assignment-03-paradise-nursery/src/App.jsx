import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import './App.css';

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing-overlay">
        <h1>Paradise Nursery</h1>
        <p className="tagline">
          Bring nature indoors — shop air-purifying greens, exotic flowers and easy-care succulents.
        </p>
        <Link to="/plants" className="btn primary big">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <LandingPage />
      <AboutUs />
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;
