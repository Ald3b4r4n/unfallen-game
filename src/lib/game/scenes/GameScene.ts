import Phaser from "phaser";
import { toScreen, toGrid } from "../isometric/iso-math";
import { sortEntities } from "../isometric/depth-sort";
import { SortableEntity } from "../isometric/iso-types";

interface TestEntity extends SortableEntity {
  color: number;
  label: string;
}

export default class GameScene extends Phaser.Scene {
  private graphics!: Phaser.GameObjects.Graphics;
  private debugText!: Phaser.GameObjects.Text;
  private infoText!: Phaser.GameObjects.Text;

  private tileWidth = 64;
  private tileHeight = 32;

  // Centro do grid no canvas
  private gridCenterX = 0;
  private gridCenterY = 0;

  constructor() {
    super("GameScene");
  }

  create() {
    const { width, height } = this.scale;
    this.gridCenterX = width / 2;
    this.gridCenterY = height / 2 + 50;

    this.graphics = this.add.graphics();

    // Título do Bloco 05
    this.add.text(width / 2, 40, "UNFALLEN", {
      fontFamily: "monospace",
      fontSize: "32px",
      color: "#feb2b2",
      fontStyle: "bold"
    }).setOrigin(0.5);

    this.add.text(width / 2, 80, "BLOCO 05 — SISTEMA ISOMÉTRICO TÉCNICO", {
      fontFamily: "monospace",
      fontSize: "16px",
      color: "#38a169",
      fontStyle: "bold"
    }).setOrigin(0.5);

    this.infoText = this.add.text(width / 2, 115, "Validação matemática de projeção 2:1 e depth-sorting dinâmico", {
      fontFamily: "monospace",
      fontSize: "12px",
      color: "#a0aec0"
    }).setOrigin(0.5);

    // Texto de coordenadas sob o mouse
    this.debugText = this.add.text(20, 20, "Mouse: (0.00, 0.00)", {
      fontFamily: "monospace",
      fontSize: "14px",
      color: "#63b3ed"
    });

    // Legenda das entidades na tela
    this.add.text(20, height - 40, "[ESC] Menu de Pausa  |  Mouse projeta coordenadas em tempo real", {
      fontFamily: "monospace",
      fontSize: "12px",
      color: "#718096"
    });
  }

  update() {
    this.graphics.clear();

    const mousePointer = this.input.activePointer;
    
    // Converte a posição do mouse para o espaço lógico do grid (Z = 0)
    const relativeMouseX = mousePointer.x - this.gridCenterX;
    const relativeMouseY = mousePointer.y - this.gridCenterY;
    const logicalMouse = toGrid({ x: relativeMouseX, y: relativeMouseY }, this.tileWidth, this.tileHeight);

    this.debugText.setText(
      `Coordenadas Lógicas do Mouse: X=${logicalMouse.x.toFixed(2)}, Y=${logicalMouse.y.toFixed(2)}`
    );

    // 1. Desenhar o Grid Isométrico de Solo (Z = 0)
    this.drawIsometricGrid(5, 5);

    // 2. Definir entidades de teste com volumes diferentes para validar o depth-sorting
    const entities: TestEntity[] = [
      { id: "cubo-verde", x: 1, y: 1, z: 0, width: 1, length: 1, height: 1, color: 0x38a169, label: "Verde (1,1)" },
      { id: "cubo-azul", x: 2, y: 1, z: 0, width: 1, length: 1, height: 1, color: 0x3182ce, label: "Azul (2,1)" },
      { id: "cubo-vermelho", x: 1, y: 2, z: 0, width: 1, length: 1, height: 1, color: 0xe53e3e, label: "Vermelho (1,2)" },
      // Cubo flutuante (Z = 0.6) para testar sobreposição tridimensional
      { id: "cubo-elevado", x: 1, y: 1.5, z: 0.6, width: 0.8, length: 0.8, height: 0.8, color: 0xdd6b20, label: "Elevado" }
    ];

    // 3. Ordenar as entidades usando o algoritmo depth-sort puro
    const sortedEntities = sortEntities(entities);

    // 4. Renderizar cada prisma volumétrico na ordem ordenada
    sortedEntities.forEach(entity => {
      this.drawIsometricPrism(entity);
    });

    // 5. Desenhar cursor sob o mouse se estiver dentro dos limites do grid
    if (logicalMouse.x >= 0 && logicalMouse.x <= 5 && logicalMouse.y >= 0 && logicalMouse.y <= 5) {
      const snappedGridX = Math.floor(logicalMouse.x);
      const snappedGridY = Math.floor(logicalMouse.y);
      this.drawTileCursor(snappedGridX, snappedGridY);
    }
  }

