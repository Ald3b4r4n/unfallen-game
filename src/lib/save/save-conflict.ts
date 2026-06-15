import { SavePayload } from "./save-schema";

export interface ConflictResult {
  action: "USE_REMOTE" | "PROMPT_USER";
}

export function resolveSaveConflict(local: SavePayload, remote: SavePayload): ConflictResult {
  if (local.slot !== remote.slot) {
    throw new Error("Slots diferentes");
  }

  const localTime = new Date(local.updatedAt).getTime();
  const remoteTime = new Date(remote.updatedAt).getTime();

  if (localTime > remoteTime) {
    return { action: "PROMPT_USER" };
  }

  // Se o remoto for mais recente ou em caso de empate, o remoto prevalece
  return { action: "USE_REMOTE" };
}
