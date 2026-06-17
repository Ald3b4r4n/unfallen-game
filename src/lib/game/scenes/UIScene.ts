import Phaser from 'phaser';
import { eventBridge } from '../event-bridge';
import { GAME_ASSETS } from '../config/asset-keys';
import type { MissionFeedbackEvent, MissionFeedbackTone } from '../systems/mission-feedback';

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
const ICON_SIZE = 16;
const LABEL_X = MARGIN + ICON_SIZE + 8;
const PANEL_X = 8;
const PANEL_Y = 8;
const PANEL_WIDTH = 178;
const PANEL_HEIGHT = 132;
const TOAST_WIDTH = 360;
const TOAST_HEIGHT = 74;
const TOAST_DURATION_MS = 2800;

const TOAST_COLORS: Record<MissionFeedbackTone, number> = {
  objective: 0xfbbf24,
  clue: 0xa78bfa,
  checkpoint: 0x38bdf8,
  phase: 0x34d399,
};

export default class UIScene extends Phaser.Scene {
  private graphics!: Phaser.GameObjects.Graphics;
  private healthLabel!: Phaser.GameObjects.Text;
  private staminaLabel!: Phaser.GameObjects.Text;
  private batteryLabel!: Phaser.GameObjects.Text;
  private inventoryLabel!: Phaser.GameObjects.Text;
  private weaponLabel!: Phaser.GameObjects.Text;
  private controlsLabel!: Phaser.GameObjects.Text;
  private objectiveLabel!: Phaser.GameObjects.Text;
  private dialogBg!: Phaser.GameObjects.Rectangle;
  private dialogText!: Phaser.GameObjects.Text;
  private dialogTimer?: Phaser.Time.TimerEvent;
  private toastBg!: Phaser.GameObjects.Rectangle;
  private toastAccent!: Phaser.GameObjects.Rectangle;
  private toastTitle!: Phaser.GameObjects.Text;
  private toastMessage!: Phaser.GameObjects.Text;
  private toastTimer?: Phaser.Time.TimerEvent;
  private toastQueue: MissionFeedbackEvent[] = [];
  private toastActive = false;

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

    this.createHudIcon(MARGIN + ICON_SIZE / 2, y + 7, GAME_ASSETS.ui.health.key);
    this.healthLabel = this.add.text(LABEL_X, y, 'VIDA', textStyle);
    y += 16;

    // Espaço para a barra de vida
    y += BAR_HEIGHT + GAP;

    this.createHudIcon(MARGIN + ICON_SIZE / 2, y + 7, GAME_ASSETS.ui.stamina.key);
    this.staminaLabel = this.add.text(LABEL_X, y, 'ESTAMINA', textStyle);
    y += 16;
    y += BAR_HEIGHT + GAP;

    this.createHudIcon(MARGIN + ICON_SIZE / 2, y + 7, GAME_ASSETS.ui.battery.key);
    this.batteryLabel = this.add.text(LABEL_X, y, 'BATERIA', textStyle);
    y += 16;
    y += BAR_HEIGHT + GAP;

    this.createHudIcon(MARGIN + ICON_SIZE / 2, y + 6, GAME_ASSETS.ui.inventory.key);
    this.inventoryLabel = this.add.text(LABEL_X, y, 'INV: 0/12', textStyle);
    y += 18;

    this.createHudIcon(MARGIN + ICON_SIZE / 2, y + 6, GAME_ASSETS.ui.weapon.key);
    this.weaponLabel = this.add.text(LABEL_X, y, 'ARMA: ---', textStyle);
    y += 24;

    // Objetivo no canto superior direito
    this.createHudIcon(this.scale.width - MARGIN - 232, MARGIN + 14, GAME_ASSETS.ui.objective.key);
    this.objectiveLabel = this.add.text(this.scale.width - MARGIN, MARGIN, 'OBJETIVO ATUAL\nSaia da Base Policial e alcance a Rua Externa.', {
      fontFamily: 'monospace',
      fontSize: '12px',
      color: '#fbbf24', // Golden yellow
      backgroundColor: '#0f172acc', // Slate dark background
      align: 'right',
      wordWrap: { width: 286 },
      padding: { x: 10, y: 6 },
    }).setOrigin(1, 0);

    this.createToast();

    // Caixa de Diálogo (Rafael) na parte inferior central
    this.dialogBg = this.add.rectangle(this.scale.width / 2, this.scale.height - 82, this.scale.width - 100, 64, 0x0f172a, 0.85)
      .setStrokeStyle(1, 0x475569)
      .setOrigin(0.5)
      .setVisible(false);

    this.dialogText = this.add.text(this.scale.width / 2, this.scale.height - 82, '', {
      fontFamily: 'monospace',
      fontSize: '11px',
      color: '#f8fafc',
      align: 'center',
      wordWrap: { width: this.scale.width - 140 }
    }).setOrigin(0.5).setVisible(false);

    this.controlsLabel = this.add.text(MARGIN, this.scale.height - 30,
      'WASD=Mover  SPC=Dash  F=Lanterna  E=Coletar  Q=Atacar  ESC=Pausa', {
      fontFamily: 'monospace',
      fontSize: '10px',
      color: '#64748b',
    });

