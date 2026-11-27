import express from "express";
import { routes } from "./routes/index.js";
import { env } from "./config/env.js";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cors({ origin: env.WEB_URL }));



app.use("/api/v1", routes);


// Not Found Handler
const notFound = (_req: express.Request, res: express.Response) => {
  res.status(404).json({ message: "Route not found" });
};


app.use(notFound);

// Error Handler
const errorHandler = (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
}
app.use(errorHandler);
