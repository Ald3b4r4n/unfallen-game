import { resolveSaveConflict } from "@/lib/save/save-conflict";
import { SavePayload } from "@/lib/save/save-schema";

describe("Save Conflict Resolution (BR-005)", () => {
  const localSave = {
    slot: 1,
    updatedAt: "2026-06-15T12:00:00.000Z",
    playerState: { health: 90 },
  };

  const remoteSave = {
    slot: 1,
    updatedAt: "2026-06-15T13:00:00.000Z",
    playerState: { health: 100 },
  };

  it("deve preferir o remoto se ele for mais recente", () => {
    const result = resolveSaveConflict(localSave as unknown as SavePayload, remoteSave as unknown as SavePayload);
    expect(result.action).toBe("USE_REMOTE");
  });

  it("deve requerer intervenção interativa se o local for mais recente", () => {
    const newerLocal = {
      ...localSave,
      updatedAt: "2026-06-15T14:00:00.000Z",
    };
    const result = resolveSaveConflict(newerLocal as unknown as SavePayload, remoteSave as unknown as SavePayload);
    expect(result.action).toBe("PROMPT_USER");
  });

  it("deve preferir o remoto se houver empate estrito de timestamps", () => {
    const result = resolveSaveConflict(localSave as unknown as SavePayload, localSave as unknown as SavePayload);
    expect(result.action).toBe("USE_REMOTE");
  });

  it("deve retornar erro ou ignorar se os slots forem diferentes", () => {
    const slot2Local = { ...localSave, slot: 2 };
    expect(() => resolveSaveConflict(slot2Local as unknown as SavePayload, remoteSave as unknown as SavePayload)).toThrow(
      "Slots diferentes"
    );
  });
});
