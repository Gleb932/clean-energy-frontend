export type EnergyMix = {
  date: string,
  entries: EnergyMixEntry[],
  cleanEnergy: number
};

export type EnergyMixEntry = {
  fuel: string;
  percentage: number;
}