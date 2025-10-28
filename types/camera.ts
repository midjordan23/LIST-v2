// Camera type definitions

export interface SensorMode {
  name: string;
  resolution: string;
  diagonal_mm: number;
  crop_class: 'S35' | 'FF/LF' | '65mm';
}

export interface PowerSpec {
  mount: 'V-mount' | 'V-mount (plate)' | 'Gold-mount' | 'B-mount' | 'D-tap';
  voltage: string;
  typical_draw_w: number;
}

export interface AdapterRule {
  from_mount: string;
  allowed: boolean;
  notes?: string;
}

export interface Camera {
  id: string;
  brand: string;
  model: string;
  type: 'digital' | 'film' | 'hybrid';
  native_mount: 'PL' | 'LPL' | 'E' | 'EF' | 'RF' | 'PV' | 'XPL';
  accepted_lens_mounts: string[];
  sensor_modes: SensorMode[];
  media_slots: string[];
  power: PowerSpec;
  video_io: string[];
  flags?: string[];
  adapter_rules?: AdapterRule[];
  notes?: string;
  image_url?: string;
}

export interface CameraWithCompatibility extends Camera {
  compatibilityStatus?: 'native' | 'adapter' | 'incompatible';
  compatibilityMessage?: string;
}
