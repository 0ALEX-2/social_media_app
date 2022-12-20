import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser,AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/"><img src="./images/Instagram-Logo.png" alt="logo" /></Link>
        </div>
        <div className="search-bar">
            <AiOutlineSearch size={22}/>
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav">
          <Link to="/">
            <AiOutlineHome size={25} />
          </Link>
          <Link to="/sakil">
            <AiOutlineUser size={25} />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
