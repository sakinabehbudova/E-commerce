import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FaAlignCenter } from "react-icons/fa";

export const Navbar = () => {
  const [showIcon, setShowIcon] = useState(false);
  const handleToggle = () => {
    setShowIcon(!showIcon);
    console.log(showIcon);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="navbar-header">
            <Link to="/">
              <h3>Phones</h3>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={handleToggle}
            >
              <FaAlignCenter />
            </button>
          </div>
          <ul className={showIcon ? "nav-links show" : "nav-links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/phones">Phones</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
