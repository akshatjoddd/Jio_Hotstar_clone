import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setQuery(value); 
  };

  return (
    <nav className="navbar">

      <div className="navbarleft">
        <img
          className="navbarlogo"
          src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
          alt="logo"
        />

        <div className="navbarlinks">
          <span>TV</span>
          <span>Movies</span>
          <span>Sports</span>
          <span>Disney+</span>
          <span className="navbarkids" style={{color:"#ff9200",fontWeight:"700"}}>Kids</span>
        </div>
      </div>

      <div className="navbarright">
        <div className="navbarsearch">
          <input
            type="text"
            placeholder="Search"
            className="navbarsearchInput"
            value={inputValue}
            onChange={handleSearchChange}
          />
          <span>🔍</span>
        </div>

        <button className="navbarsubscribe">Subscribe</button>
        <span>👤</span>
      </div>

    </nav>
  );
};

export default Navbar;