  /**
   * Desenha o grid isométrico de solo
   */
  private drawIsometricGrid(sizeX: number, sizeY: number) {
    this.graphics.lineStyle(1, 0x2d3748, 0.8);

    // Desenhar linhas paralelas no eixo Y
    for (let x = 0; x <= sizeX; x++) {
      const pStart = toScreen({ x, y: 0, z: 0 }, this.tileWidth, this.tileHeight);
      const pEnd = toScreen({ x, y: sizeY, z: 0 }, this.tileWidth, this.tileHeight);
      this.graphics.lineBetween(
        this.gridCenterX + pStart.x,
        this.gridCenterY + pStart.y,
        this.gridCenterX + pEnd.x,
        this.gridCenterY + pEnd.y
      );
    }

    // Desenhar linhas paralelas no eixo X
    for (let y = 0; y <= sizeY; y++) {
      const pStart = toScreen({ x: 0, y, z: 0 }, this.tileWidth, this.tileHeight);
      const pEnd = toScreen({ x: sizeX, y, z: 0 }, this.tileWidth, this.tileHeight);
      this.graphics.lineBetween(
        this.gridCenterX + pStart.x,
        this.gridCenterY + pStart.y,
        this.gridCenterX + pEnd.x,
        this.gridCenterY + pEnd.y
      );
    }
  }

  /**
   * Desenha um cursor destacado no tile do grid sob o mouse
   */
  private drawTileCursor(gridX: number, gridY: number) {
    this.graphics.lineStyle(2, 0x63b3ed, 1.0);
    
    const p0 = toScreen({ x: gridX, y: gridY, z: 0 }, this.tileWidth, this.tileHeight);
    const p1 = toScreen({ x: gridX + 1, y: gridY, z: 0 }, this.tileWidth, this.tileHeight);
    const p2 = toScreen({ x: gridX + 1, y: gridY + 1, z: 0 }, this.tileWidth, this.tileHeight);
    const p3 = toScreen({ x: gridX, y: gridY + 1, z: 0 }, this.tileWidth, this.tileHeight);

    const cx = this.gridCenterX;
    const cy = this.gridCenterY;

    this.graphics.beginPath();
    this.graphics.moveTo(cx + p0.x, cy + p0.y);
    this.graphics.lineTo(cx + p1.x, cy + p1.y);
    this.graphics.lineTo(cx + p2.x, cy + p2.y);
    this.graphics.lineTo(cx + p3.x, cy + p3.y);
    this.graphics.closePath();
    this.graphics.strokePath();
  }

