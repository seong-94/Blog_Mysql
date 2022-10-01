import express from "express";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json());

// app.get("/test", (req, res) => {
//   res.json("테스트 작동중입니다.");
// });

app.use("/api/posts", postRoutes);

app.listen(4000, () => {
  console.log("접속완료");
});
