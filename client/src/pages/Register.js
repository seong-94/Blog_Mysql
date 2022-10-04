import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", inputs);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          rea
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handelSubmit}>로그인</button>
        <span>
          아이디가 있으십니까? <Link to="/login">로그인 하기</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
