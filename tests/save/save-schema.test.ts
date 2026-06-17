import { validateAndNormalizeSave } from "@/lib/save/save-schema";

describe("Save Payload Schema Validation", () => {
  const validSave = {
    slot: 1,
    schemaVersion: 1,
    updatedAt: "2026-06-15T12:00:00.000Z",
    playerState: {
      health: 100,
      stamina: 80,
      position: { x: 10.5, y: -20.2 },
    },
    inventory: ["flashlight", "ammo-pistol"],
    gameStats: {
      checkpointsReached: ["checkpoint-1"],
      evacuationRadioHeard: false,
    },
    mission: {
      currentObjectiveId: "leave_police_base",
      completedObjectiveIds: [],
      collectedInteractionIds: [],
      activeCheckpointId: 1,
      playerPosition: { x: 6, y: 6 },
      phaseComplete: false,
      lastKnownZoneId: "base",
      updatedAt: "2026-06-15T12:00:00.000Z",
    },
  };

  it("deve aceitar um payload de save perfeitamente válido", () => {
    const result = validateAndNormalizeSave(validSave);
    expect(result).toEqual(validSave);
  });

  it("deve rejeitar se a versão do schema estiver ausente", () => {
    const invalid = { ...validSave, schemaVersion: undefined };
    expect(() => validateAndNormalizeSave(invalid)).toThrow("schemaVersion");
  });

  it("deve rejeitar se o slot de save não for 1 no MVP", () => {
    const invalid = { ...validSave, slot: 2 };
    expect(() => validateAndNormalizeSave(invalid)).toThrow("slot");
  });

  it("deve rejeitar se o inventário exceder 12 itens", () => {
    const invalid = {
      ...validSave,
      inventory: Array(13).fill("item"),
    };
    expect(() => validateAndNormalizeSave(invalid)).toThrow("limite de inventário");
  });

  it("deve normalizar e ignorar propriedades perigosas injetadas", () => {
    const dirtySave = {
      ...validSave,
      hackerProp: "malicious-code",
      playerState: {
        ...validSave.playerState,
        adminMode: true,
      },
    };
    const clean = validateAndNormalizeSave(dirtySave);
    expect((clean as Record<string, unknown>).hackerProp).toBeUndefined();
    expect((clean.playerState as Record<string, unknown>).adminMode).toBeUndefined();
    expect(clean.playerState.health).toBe(100);
  });

  it("deve rejeitar se o formato do updatedAt for inválido", () => {
    const invalid = { ...validSave, updatedAt: "not-a-date" };
    expect(() => validateAndNormalizeSave(invalid)).toThrow("updatedAt");
  });

  it("deve aceitar save antigo sem mission aplicando defaults seguros", () => {
    const legacySave: Partial<typeof validSave> = { ...validSave };
    delete legacySave.mission;

    const result = validateAndNormalizeSave(legacySave);

    expect(result.mission.currentObjectiveId).toBe("leave_police_base");
    expect(result.mission.activeCheckpointId).toBe(1);
    expect(result.mission.playerPosition).toEqual({ x: 7, y: 8 });
    expect(result.mission.phaseComplete).toBe(false);
  });

  it("deve normalizar mission parcial/corrompida sem permitir pular etapas", () => {
    const dirtySave = {
      ...validSave,
      mission: {
        currentObjectiveId: "reach_school_gate",
        completedObjectiveIds: ["leave_police_base", "search_rafael_house"],
        collectedInteractionIds: ["note-diary", "unknown"],
        activeCheckpointId: 6,
        playerPosition: { x: 999, y: -999 },
        phaseComplete: true,
        lastKnownZoneId: "invalid-zone",
        updatedAt: "invalid-date",
      },
    };

    const result = validateAndNormalizeSave(dirtySave);

    expect(result.mission.currentObjectiveId).toBe("investigate_market");
    expect(result.mission.completedObjectiveIds).toEqual(["leave_police_base"]);
    expect(result.mission.collectedInteractionIds).toEqual([]);
    expect(result.mission.activeCheckpointId).toBe(2);
    expect(result.mission.phaseComplete).toBe(false);
    expect(result.mission.lastKnownZoneId).toBeUndefined();
    expect(result.mission.updatedAt).toBe(validSave.updatedAt);
  });

  it("deve persistir phaseComplete quando todos os objetivos foram concluídos", () => {
    const result = validateAndNormalizeSave({
      ...validSave,
      mission: {
        ...validSave.mission,
        currentObjectiveId: "reach_school_gate",
        completedObjectiveIds: [
          "leave_police_base",
          "investigate_market",
          "reach_residential_path",
          "search_rafael_house",
          "reach_school_gate",
        ],
        collectedInteractionIds: ["note-backpack", "note-diary"],
        activeCheckpointId: 6,
        playerPosition: { x: 58, y: 56 },
        phaseComplete: true,
        lastKnownZoneId: "escola",
      },
    });

    expect(result.mission.phaseComplete).toBe(true);
    expect(result.mission.activeCheckpointId).toBe(6);
    expect(result.mission.lastKnownZoneId).toBe("escola");
  });
});
