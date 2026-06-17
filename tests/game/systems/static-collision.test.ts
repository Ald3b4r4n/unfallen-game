import {
  PHASE_ONE_STATIC_OBSTACLES,
  isPositionBlockedByStaticObstacle,
  resolveMovementAgainstStaticObstacles,
} from '@/lib/game/systems/static-collision';

describe('Static Collision', () => {
  test('bloqueia obstaculos urbanos sem impedir predios entraveis', () => {
    expect(PHASE_ONE_STATIC_OBSTACLES.length).toBeGreaterThanOrEqual(6);
    expect(isPositionBlockedByStaticObstacle(11.5, 7.1)).toBe(true);
    expect(isPositionBlockedByStaticObstacle(6, 6)).toBe(false);
    expect(isPositionBlockedByStaticObstacle(5, 6)).toBe(false);
    expect(isPositionBlockedByStaticObstacle(6, 5)).toBe(true); // Divider wall is blocked
  });

  test('mantem movimento livre quando a proxima posicao e segura', () => {
    const next = resolveMovementAgainstStaticObstacles(
      { posX: 5, posY: 6 },
      { posX: 6, posY: 6 }
    );

    expect(next).toEqual({ posX: 6, posY: 6 });
  });

  test('impede entrada direta em obstaculo', () => {
    const next = resolveMovementAgainstStaticObstacles(
      { posX: 11.5, posY: 6.0 },
      { posX: 11.5, posY: 7.1 }
    );

    expect(next).toEqual({ posX: 11.5, posY: 6.0 });
  });

  test('permite deslizar em um eixo quando o outro esta bloqueado', () => {
    const next = resolveMovementAgainstStaticObstacles(
      { posX: 10, posY: 8 },
      { posX: 11.5, posY: 7.1 }
    );

    expect(next).toEqual({ posX: 10, posY: 7.1 });
  });
});
