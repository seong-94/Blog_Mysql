import React from "react";
import logo from "../img/logo-no-background.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/study">
            <h6>공부</h6>
          </Link>
          <Link className="link" to="/study">
            <h6>음악</h6>
          </Link>
          <Link className="link" to="/study">
            <h6>동물</h6>
          </Link>
          <span>이름</span>
          <span>로그인 & 로그아웃</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
