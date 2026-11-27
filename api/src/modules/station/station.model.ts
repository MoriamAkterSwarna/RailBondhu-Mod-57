import type { ObjectId } from "mongodb";
import { db } from "../../config/db.js";

export interface StationDoc {
  _id: ObjectId;
  name: string;
  city: string;
  code: string; // stored uppercase, e.g. DHK
  createdAt: Date;
  updatedAt: Date;
}

export const Station = db.collection<StationDoc>("stations");
