const TAX_SLABS = [
  { min: 0, max: 250000, rate: 0 },
  { min: 250001, max: 500000, rate: 0.05 },
  { min: 500001, max: 750000, rate: 0.1 },
  { min: 750001, max: 1000000, rate: 0.15 },
  { min: 1000001, max: 1250000, rate: 0.2 },
  { min: 1250001, max: 1500000, rate: 0.25 },
  { min: 1500001, max: Infinity, rate: 0.3 },
];

export default TAX_SLABS;
