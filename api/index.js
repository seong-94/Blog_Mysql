import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";

const app = express();

const port = 4000;
app.use(
  cors({
    origin: "http://localhost:3000",
    withCredentials: true,
    // origin: true,
    // credentials: true,
  })
);

// const corsOptions = {
//   origin: ["http://localhost:3000"],
//   // credentials: true,
//   withCredentials: true,
// };

// app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.listen(port, () => {
  console.log(`접속완료! http://localhost:${port}`);
});
