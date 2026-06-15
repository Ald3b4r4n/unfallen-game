import Phaser from 'phaser';
import { eventBridge } from '../event-bridge';

interface HudState {
  health: number;
  maxHealth: number;
  stamina: number;
  maxStamina: number;
  battery: number;
  maxBattery: number;
  lanternActive: boolean;
  inventoryCount: number;
  inventoryMax: number;
  weapon: string;
}

const BAR_WIDTH = 120;
const BAR_HEIGHT = 14;
const MARGIN = 16;
const GAP = 6;

export default class UIScene extends Phaser.Scene {
  private graphics!: Phaser.GameObjects.Graphics;
  private healthLabel!: Phaser.GameObjects.Text;
  private staminaLabel!: Phaser.GameObjects.Text;
  private batteryLabel!: Phaser.GameObjects.Text;
  private inventoryLabel!: Phaser.GameObjects.Text;
  private weaponLabel!: Phaser.GameObjects.Text;
  private controlsLabel!: Phaser.GameObjects.Text;
  private currentState: HudState = {
    health: 100, maxHealth: 100,
    stamina: 100, maxStamina: 100,
    battery: 100, maxBattery: 100,
    lanternActive: false,
    inventoryCount: 0, inventoryMax: 12,
    weapon: 'unarmed',
  };

  constructor() {
    super('UIScene');
  }

  create() {
    this.graphics = this.add.graphics();

    const textStyle = {
      fontFamily: 'monospace',
      fontSize: '11px',
      color: '#e2e8f0',
    };

    let y = MARGIN;

    this.healthLabel = this.add.text(MARGIN, y, 'VIDA', textStyle);
    y += 16;

    // Espaço para a barra de vida
    y += BAR_HEIGHT + GAP;

    this.staminaLabel = this.add.text(MARGIN, y, 'ESTAMINA', textStyle);
    y += 16;
    y += BAR_HEIGHT + GAP;

    this.batteryLabel = this.add.text(MARGIN, y, 'BATERIA', textStyle);
    y += 16;
    y += BAR_HEIGHT + GAP;

    this.inventoryLabel = this.add.text(MARGIN, y, 'INV: 0/12', textStyle);
    y += 18;

    this.weaponLabel = this.add.text(MARGIN, y, 'ARMA: ---', textStyle);
    y += 24;

    this.controlsLabel = this.add.text(MARGIN, this.scale.height - 30,
      'WASD=Mover  SPC=Dash  F=Lanterna  E=Coletar  Q=Atacar  ESC=Pausa', {
      fontFamily: 'monospace',
      fontSize: '10px',
      color: '#64748b',
    });

    eventBridge.on('hud:update', this.onHudUpdate, this);
  }

  private onHudUpdate(state: HudState) {
    this.currentState = state;
  }

  update() {
    this.graphics.clear();

    const s = this.currentState;

    // Barra de Vida
    this.drawBar(MARGIN, MARGIN + 16, s.health, s.maxHealth, 0xef4444, 0x7f1d1d);
    this.healthLabel.setText(`VIDA ${Math.ceil(s.health)}/${s.maxHealth}`);

    // Barra de Estamina
    const staminaY = MARGIN + 16 + BAR_HEIGHT + GAP;
    this.drawBar(MARGIN, staminaY + 16, s.stamina, s.maxStamina, 0xeab308, 0x713f12);
    this.staminaLabel.setText(`ESTAMINA ${Math.ceil(s.stamina)}/${s.maxStamina}`);

    // Barra de Bateria
    const batteryY = staminaY + 16 + BAR_HEIGHT + GAP;
    const batteryColor = s.lanternActive ? 0x3b82f6 : 0x475569;
    this.drawBar(MARGIN, batteryY + 16, s.battery, s.maxBattery, batteryColor, 0x1e293b);
    const lanternStatus = s.lanternActive ? ' [ON]' : ' [OFF]';
    this.batteryLabel.setText(`BATERIA ${Math.ceil(s.battery)}/${s.maxBattery}${lanternStatus}`);

    // Inventário e Arma
    this.inventoryLabel.setText(`INV: ${s.inventoryCount}/${s.inventoryMax}`);
    this.weaponLabel.setText(`ARMA: ${s.weapon.toUpperCase()}`);
  }

  private drawBar(x: number, y: number, current: number, max: number, fgColor: number, bgColor: number) {
    // Fundo
    this.graphics.fillStyle(bgColor, 0.8);
    this.graphics.fillRect(x, y, BAR_WIDTH, BAR_HEIGHT);

    // Preenchimento
    const ratio = Math.max(0, Math.min(1, current / max));
    this.graphics.fillStyle(fgColor, 1.0);
    this.graphics.fillRect(x, y, BAR_WIDTH * ratio, BAR_HEIGHT);

    // Borda
    this.graphics.lineStyle(1, 0x94a3b8, 0.6);
    this.graphics.strokeRect(x, y, BAR_WIDTH, BAR_HEIGHT);
  }

  shutdown() {
    eventBridge.off('hud:update', this.onHudUpdate, this);
  }
}
