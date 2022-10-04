import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  //유저 확인
  const q = "SELECT * FROM users WHERE email = ? OR username = ? ";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("존재하는 아이디 입니다.");

    // 비밀 번호 암호화
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(200).json("아이디가 생성 돼었습니다.");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
