import type { Request, Response } from "express";
import { stationService } from "./station.service.js";

const list = async (_req: Request, res: Response) => {
  const stations = await stationService.getAllStations();
  res.status(200).json(stations);
};

const create = async (req: Request, res: Response) => {
  const { name, city, code } = req.body ?? {};

  if (!name || !city || !code) {
    return res.status(400).json({ message: "name, city and code are required" });
  }

  const station = await stationService.createStation({ name, city, code });
  res.status(201).json(station);
};

export const stationController = {
  list,
  create,
};
