import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo-black.png";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=react">
            <h6>리액트</h6>
          </Link>
          <Link className="link" to="/?cat=javascript">
            <h6>자바스크립트</h6>
          </Link>
          <Link className="link" to="/?cat=nodejs">
            <h6>노드</h6>
          </Link>
          <Link className="link" to="/?cat=aws">
            <h6>AWS</h6>
          </Link>
          <Link className="link" to="/?cat=mysql">
            <h6>Mysql</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              로그인
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              글쓰기
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