  /**
   * Desenha um prisma 3D isométrico com faces sombreadas (top, left, right)
   */
  private drawIsometricPrism(entity: TestEntity) {
    const cx = this.gridCenterX;
    const cy = this.gridCenterY;
    const tw = this.tileWidth;
    const th = this.tileHeight;

    // Escalar unidade lógica do grid para pixels de altura
    // Consideramos que 1 unidade Z lógica = th (32 pixels de altura visual)
    const zScale = th;

    const x = entity.x;
    const y = entity.y;
    const z = entity.z * zScale;
    const w = entity.width;
    const l = entity.length;
    const h = entity.height * zScale;

    // Projetar vértices inferiores (Z base)
    const p0 = toScreen({ x, y, z }, tw, th);
    const p2 = toScreen({ x: x + w, y: y + l, z }, tw, th);
    const p3 = toScreen({ x, y: y + l, z }, tw, th);

    // Projetar vértices superiores (Z + H)
    const t0 = toScreen({ x, y, z: z + h }, tw, th);
    const t1 = toScreen({ x: x + w, y, z: z + h }, tw, th);
    const t2 = toScreen({ x: x + w, y: y + l, z: z + h }, tw, th);
    const t3 = toScreen({ x, y: y + l, z: z + h }, tw, th);

    // Paleta de cor base
    const baseColor = entity.color;

    // Tons de sombreamento (faces esquerda, direita e topo superior)
    // Usamos cores em HSL/RGB aproximado multiplicando a cor base por fatores
    const colorTop = baseColor; // Cor plena
    const colorLeft = this.lightenColor(baseColor, -0.2);  // Sombra leve
    const colorRight = this.lightenColor(baseColor, -0.4); // Sombra profunda

    // 1. Face Esquerda (Lógica X) - Polígono p0 -> p3 -> t3 -> t0
    this.graphics.fillStyle(colorLeft, 1.0);
    this.graphics.beginPath();
    this.graphics.moveTo(cx + p0.x, cy + p0.y);
    this.graphics.lineTo(cx + p3.x, cy + p3.y);
    this.graphics.lineTo(cx + t3.x, cy + t3.y);
    this.graphics.lineTo(cx + t0.x, cy + t0.y);
    this.graphics.closePath();
    this.graphics.fillPath();

    // 2. Face Direita (Lógica Y) - Polígono p3 -> p2 -> t2 -> t3
    this.graphics.fillStyle(colorRight, 1.0);
    this.graphics.beginPath();
    this.graphics.moveTo(cx + p3.x, cy + p3.y);
    this.graphics.lineTo(cx + p2.x, cy + p2.y);
    this.graphics.lineTo(cx + t2.x, cy + t2.y);
    this.graphics.lineTo(cx + t3.x, cy + t3.y);
    this.graphics.closePath();
    this.graphics.fillPath();

    // 3. Face Superior (Topo) - Polígono t0 -> t1 -> t2 -> t3
    this.graphics.fillStyle(colorTop, 1.0);
    this.graphics.beginPath();
    this.graphics.moveTo(cx + t0.x, cy + t0.y);
    this.graphics.lineTo(cx + t1.x, cy + t1.y);
    this.graphics.lineTo(cx + t2.x, cy + t2.y);
    this.graphics.lineTo(cx + t3.x, cy + t3.y);
    this.graphics.closePath();
    this.graphics.fillPath();

    // Linhas de contorno pretas para realçar a forma geométrica do prisma
    this.graphics.lineStyle(1.5, 0x1a202c, 0.7);
    this.graphics.strokePoints([
      new Phaser.Math.Vector2(cx + t0.x, cy + t0.y),
      new Phaser.Math.Vector2(cx + t1.x, cy + t1.y),
      new Phaser.Math.Vector2(cx + t2.x, cy + t2.y),
      new Phaser.Math.Vector2(cx + t3.x, cy + t3.y)
    ], true);

    this.graphics.lineBetween(cx + p3.x, cy + p3.y, cx + t3.x, cy + t3.y);
    this.graphics.lineBetween(cx + p0.x, cy + p0.y, cx + t0.x, cy + t0.y);
    this.graphics.lineBetween(cx + p2.x, cy + p2.y, cx + t2.x, cy + t2.y);
  }

  /**
   * Função utilitária para clarear ou escurecer cores hexadecimais de forma simples.
   * factor: valor negativo escurece (-0.2 escurece 20%), positivo clareia (+0.2 clareia 20%)
   */
  private lightenColor(hex: number, factor: number): number {
    let r = (hex >> 16) & 0xff;
    let g = (hex >> 8) & 0xff;
    let b = hex & 0xff;

    if (factor < 0) {
      r = Math.max(0, Math.floor(r * (1 + factor)));
      g = Math.max(0, Math.floor(g * (1 + factor)));
      b = Math.max(0, Math.floor(b * (1 + factor)));
    } else {
      r = Math.min(255, Math.floor(r + (255 - r) * factor));
      g = Math.min(255, Math.floor(g + (255 - g) * factor));
      b = Math.min(255, Math.floor(b + (255 - b) * factor));
    }

    return (r << 16) + (g << 8) + b;
  }
}
