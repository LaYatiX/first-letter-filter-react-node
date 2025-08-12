import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import weatherRoutes from "./routes/weather.route";

const app = express();

// === Middleware ===
if (process.env.NODE_ENV === "development") {
  // Use cors ony for development
  app.use(cors());
}

app.use(express.json());
app.use(express.static("dist"));

// === Routes ===
app.use("/api/weather", weatherRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
