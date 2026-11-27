import { Router } from "express";
import { stationController } from "./station.controller.js";

export const stationRouter = Router();

stationRouter.get("/", stationController.list);
stationRouter.post("/", stationController.create);
