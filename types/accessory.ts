// Accessory type definitions

export type AccessoryCategory =
  | 'Filter'
  | 'Matte Box'
  | 'Wireless Video'
  | 'Monitor'
  | 'Follow Focus'
  | 'Timecode'
  | 'Cable'
  | 'Power'
  | 'Media'
  | 'Support'
  | 'Rigging'
  | 'Carts'
  | 'Communication'
  | 'Film Equipment'
  | 'Custom';

export interface Accessory {
  id: string;
  name: string;
  brand?: string;
  category: AccessoryCategory;
  type?: string;
  specs?: Record<string, string | number>;
  compatible_with?: string[]; // Camera IDs or "universal"
  notes?: string;
  isCustom?: boolean;
}

export interface AccessoryWithCompatibility extends Accessory {
  compatibilityStatus?: 'compatible' | 'universal' | 'incompatible' | 'unknown';
  compatibilityMessage?: string;
  compatibilityReason?: string;
}
