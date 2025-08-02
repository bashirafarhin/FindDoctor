import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import doctorRoutes from "./routes/doctorRoutes";

dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env",
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/doctors", doctorRoutes);

app.get("/", (_req, res) => {
  res.send("Server is running 🚀");
});

export default app;
