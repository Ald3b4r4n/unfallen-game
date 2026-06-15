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
});
