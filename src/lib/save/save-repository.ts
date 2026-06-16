import { getMongoClient } from "../mongodb/client";
import { SavePayload, validateAndNormalizeSave } from "./save-schema";

async function getSavesCollection() {
  const client = await getMongoClient();
  const db = client.db("unfallen");
  const collection = db.collection("saves");
  
  // Cria índice exclusivo composto { uid: 1, slot: 1 } se ele não existir
  await collection.createIndex({ uid: 1, slot: 1 }, { unique: true });
  return collection;
}

export async function loadSaveRecord(uid: string, slot: number): Promise<SavePayload | null> {
  const collection = await getSavesCollection();
  const record = await collection.findOne({ uid, slot });
  if (!record) return null;

  return validateAndNormalizeSave({
    slot: record.slot,
    schemaVersion: record.schemaVersion,
    updatedAt: record.updatedAt,
    playerState: record.playerState,
    inventory: record.inventory,
    gameStats: record.gameStats,
    mission: record.mission,
  });
}

export async function writeSaveRecord(uid: string, payload: SavePayload): Promise<boolean> {
  const collection = await getSavesCollection();
  
  await collection.updateOne(
    { uid, slot: payload.slot },
    {
      $set: {
        uid,
        slot: payload.slot,
        schemaVersion: payload.schemaVersion,
        updatedAt: payload.updatedAt,
        playerState: payload.playerState,
        inventory: payload.inventory,
        gameStats: payload.gameStats,
        mission: payload.mission,
      },
    },
    { upsert: true }
  );
  return true;
}

export async function deleteSaveRecord(uid: string, slot: number): Promise<boolean> {
  const collection = await getSavesCollection();
  const result = await collection.deleteOne({ uid, slot });
  return result.deletedCount > 0;
}
