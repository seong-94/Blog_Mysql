import express from "express";
import postRoutes from "./routes/auth.js";
import authRoutes from "./routes/users.js";
import userRoutes from "./routes/posts.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// app.get("/test", (req, res) => {
//   res.json("작동 완료");
// });

app.listen(4000, () => {
  console.log("접속 완료");
});
