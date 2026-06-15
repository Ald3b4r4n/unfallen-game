import {
  createBattery,
  toggleLantern,
  drainBattery,
  rechargeBattery,
} from '@/lib/game/systems/battery';

describe('Battery (lógica pura)', () => {
  test('Cria bateria no máximo (100) com lanterna desligada', () => {
    const battery = createBattery();
    expect(battery.current).toBe(100);
    expect(battery.lanternActive).toBe(false);
  });

  test('Toggle liga a lanterna', () => {
    const battery = createBattery();
    const toggled = toggleLantern(battery);
    expect(toggled.lanternActive).toBe(true);
  });

  test('Toggle desliga a lanterna quando ativa', () => {
    const battery = toggleLantern(createBattery());
    const toggled = toggleLantern(battery);
    expect(toggled.lanternActive).toBe(false);
  });

  test('Bateria consome quando lanterna ativa', () => {
    let battery = toggleLantern(createBattery());
    battery = drainBattery(battery, 1.0); // -5 unidades
    expect(battery.current).toBe(95);
  });

  test('Bateria não fica negativa', () => {
    let battery = toggleLantern(createBattery());
    battery = drainBattery(battery, 100); // consome tudo
    expect(battery.current).toBe(0);
  });

  test('Lanterna desliga automaticamente quando bateria zera', () => {
    let battery = toggleLantern(createBattery());
    battery = drainBattery(battery, 100);
    expect(battery.lanternActive).toBe(false);
  });

  test('Bateria permanece estável quando lanterna desligada', () => {
    const battery = createBattery();
    const after = drainBattery(battery, 10.0);
    expect(after.current).toBe(100);
  });

  test('Recarregar incrementa bateria corretamente', () => {
    let battery = toggleLantern(createBattery());
    battery = drainBattery(battery, 10.0); // -50
    battery = rechargeBattery(battery, 30);
    expect(battery.current).toBe(80);
  });

  test('Recarga não excede o máximo', () => {
    const battery = createBattery();
    const recharged = rechargeBattery(battery, 999);
    expect(recharged.current).toBe(100);
  });

  test('Não liga lanterna sem bateria', () => {
    let battery = toggleLantern(createBattery());
    battery = drainBattery(battery, 100); // zera e desliga
    const tryToggle = toggleLantern(battery);
    expect(tryToggle.lanternActive).toBe(false);
  });
});
