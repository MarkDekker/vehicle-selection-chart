export interface ListingSummary {
  classifiedGUID: string;
  price: number;
  mileage: number;
  registrationDate?: string;
  // equipmentCount: number;
  makeID: number;
  modelID: number;
  peCategory?: number;
  customerTypeID?: string;
  power?: number;
  bodyTypeID?: number;
  fuelID?: string;
  changedDate: string;
  bodyColorID?: number;
  RankingScores?: any;
}
