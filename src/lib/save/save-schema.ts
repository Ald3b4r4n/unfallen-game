import {
  MissionSaveState,
  normalizeMissionSaveState,
} from "../game/systems/mission-save";

export interface SavePayload {
  slot: number;
  schemaVersion: number;
  updatedAt: string;
  playerState: {
    health: number;
    stamina: number;
    position: { x: number; y: number };
  };
  inventory: string[];
  gameStats: {
    checkpointsReached: string[];
    evacuationRadioHeard: boolean;
  };
  mission: MissionSaveState;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateAndNormalizeSave(raw: any): SavePayload {
  if (!raw) {
    throw new Error("Payload de save nulo ou vazio");
  }

  // Validação da versão
  if (typeof raw.schemaVersion !== "number") {
    throw new Error("Campo obrigatório ausente: schemaVersion");
  }

  // Validação do slot (MVP restringe estritamente a 1)
  if (typeof raw.slot !== "number" || raw.slot !== 1) {
    throw new Error("Slot de save inválido. O MVP suporta apenas o slot 1.");
  }

  // Validação de data updatedAt
  if (typeof raw.updatedAt !== "string" || isNaN(Date.parse(raw.updatedAt))) {
    throw new Error("Formato inválido para o campo updatedAt");
  }

  // Validação e normalização de playerState
  const rawState = raw.playerState || {};
  if (
    typeof rawState.health !== "number" ||
    typeof rawState.stamina !== "number" ||
    !rawState.position ||
    typeof rawState.position.x !== "number" ||
    typeof rawState.position.y !== "number"
  ) {
    throw new Error("Estrutura playerState inválida ou corrompida");
  }

  // Validação e normalização do inventário (MVP limita a 12 slots)
  if (!Array.isArray(raw.inventory)) {
    throw new Error("Campo inventory deve ser um array");
  }

  if (raw.inventory.length > 12) {
    throw new Error("Excedido o limite de inventário de 12 slots no MVP.");
  }

  // Validação e normalização de gameStats
  const rawStats = raw.gameStats || {};
  if (!Array.isArray(rawStats.checkpointsReached) || typeof rawStats.evacuationRadioHeard !== "boolean") {
    throw new Error("Estrutura gameStats inválida");
  }

  // Filtra propriedades indesejadas (sanitização contra injeção de parâmetros)
  return {
    slot: raw.slot,
    schemaVersion: raw.schemaVersion,
    updatedAt: raw.updatedAt,
    playerState: {
      health: rawState.health,
      stamina: rawState.stamina,
      position: {
        x: rawState.position.x,
        y: rawState.position.y,
      },
    },
    inventory: (raw.inventory as unknown[]).map((item) => String(item)),
    gameStats: {
      checkpointsReached: (rawStats.checkpointsReached as unknown[]).map((cp) => String(cp)),
      evacuationRadioHeard: rawStats.evacuationRadioHeard,
    },
    mission: normalizeMissionSaveState(raw.mission, raw.updatedAt),
  };
}
