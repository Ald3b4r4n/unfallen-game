import {
  createStamina,
  tryDash,
  regenerateStamina,
  resetStamina,
} from '@/lib/game/systems/stamina';

describe('Stamina (lógica pura)', () => {
  test('Cria estamina no máximo (100)', () => {
    const stamina = createStamina();
    expect(stamina.current).toBe(100);
    expect(stamina.max).toBe(100);
  });

  test('Dash consome estamina corretamente', () => {
    const stamina = createStamina();
    const result = tryDash(stamina);
    expect(result.success).toBe(true);
    expect(result.stamina.current).toBe(75); // 100 - 25
  });

  test('Estamina não fica negativa após dash', () => {
    let stamina = createStamina();
    // Consumir quase tudo: 4 dashes = 100 estamina
    for (let i = 0; i < 4; i++) {
      const r = tryDash(stamina);
      stamina = r.stamina;
    }
    expect(stamina.current).toBe(0);
  });

  test('Dash falha quando estamina é insuficiente', () => {
    let stamina = createStamina();
    // 4 dashes esgotam tudo
    for (let i = 0; i < 4; i++) {
      stamina = tryDash(stamina).stamina;
    }
    const result = tryDash(stamina);
    expect(result.success).toBe(false);
    expect(result.stamina.current).toBe(0);
  });

  test('Regenera estamina por segundo', () => {
    let stamina = createStamina();
    stamina = tryDash(stamina).stamina; // 75
    stamina = regenerateStamina(stamina, 1.0); // +15 = 90
    expect(stamina.current).toBeCloseTo(90);
  });

  test('Regeneração não excede o máximo', () => {
    const stamina = createStamina();
    const regenerated = regenerateStamina(stamina, 10.0);
    expect(regenerated.current).toBe(100);
  });

  test('Reset restaura estamina ao máximo', () => {
    let stamina = createStamina();
    stamina = tryDash(stamina).stamina;
    stamina = tryDash(stamina).stamina;
    const reset = resetStamina(stamina);
    expect(reset.current).toBe(100);
  });
});
