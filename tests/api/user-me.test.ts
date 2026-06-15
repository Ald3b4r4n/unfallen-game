import { verifyIdToken } from "@/lib/firebase/admin";
import { GET } from "@/app/api/user/me/route";

jest.mock("@/lib/firebase/admin", () => ({
  verifyIdToken: jest.fn(),
}));

describe("GET /api/user/me - Authentication & Profile API", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve retornar 401 Unauthorized se o cabeçalho Authorization estiver ausente", async () => {
    const request = new Request("http://localhost/api/user/me");
    const response = await GET(request);
    expect(response.status).toBe(401);
    const json = await response.json();
    expect(json.error).toBe("Não autorizado. Token ausente.");
  });

  it("deve retornar 401 Unauthorized se o formato do Bearer token for inválido", async () => {
    const request = new Request("http://localhost/api/user/me", {
      headers: {
        Authorization: "InvalidFormatToken",
      },
    });
    const response = await GET(request);
    expect(response.status).toBe(401);
    const json = await response.json();
    expect(json.error).toBe("Não autorizado. Formato do token inválido.");
  });

  it("deve retornar 401 Unauthorized se a assinatura do Firebase ID Token for inválida", async () => {
    (verifyIdToken as jest.Mock).mockRejectedValue(new Error("Token inválido"));
    const request = new Request("http://localhost/api/user/me", {
      headers: {
        Authorization: "Bearer invalid-token",
      },
    });
    const response = await GET(request);
    expect(response.status).toBe(401);
    const json = await response.json();
    expect(json.error).toBe("Token inválido ou expirado.");
  });

  it("deve retornar 200 OK e dados do usuário quando o ID Token é válido", async () => {
    const mockUser = { uid: "user-123", email: "rafael@unfallen.com.br" };
    (verifyIdToken as jest.Mock).mockResolvedValue(mockUser);

    const request = new Request("http://localhost/api/user/me", {
      headers: {
        Authorization: "Bearer valid-token",
      },
    });
    const response = await GET(request);
    expect(response.status).toBe(200);
    const json = await response.json();
    expect(json.user).toEqual(mockUser);
  });
});
