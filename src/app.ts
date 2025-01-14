import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app: Application = express();

// parsers
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000/", "", "http://localhost:4173"], credentials: true
}));
app.use(cookieParser());



// test route
app.get("/", (req: Request, res: Response) => {
  res.send("Server running");
});

// // global error handler
// app.use(globalErrorHandler);

// // not found route
// app.use(NotFound);

export default app;
