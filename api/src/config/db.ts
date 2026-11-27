import { MongoClient, type Db } from "mongodb";
import { env } from "./env.js";

const client = new MongoClient(env.MONGODB_URI);

export const db: Db = client.db();

export const connectDB = async () => {
  await client.connect();
  console.log(`MongoDB connected: ${client.db().databaseName}`);
};
