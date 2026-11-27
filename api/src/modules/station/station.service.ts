import { ObjectId } from "mongodb";
import { Station, type StationDoc } from "./station.model.js";

export type CreateStationInput = {
  name: string;
  city: string;
  code: string;
};

const getAllStations = async (): Promise<StationDoc[]> => {
  return Station.find().toArray();
};

const createStation = async (input: CreateStationInput): Promise<StationDoc> => {
  const now = new Date();
  const doc: StationDoc = {
    _id: new ObjectId(),
    name: input.name,
    city: input.city,
    code: input.code.toUpperCase(),
    createdAt: now,
    updatedAt: now,
  };

  await Station.insertOne(doc);
  return doc;
};

export const stationService = {
  getAllStations,
  createStation,
};
