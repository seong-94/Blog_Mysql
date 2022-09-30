import React from "react";
// import "./login.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input rea type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Login</button>
        <span>
          Create ID <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
