import { Router } from "express";
import { healthRouter } from "../modules/health/health.route.js";
import { stationRouter } from "./../modules/station/station.routes.js";


export const routes = Router();

routes.use("/health", healthRouter);
routes.use("/stations", stationRouter);
