import express from "express";
import cors from "cors";
import mosqueRouter from "./mosque-timetable.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ status: "ok", service: "Muslim Companion API" });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", mosqueRouter);

const port = parseInt(process.env.PORT || "3000");
console.log(`Starting server on port ${port}...`);
console.log(`Environment: ${process.env.NODE_ENV}`);

app.listen(port, "0.0.0.0", () => {
  console.log(`Muslim Companion API listening on port ${port}`);
});

export default app;