import { verifyIdToken } from "@/lib/firebase/admin";
import * as repository from "@/lib/save/save-repository";
import { GET as loadGET } from "@/app/api/save/load/route";
import { POST as writePOST } from "@/app/api/save/write/route";
import { DELETE as deleteDELETE } from "@/app/api/save/delete/route";

jest.mock("@/lib/firebase/admin", () => ({
  verifyIdToken: jest.fn(),
}));

jest.mock("@/lib/save/save-repository", () => ({
  loadSaveRecord: jest.fn(),
  writeSaveRecord: jest.fn(),
  deleteSaveRecord: jest.fn(),
}));

describe("API Save Routes (/api/save/*)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const validSavePayload = {
    slot: 1,
    schemaVersion: 1,
    updatedAt: "2026-06-15T12:00:00.000Z",
    playerState: {
      health: 100,
      stamina: 80,
      position: { x: 0, y: 0 },
    },
    inventory: ["flashlight"],
    gameStats: {
      checkpointsReached: [],
      evacuationRadioHeard: false,
    },
  };

  describe("GET /api/save/load", () => {
    it("deve retornar 401 Unauthorized se o token estiver ausente", async () => {
      const request = new Request("http://localhost/api/save/load?slot=1");
      const response = await loadGET(request);
      expect(response.status).toBe(401);
    });

    it("deve retornar 400 Bad Request se o slot for inválido", async () => {
      (verifyIdToken as jest.Mock).mockResolvedValue({ uid: "user-123" });
      const request = new Request("http://localhost/api/save/load?slot=2", {
        headers: { Authorization: "Bearer token" },
      });
      const response = await loadGET(request);
      expect(response.status).toBe(400);
      const json = await response.json();
      expect(json.error).toContain("slot");
    });

    it("deve carregar com sucesso o save do UID autenticado", async () => {
      (verifyIdToken as jest.Mock).mockResolvedValue({ uid: "user-123" });
      (repository.loadSaveRecord as jest.Mock).mockResolvedValue(validSavePayload);

      const request = new Request("http://localhost/api/save/load?slot=1", {
        headers: { Authorization: "Bearer token" },
      });
      const response = await loadGET(request);
      expect(response.status).toBe(200);
      const json = await response.json();
      expect(json.save).toEqual(validSavePayload);
      expect(repository.loadSaveRecord).toHaveBeenCalledWith("user-123", 1);
    });
  });

  describe("POST /api/save/write", () => {
    it("deve retornar 401 se não autenticado", async () => {
      const request = new Request("http://localhost/api/save/write", {
        method: "POST",
        body: JSON.stringify(validSavePayload),
      });
      const response = await writePOST(request);
      expect(response.status).toBe(401);
    });

    it("deve gravar com sucesso e descartar o userId enviado no body", async () => {
      (verifyIdToken as jest.Mock).mockResolvedValue({ uid: "real-uid-123" });
      (repository.writeSaveRecord as jest.Mock).mockResolvedValue(true);

      const bodyWithFakeUid = {
        ...validSavePayload,
        userId: "hacker-uid",
      };

      const request = new Request("http://localhost/api/save/write", {
        method: "POST",
        headers: { Authorization: "Bearer token", "Content-Type": "application/json" },
        body: JSON.stringify(bodyWithFakeUid),
      });

      const response = await writePOST(request);
      expect(response.status).toBe(200);
      
      expect(repository.writeSaveRecord).toHaveBeenCalledWith("real-uid-123", expect.objectContaining({ slot: 1 }));
    });
  });

  describe("DELETE /api/save/delete", () => {
    it("deve retornar 401 se não autenticado", async () => {
      const request = new Request("http://localhost/api/save/delete?slot=1", {
        method: "DELETE",
      });
      const response = await deleteDELETE(request);
      expect(response.status).toBe(401);
    });

    it("deve deletar somente o save do UID autenticado", async () => {
      (verifyIdToken as jest.Mock).mockResolvedValue({ uid: "user-123" });
      (repository.deleteSaveRecord as jest.Mock).mockResolvedValue(true);

      const request = new Request("http://localhost/api/save/delete?slot=1", {
        method: "DELETE",
        headers: { Authorization: "Bearer token" },
      });
      const response = await deleteDELETE(request);
      expect(response.status).toBe(200);
      expect(repository.deleteSaveRecord).toHaveBeenCalledWith("user-123", 1);
    });
  });
});
