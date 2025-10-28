// Lens type definitions

export type LensType = 'prime' | 'zoom';

export type LensMount = 'PL' | 'LPL' | 'E' | 'EF' | 'RF' | 'PV' | 'XPL';

export type LensCategory =
  | '16mm primes'
  | '16mm zooms'
  | '35mm primes'
  | '35mm zooms'
  | 'anamorphic'
  | 'full frame primes'
  | 'full frame zooms'
  | '65mm'
  | 'special';

export interface Lens {
  id?: string;
  name: string;
  manufacturer: string;
  focal_length: number | string; // number for primes, string for zooms (e.g., "24-70mm")
  max_aperture: number; // T-stop
  close_focus: string;
  image_circle: string;
  front_diameter: string;
  weight: string;
  length: string;
  mount: LensMount;
  iris_blades?: number;
  entrance_pupil?: string;
  magnification_ratio?: string;
  category?: LensCategory;
  type: LensType;
  notes?: string;
}

export interface LensWithCompatibility extends Lens {
  compatibilityStatus?: 'native' | 'adapter' | 'incompatible';
  compatibilityMessage?: string;
  requiredAdapter?: string;
}
