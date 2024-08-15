import { useState } from "react";
import "../../App.css";
import logo from "../../assets/st-food.png";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="location-selector">
          <span className="location-icon">📍</span>

          <span className="location-text">Location</span>
        </div>
      </div>

      <div className="navbar-right">
        <div className="navbar-item search">
          <span className="search-icon" onClick={toggleSearch}>
            🔍
          </span>
          {showSearch && (
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
          )}
        </div>
        <div className="navbar-item offers">Offers</div>
        <div className="navbar-item login">Login</div>
      </div>
    </nav>
  );
};

export default Navbar;
