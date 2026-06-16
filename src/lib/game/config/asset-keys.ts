export const GAME_ASSET_BASE_PATH = '/assets/unfallen/game';

export const GAME_ASSETS = {
  characters: {
    antonioRafael: {
      key: 'character:antonio-rafael',
      path: `${GAME_ASSET_BASE_PATH}/characters/antonio-rafael.png`,
    },
  },
  portraits: {
    luisa: {
      key: 'portrait:luisa',
      path: `${GAME_ASSET_BASE_PATH}/portraits/luisa.png`,
    },
  },
  ui: {
    health: {
      key: 'ui:health',
      path: `${GAME_ASSET_BASE_PATH}/ui/icon-health.png`,
    },
    stamina: {
      key: 'ui:stamina',
      path: `${GAME_ASSET_BASE_PATH}/ui/icon-stamina.png`,
    },
    battery: {
      key: 'ui:battery',
      path: `${GAME_ASSET_BASE_PATH}/ui/icon-battery.png`,
    },
    inventory: {
      key: 'ui:inventory',
      path: `${GAME_ASSET_BASE_PATH}/ui/icon-inventory.png`,
    },
    objective: {
      key: 'ui:objective',
      path: `${GAME_ASSET_BASE_PATH}/ui/icon-objective.png`,
    },
    weapon: {
      key: 'ui:weapon',
      path: `${GAME_ASSET_BASE_PATH}/ui/icon-weapon.png`,
    },
  },
  enemies: {
    infectedBusDriver: {
      key: 'enemy:infected-bus-driver',
      path: `${GAME_ASSET_BASE_PATH}/enemies/infectado-01-motorista-onibus.png`,
    },
    infectedStreetVendor: {
      key: 'enemy:infected-street-vendor',
      path: `${GAME_ASSET_BASE_PATH}/enemies/infectado-02-vendedora-rua.png`,
    },
    infectedTeacher: {
      key: 'enemy:infected-teacher',
      path: `${GAME_ASSET_BASE_PATH}/enemies/infectado-03-professora.png`,
    },
    infectedGym: {
      key: 'enemy:infected-gym',
      path: `${GAME_ASSET_BASE_PATH}/enemies/infectado-04-academia.png`,
    },
    infectedDelivery: {
      key: 'enemy:infected-delivery',
      path: `${GAME_ASSET_BASE_PATH}/enemies/infectado-05-entregador.png`,
    },
    infectedSecurity: {
      key: 'enemy:infected-security',
      path: `${GAME_ASSET_BASE_PATH}/enemies/infectado-06-seguranca.png`,
    },
    infectedUrbanSurvivor: {
      key: 'enemy:infected-urban-survivor',
      path: `${GAME_ASSET_BASE_PATH}/enemies/infectado-07-sobrevivente-urbano.png`,
    },
    infectedNurse: {
      key: 'enemy:infected-nurse',
      path: `${GAME_ASSET_BASE_PATH}/enemies/infectado-08-enfermeira.png`,
    },
    infectedMechanic: {
      key: 'enemy:infected-mechanic',
      path: `${GAME_ASSET_BASE_PATH}/enemies/infectado-09-mecanico.png`,
    },
    infectedFictionalPoliceman: {
      key: 'enemy:infected-fictional-policeman',
      path: `${GAME_ASSET_BASE_PATH}/enemies/infectado-10-policial-ficcional.png`,
    },
  },
  buildings: {
    policeBase: {
      key: 'building:police-base',
      path: `${GAME_ASSET_BASE_PATH}/buildings/composed/base-policial-composed.png`,
    },
    exteriorStreet: {
      key: 'building:exterior-street',
      path: `${GAME_ASSET_BASE_PATH}/buildings/composed/rua-externa-base-composed.png`,
    },
    abandonedMarket: {
      key: 'building:abandoned-market',
      path: `${GAME_ASSET_BASE_PATH}/buildings/composed/mercado-abandonado-composed.png`,
    },
    residencePath: {
      key: 'building:residence-path',
      path: `${GAME_ASSET_BASE_PATH}/buildings/composed/caminho-residencia-composed.png`,
    },
    rafaelHouse: {
      key: 'building:rafael-house',
      path: `${GAME_ASSET_BASE_PATH}/buildings/composed/casa-rafael-composed.png`,
    },
    schoolGate: {
      key: 'building:school-gate',
      path: `${GAME_ASSET_BASE_PATH}/buildings/composed/portao-escola-municipal-composed.png`,
    },
  },
  props: {
    urbanExtras: {
      key: 'props:urban-extras',
      path: `${GAME_ASSET_BASE_PATH}/props/props-urbanos-extras.png`,
    },
    brokenStreetPole: {
      key: 'props:broken-street-pole',
      path: `${GAME_ASSET_BASE_PATH}/props/cut/broken-street-pole.png`,
    },
    streetSign: {
      key: 'props:street-sign',
      path: `${GAME_ASSET_BASE_PATH}/props/cut/street-sign.png`,
    },
    barricade: {
      key: 'props:barricade',
      path: `${GAME_ASSET_BASE_PATH}/props/cut/barricade.png`,
    },
    trashBags: {
      key: 'props:trash-bags',
      path: `${GAME_ASSET_BASE_PATH}/props/cut/trash-bags.png`,
    },
    marketCrates: {
      key: 'props:market-crates',
      path: `${GAME_ASSET_BASE_PATH}/props/cut/market-crates.png`,
    },
    brokenWall: {
      key: 'props:broken-wall',
      path: `${GAME_ASSET_BASE_PATH}/props/cut/broken-wall.png`,
    },
    rainPuddle: {
      key: 'props:rain-puddle',
      path: `${GAME_ASSET_BASE_PATH}/props/cut/rain-puddle.png`,
    },
    bloodPuddle: {
      key: 'props:blood-puddle',
      path: `${GAME_ASSET_BASE_PATH}/props/cut/blood-puddle.png`,
    },
    brokenDoor: {
      key: 'props:broken-door',
      path: `${GAME_ASSET_BASE_PATH}/props/cut/broken-door.png`,
    },
    brokenWindow: {
      key: 'props:broken-window',
      path: `${GAME_ASSET_BASE_PATH}/props/cut/broken-window.png`,
    },
    dragMark: {
      key: 'props:drag-mark',
      path: `${GAME_ASSET_BASE_PATH}/props/cut/drag-mark.png`,
    },
  },
} as const;

export const PRELOAD_GAME_ASSETS = [
  ...Object.values(GAME_ASSETS.characters),
  ...Object.values(GAME_ASSETS.portraits),
  ...Object.values(GAME_ASSETS.ui),
  ...Object.values(GAME_ASSETS.enemies),
  ...Object.values(GAME_ASSETS.buildings),
  ...Object.values(GAME_ASSETS.props),
];
