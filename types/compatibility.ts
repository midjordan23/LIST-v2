// Compatibility type definitions

export type CompatibilityStatus = 'native' | 'adapter' | 'compatible' | 'universal' | 'incompatible' | 'unknown';

export interface LensCompatibilityResult {
  compatible: boolean;
  status: 'native' | 'adapter' | 'incompatible';
  message: string;
  adapter?: string;
}

export interface AccessoryCompatibilityResult {
  compatible: boolean | null;
  status: 'compatible' | 'universal' | 'incompatible' | 'unknown';
  message: string;
  reason?: string;
}

export interface PackageValidationResult {
  warnings: ValidationIssue[];
  errors: ValidationIssue[];
}

export interface ValidationIssue {
  itemId: string;
  itemName: string;
  message: string;
  type: 'lens' | 'accessory';
}

export interface CompatibilityMatrixEntry {
  camera_id: string;
  accessory_id: string;
  compatible: boolean;
  reason?: string;
}
