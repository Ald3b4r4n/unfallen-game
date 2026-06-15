import { verifyIdToken } from "@/lib/firebase/admin";

// Mock dos subcaminhos modulares do firebase-admin para isolar testes unitários
const mockVerifyIdToken = jest.fn();

jest.mock("firebase-admin/app", () => ({
  getApps: () => [],
  initializeApp: jest.fn(),
  cert: jest.fn(),
}));

jest.mock("firebase-admin/auth", () => ({
  getAuth: () => ({
    verifyIdToken: mockVerifyIdToken,
  }),
}));


describe("Firebase Admin Helper - verifyIdToken", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve decodificar o token com sucesso e extrair o uid e email", async () => {
    mockVerifyIdToken.mockResolvedValue({
      uid: "user-abc",
      email: "test@unfallen.com",
    });

    const user = await verifyIdToken("legit-token");
    expect(user).toEqual({
      uid: "user-abc",
      email: "test@unfallen.com",
    });
    expect(mockVerifyIdToken).toHaveBeenCalledWith("legit-token");
  });

  it("deve falhar e propagar erro se a verificação de token rejeitar", async () => {
    mockVerifyIdToken.mockRejectedValue(new Error("Token expirado"));

    await expect(verifyIdToken("expired-token")).rejects.toThrow("Token expirado");
    expect(mockVerifyIdToken).toHaveBeenCalledWith("expired-token");
  });

  it("garante que as variáveis privadas do Admin SDK não são expostas como NEXT_PUBLIC_", () => {
    const nextPublicKeys = Object.keys(process.env).filter((key) =>
      key.startsWith("NEXT_PUBLIC_")
    );
    expect(nextPublicKeys).not.toContain("NEXT_PUBLIC_FIREBASE_PRIVATE_KEY");
    expect(nextPublicKeys).not.toContain("NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL");
  });
});
