import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

if (!uri && process.env.NODE_ENV !== "test") {
  console.warn("Aviso: MONGODB_URI não configurada no ambiente.");
}

export function getMongoClient(): Promise<MongoClient> {
  if (clientPromise) {
    return clientPromise;
  }

  client = new MongoClient(uri);
  clientPromise = client.connect();
  return clientPromise;
}
