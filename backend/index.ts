import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import breathController from "./controller/breathController";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4242;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/hello", breathController.getBreath);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
