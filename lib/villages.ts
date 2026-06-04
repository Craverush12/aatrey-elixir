export interface HarvestVillage {
  name: string;
  district: string;
}

export const HARVEST_VILLAGES: HarvestVillage[] = [
  { name: 'Munsiyari',  district: 'Pithoragarh'   },
  { name: 'Chopta',     district: 'Rudraprayag'    },
  { name: 'Auli',       district: 'Chamoli'        },
  { name: 'Dayara',     district: 'Uttarkashi'     },
  { name: 'Kanatal',    district: 'Tehri Garhwal'  },
  { name: 'Binsar',     district: 'Almora'         },
];

export function assignVillage(bottleNumber: number): HarvestVillage {
  return HARVEST_VILLAGES[bottleNumber % HARVEST_VILLAGES.length];
}
