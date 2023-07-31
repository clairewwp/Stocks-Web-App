import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleClickHistory=()=> {alert("Please select a stock symbol to see its quote and price history")};
  
  return (//this is the navigation bar
    <div className="header">
      <NavLink to="/">
        <h2>CL's Stock Tracker.</h2>{" "}
      </NavLink>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <NavLink to="/" onClick={handleClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/stock" onClick={handleClick}>Stocks</NavLink>
        </li>
        <li>
          {/* <NavLink to="/quote" onClick={handleClick}>Quote</NavLink> */}
          <NavLink to="/stock" onClick={handleClickHistory}>Quote</NavLink>
        </li>
        <li>
          <NavLink to="/history" onClick={handleClick}>Price History</NavLink>
        </li>
      </ul>
      <div className="hamburgerIcon" onClick={handleClick}>
        {click ? (
          <FaTimes size={35} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={35} style={{ color: "#fff" }} />
        )}
        {/*Can I do like this? is it kinda hard coded? */}
      </div>
    </div>
  );
}
