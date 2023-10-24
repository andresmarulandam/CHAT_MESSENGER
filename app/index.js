import express from "express";
import cors from "cors";

import { router as api } from "./api/index.js";
export const app = express();

// Parse Json
app.use(express.json());

// Add CORS
app.use(cors());

// Mount API
app.use("/api", api);

app.use((req, res, next) => {
  next({
    message: "Route Not Found",
    status: 404,
  });
});

// Error handler
app.use((err, req, res, next) => {
  const { message = "", status = 500, error } = err;

  res.status(status);
  res.json({
    error: {
      message,
      status,
      error,
    },
  });
});
