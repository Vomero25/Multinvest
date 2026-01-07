
export enum CPPClass {
  A = 'CPP A',
  B = 'CPP B',
  C = 'CPP C'
}

export interface SimulationResult {
  year: number;
  totalValue: number;
  gsValue: number;
  lineaValue: number;
  bonusValue: number;
  costs: number;
}

export interface ProductCosts {
  emissionFee: number;
  managementFeeLinea: number;
  managementFeeGS: number;
}

export interface CampaignBonus {
  initial: number; // 1%
  year1GS: number; // 0.5%
  year2GS: number; // 1%
}
