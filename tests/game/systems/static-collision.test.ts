import {
  PHASE_ONE_STATIC_OBSTACLES,
  isPositionBlockedByStaticObstacle,
  resolveMovementAgainstStaticObstacles,
} from '@/lib/game/systems/static-collision';

describe('Static Collision', () => {
  test('bloqueia obstaculos urbanos sem impedir predios entraveis', () => {
    expect(PHASE_ONE_STATIC_OBSTACLES.length).toBeGreaterThanOrEqual(6);
    expect(isPositionBlockedByStaticObstacle(10.8, 7.1)).toBe(true);
    expect(isPositionBlockedByStaticObstacle(6, 5)).toBe(false);
    expect(isPositionBlockedByStaticObstacle(7, 8)).toBe(false);
  });

  test('mantem movimento livre quando a proxima posicao e segura', () => {
    const next = resolveMovementAgainstStaticObstacles(
      { posX: 7, posY: 8 },
      { posX: 8, posY: 8 }
    );

    expect(next).toEqual({ posX: 8, posY: 8 });
  });

  test('impede entrada direta em obstaculo', () => {
    const next = resolveMovementAgainstStaticObstacles(
      { posX: 10.8, posY: 6.4 },
      { posX: 10.8, posY: 7.1 }
    );

    expect(next).toEqual({ posX: 10.8, posY: 6.4 });
  });

  test('permite deslizar em um eixo quando o outro esta bloqueado', () => {
    const next = resolveMovementAgainstStaticObstacles(
      { posX: 10, posY: 8 },
      { posX: 10.8, posY: 7.1 }
    );

    expect(next).toEqual({ posX: 10.8, posY: 8 });
  });
});
