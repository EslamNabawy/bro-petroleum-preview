export type VerificationState = 'verified-source' | 'to-verify' | 'observed';

export type RigSpec = {
  label: string;
  value: string;
  verification: VerificationState;
};

export type Rig = {
  slug: string;
  name: string;
  horsepower: 550 | 750;
  category: 'workover' | 'drilling';
  status: string;
  statusTone: 'ready' | 'operating' | 'stacked' | 'shipping' | 'verify';
  location: string;
  summary: string;
  specs: RigSpec[];
  sourceNote: string;
};

export const rigs: Rig[] = [
  {
    slug: 'bro-1',
    name: 'BRO-1',
    horsepower: 750,
    category: 'workover',
    status: 'Ready — Suez Free Zone',
    statusTone: 'ready',
    location: 'Attaqa, Suez Free Zone',
    summary: '750 HP mobile workover and drilling platform for desert and coastal assignments.',
    sourceNote: 'Observed in BRO website extraction; current availability requires BRO confirmation.',
    specs: [
      { label: 'Nominal depth', value: '4,500 m using 3½ in drill pipe', verification: 'observed' },
      { label: 'Manufacturer', value: 'Shandong Kerui Petroleum Equipment Co., Ltd.', verification: 'verified-source' },
      { label: 'Drawworks', value: 'JC 28/11, 750 HP rated', verification: 'to-verify' },
      { label: 'Mast / hook load', value: '38 m / 180 t', verification: 'observed' },
      { label: 'Mud system', value: '1 × RS-F1300 triplex pump', verification: 'verified-source' },
      { label: 'BOP', value: 'Shenkai 11 in, 5,000 psi', verification: 'observed' },
      { label: 'Substructure', value: 'DZ180/6-1, 5 m clear height', verification: 'observed' },
    ],
  },
  {
    slug: 'bro-2',
    name: 'BRO-2',
    horsepower: 550,
    category: 'drilling',
    status: 'Operating assignment — verify',
    statusTone: 'verify',
    location: 'EGPTCO assignment — verify current location',
    summary: '550 HP mobile drilling platform with a compact footprint for field operations.',
    sourceNote: 'Operating assignment and several equipment values are reported in source material but require BRO confirmation.',
    specs: [
      { label: 'Nominal depth', value: '5,800 m using 2⅞ in drill pipe', verification: 'observed' },
      { label: 'Manufacturer', value: 'Shandong Huiheng / Kerui', verification: 'to-verify' },
      { label: 'Drawworks', value: 'JC550S, 550 HP rated', verification: 'verified-source' },
      { label: 'Mast / hook load', value: '34 m / 135 t', verification: 'observed' },
      { label: 'Mud system', value: '1 × RS-F500 triplex pump', verification: 'observed' },
      { label: 'BOP', value: '11 in, 5,000 psi double ram and annular', verification: 'observed' },
      { label: 'Pipe-size note', value: 'Source records contain a 2⅞ in / 3½ in inconsistency; verify before publication.', verification: 'to-verify' },
    ],
  },
  {
    slug: 'bro-3',
    name: 'BRO-3',
    horsepower: 550,
    category: 'drilling',
    status: 'Stacked — Suez yard',
    statusTone: 'stacked',
    location: 'BRO Suez yard',
    summary: '550 HP platform maintained for reactivation and future drilling assignments.',
    sourceNote: 'Stacked status is observed in the supplied source material; current readiness requires BRO confirmation.',
    specs: [
      { label: 'Nominal depth', value: '5,800 m using 2⅞ in drill pipe', verification: 'observed' },
      { label: 'Manufacturer', value: 'Shandong Huiheng / Kerui', verification: 'verified-source' },
      { label: 'Drawworks', value: 'JC550S, 550 HP rated', verification: 'verified-source' },
      { label: 'Mast / hook load', value: '34 m / 135 t', verification: 'observed' },
      { label: 'CAT IV inspection', value: 'August 2024 reported; verify certificate record', verification: 'to-verify' },
      { label: 'Mud system', value: '1 × RS-F500 triplex pump', verification: 'observed' },
      { label: 'Well control', value: '11 in, 5,000 psi pressure tested', verification: 'observed' },
    ],
  },
  {
    slug: 'bro-4',
    name: 'BRO-4',
    horsepower: 750,
    category: 'workover',
    status: 'Shipping status — verify',
    statusTone: 'shipping',
    location: 'Reported under shipment to Suez; verify current position',
    summary: '750 HP heavy-duty newbuild platform intended for regional mobilization.',
    sourceNote: 'Built/shipping status is time-sensitive and must be confirmed before publication.',
    specs: [
      { label: 'Nominal depth', value: '4,500 m using 3½ in drill pipe', verification: 'observed' },
      { label: 'Manufacturer', value: 'Shandong Kerui Petroleum Equipment Co., Ltd.', verification: 'verified-source' },
      { label: 'Drawworks', value: '750 HP heavy-duty rated', verification: 'to-verify' },
      { label: 'Mast / hook load', value: '39 m / 180 t', verification: 'observed' },
      { label: 'Mud system', value: '2 × F500 triplex pumps', verification: 'observed' },
      { label: 'Carrier', value: 'Heavy-duty 10 × 10 all-wheel-drive chassis', verification: 'observed' },
      { label: 'Commissioning', value: 'Reported under shipment to Suez port; verify current status', verification: 'to-verify' },
    ],
  },
];

export const fleetStats = [
  { value: '2,600', unit: 'HP', label: 'Reported total fleet power' },
  { value: '04', unit: 'RIGS', label: 'Fleet records in source material' },
  { value: '30+', unit: 'YEARS', label: 'Reported management experience' },
  { value: 'MENA', unit: 'REGION', label: 'Egypt, Red Sea, and Basra focus' },
];

export function getRig(slug: string) {
  return rigs.find((rig) => rig.slug === slug);
}
