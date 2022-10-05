import express from "express";

const router = express.Router();
const authUser = [];

router.get("/", (req, res) => {
  return authUser;
});

router.post("/", (req, res) => {
  console.log("auth2", req.body);
  const result = {
    username: req.body.email,
    password: req.body.password,
  };

  authUser.push(result);

  res
    .json({ message: "success", code: 200, length: authUser.length })
    .status(200);
});

export default router;
