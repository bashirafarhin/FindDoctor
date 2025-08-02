import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import doctorRoutes from "./routes/doctorRoutes";

dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env",
});

const app = express();
console.log(process.env.FRONTEND_URL);
// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());
app.use("/api/doctors", doctorRoutes);

app.get("/", (_req, res) => {
  res.send("Server is running 🚀");
});

export default app;
