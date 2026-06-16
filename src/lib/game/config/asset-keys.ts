export const GAME_ASSET_BASE_PATH = '/assets/unfallen/game';

export const GAME_ASSETS = {
  buildings: {
    policeBase: {
      key: 'building:police-base',
      path: `${GAME_ASSET_BASE_PATH}/buildings/base-policial.png`,
    },
    exteriorStreet: {
      key: 'building:exterior-street',
      path: `${GAME_ASSET_BASE_PATH}/buildings/rua-externa-base.png`,
    },
    abandonedMarket: {
      key: 'building:abandoned-market',
      path: `${GAME_ASSET_BASE_PATH}/buildings/mercado-abandonado.png`,
    },
    residencePath: {
      key: 'building:residence-path',
      path: `${GAME_ASSET_BASE_PATH}/buildings/caminho-residencia.png`,
    },
    rafaelHouse: {
      key: 'building:rafael-house',
      path: `${GAME_ASSET_BASE_PATH}/buildings/casa-rafael.png`,
    },
    schoolGate: {
      key: 'building:school-gate',
      path: `${GAME_ASSET_BASE_PATH}/buildings/portao-escola-municipal.png`,
    },
  },
  props: {
    urbanExtras: {
      key: 'props:urban-extras',
      path: `${GAME_ASSET_BASE_PATH}/props/props-urbanos-extras.png`,
    },
  },
} as const;

export const PRELOAD_GAME_ASSETS = [
  ...Object.values(GAME_ASSETS.buildings),
  ...Object.values(GAME_ASSETS.props),
];