    eventBridge.on('hud:update', this.onHudUpdate, this);
    eventBridge.on('narrative:objective', this.onObjectiveUpdate, this);
    eventBridge.on('narrative:dialog', this.showDialog, this);
    eventBridge.on('narrative:toast', this.queueToast, this);
  }

  private onHudUpdate(state: HudState) {
    this.currentState = state;
  }

  private onObjectiveUpdate(data: { objective: string }) {
    if (this.objectiveLabel) {
      this.objectiveLabel.setText(`OBJETIVO ATUAL\n${data.objective}`);
    }
  }

  private createToast() {
    const width = Math.min(TOAST_WIDTH, this.scale.width - 48);
    const x = this.scale.width / 2;
    const y = MARGIN + 56;

    this.toastBg = this.add.rectangle(x, y, width, TOAST_HEIGHT, 0x020617, 0.92)
      .setStrokeStyle(1, 0x475569, 0.9)
      .setOrigin(0.5)
      .setDepth(80)
      .setVisible(false);

    this.toastAccent = this.add.rectangle(x - width / 2 + 4, y, 6, TOAST_HEIGHT - 12, 0xfbbf24, 1)
      .setOrigin(0.5)
      .setDepth(81)
      .setVisible(false);

    this.toastTitle = this.add.text(x - width / 2 + 18, y - 24, '', {
      fontFamily: 'monospace',
      fontSize: '12px',
      color: '#f8fafc',
      fontStyle: 'bold',
    }).setOrigin(0, 0.5).setDepth(82).setVisible(false);

    this.toastMessage = this.add.text(x - width / 2 + 18, y + 6, '', {
      fontFamily: 'monospace',
      fontSize: '11px',
      color: '#cbd5e1',
      wordWrap: { width: width - 38 },
    }).setOrigin(0, 0.5).setDepth(82).setVisible(false);
  }

  private queueToast(feedback: MissionFeedbackEvent) {
    this.toastQueue.push(feedback);

    if (!this.toastActive) {
      this.showNextToast();
    }
  }

  private showNextToast() {
    const feedback = this.toastQueue.shift();
    if (!feedback) {
      this.toastActive = false;
      return;
    }

    if (this.toastTimer) {
      this.toastTimer.remove();
    }

    this.toastActive = true;
    this.toastBg.setVisible(true);
    this.toastAccent
      .setFillStyle(TOAST_COLORS[feedback.tone], 1)
      .setVisible(true);
    this.toastTitle
      .setText(feedback.title)
      .setColor(`#${TOAST_COLORS[feedback.tone].toString(16).padStart(6, '0')}`)
      .setVisible(true);
    this.toastMessage
      .setText(feedback.message)
      .setVisible(true);

    this.toastTimer = this.time.delayedCall(TOAST_DURATION_MS, () => {
      this.toastBg.setVisible(false);
      this.toastAccent.setVisible(false);
      this.toastTitle.setVisible(false);
      this.toastMessage.setVisible(false);
      this.showNextToast();
    });
  }

  private showDialog(data: { text: string }) {
    if (!this.dialogBg || !this.dialogText) return;

    if (this.dialogTimer) {
      this.dialogTimer.remove();
    }

    this.dialogBg.setVisible(true);
    this.dialogText.setText(data.text).setVisible(true);

    this.dialogTimer = this.time.delayedCall(5000, () => {
      this.dialogBg.setVisible(false);
      this.dialogText.setVisible(false);
    });
  }

  update() {
    this.graphics.clear();

    const s = this.currentState;

    this.drawHudPanel();

    // Barra de Vida
    this.drawBar(LABEL_X, MARGIN + 16, s.health, s.maxHealth, 0xef4444, 0x7f1d1d);
    this.healthLabel.setText(`VIDA ${Math.ceil(s.health)}/${s.maxHealth}`);

    // Barra de Estamina
    const staminaY = MARGIN + 16 + BAR_HEIGHT + GAP;
    this.drawBar(LABEL_X, staminaY + 16, s.stamina, s.maxStamina, 0xeab308, 0x713f12);
    this.staminaLabel.setText(`ESTAMINA ${Math.ceil(s.stamina)}/${s.maxStamina}`);

    // Barra de Bateria
    const batteryY = staminaY + 16 + BAR_HEIGHT + GAP;
    const batteryColor = s.lanternActive ? 0x3b82f6 : 0x475569;
    this.drawBar(LABEL_X, batteryY + 16, s.battery, s.maxBattery, batteryColor, 0x1e293b);
    const lanternStatus = s.lanternActive ? ' [ON]' : ' [OFF]';
    this.batteryLabel.setText(`BATERIA ${Math.ceil(s.battery)}/${s.maxBattery}${lanternStatus}`);

    // Inventário e Arma
    this.inventoryLabel.setText(`INV: ${s.inventoryCount}/${s.inventoryMax}`);
    this.weaponLabel.setText(`ARMA: ${s.weapon.toUpperCase()}`);
  }

  private createHudIcon(x: number, y: number, key: string) {
    if (!this.textures.exists(key)) return;

    this.add.image(x, y, key)
      .setDisplaySize(ICON_SIZE, ICON_SIZE)
      .setOrigin(0.5);
  }

  private drawHudPanel() {
    this.graphics.fillStyle(0x020617, 0.66);
    this.graphics.fillRect(PANEL_X, PANEL_Y, PANEL_WIDTH, PANEL_HEIGHT);
    this.graphics.lineStyle(1, 0x334155, 0.7);
    this.graphics.strokeRect(PANEL_X, PANEL_Y, PANEL_WIDTH, PANEL_HEIGHT);
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
    eventBridge.off('narrative:objective', this.onObjectiveUpdate, this);
    eventBridge.off('narrative:dialog', this.showDialog, this);
    eventBridge.off('narrative:toast', this.queueToast, this);
  }
}
