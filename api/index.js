import express from "express";

// router
// import sample from "./routes/sample.js";
import auth from "./routes/auth.js";
import users from "./routes/auth.js";
import posts from "./routes/auth.js";

// import auths from "./routes/auth2.js";

import cors from "cors";

const app = express();
const port = 4000;
app.use(
  cors({
    origin: true,
    Credential: true,
  })
);
app.use(express.json());
// app.use("/sample", sample);
app.use("/auth", auth);
app.use("/posts", posts);
app.use("/usrs", users);

// app.use("/auths", auths);
// app.get("/test", (req, res) => {
//   res.json("작동 완료");
// });

app.listen(port, () => {
  console.log(`Server Start http://localhost:${port}`);
});
