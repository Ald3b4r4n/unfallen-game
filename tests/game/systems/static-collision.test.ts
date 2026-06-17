import {
  PHASE_ONE_STATIC_OBSTACLES,
  isPositionBlockedByStaticObstacle,
  resolveMovementAgainstStaticObstacles,
} from '@/lib/game/systems/static-collision';

describe('Static Collision', () => {
  test('bloqueia predios e obstaculos principais da fase 1', () => {
    expect(PHASE_ONE_STATIC_OBSTACLES.length).toBeGreaterThanOrEqual(8);
    expect(isPositionBlockedByStaticObstacle(6, 5)).toBe(true);
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
      { posX: 7, posY: 8 },
      { posX: 6, posY: 5 }
    );

    expect(next).toEqual({ posX: 6, posY: 8 });
  });

  test('permite deslizar em um eixo quando o outro esta bloqueado', () => {
    const next = resolveMovementAgainstStaticObstacles(
      { posX: 4, posY: 4 },
      { posX: 6, posY: 5 }
    );

    expect(next).toEqual({ posX: 6, posY: 4 });
  });
});
