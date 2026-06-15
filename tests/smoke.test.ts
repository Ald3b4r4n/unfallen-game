describe("Smoke Test - Unfallen Project Foundation", () => {
  it("deve executar um teste lógico básico com sucesso", () => {
    const isJestActive = true;
    expect(isJestActive).toBe(true);
  });

  it("deve compilar e executar asserções TypeScript", () => {
    const sum = (a: number, b: number): number => a + b;
    expect(sum(2, 3)).toBe(5);
  });
});
