
import { CPPClass } from './types';

export const ZURICH_COLORS = {
  primary: '#003399', // Zurich Blue
  secondary: '#00a9e0', // Light Blue
  accent: '#facc15', // Yellow
  neutral: '#64748b'
};

export const CAMPAIGN_DATES = {
  start: '2025-12-16',
  end: '2026-02-28'
};

export const BASE_RETURNS = {
  GS: 2.87, // Rendimento certificato Zurich Trend sett. 2025
  PRUDENTE: 1.5,
  MODERATA: 2.5,
  BILANCIATA: 4.0,
  DINAMICA: 6.0,
  CEDOLA: 3.0
};

export const COSTS_STRUCTURE = {
  EMISSION: 75,
  THRESHOLD_EMISSION: 20000,
  [CPPClass.A]: {
    lineaFirst5: 0.0295,
    lineaAfter5: 0.0215,
    gs: 0.0150
  },
  [CPPClass.B]: {
    linea: 0.0215,
    gs: 0.0110
  },
  [CPPClass.C]: {
    linea: 0.0170,
    gs: 0.0090
  }
};

export const PENALITIES = {
  [CPPClass.A]: [0.04, 0.035, 0.0275, 0.015, 0.01, 0],
  [CPPClass.B]: [0.025, 0.02, 0.015, 0.01, 0.005, 0],
  [CPPClass.C]: [0.02, 0.015, 0.01, 0.007, 0.005, 0]
};
