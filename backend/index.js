import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config();

const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

// //middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// const corsOptions = {
//     origin: 'http//localhost:5173',
//     credentials: true,
// }
// app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
