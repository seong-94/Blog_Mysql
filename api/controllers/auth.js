import { db } from "../db";

export const register = (req, res) => {
  //유저 확인
  const q = "SELECT * FROM users WHERE email = ? OR username = ? ";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return register.json(err);
    if (data.length) return res.status(409).json("존재하는 아이디 입니다.");
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
