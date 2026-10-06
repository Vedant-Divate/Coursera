import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../redux/CartSlice.jsx';

function Navbar() {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <span className="brand-leaf" role="img" aria-label="leaf">
          🌱
        </span>
        Paradise Nursery
      </Link>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/plants" className={({ isActive }) => (isActive ? 'active' : '')}>
          Plants
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
          Cart
        </NavLink>
      </div>
      <Link to="/cart" className="cart-icon" aria-label="Shopping cart">
        <span role="img" aria-label="cart">
          🛒
        </span>
        <span className="cart-count" data-testid="cart-count">
          {totalQuantity}
        </span>
      </Link>
    </nav>
  );
}

export default Navbar;
