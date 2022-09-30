import React from "react";
// import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth">
      <h1>Login Page</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button>Login</button>
        <span>
          Create ID <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
