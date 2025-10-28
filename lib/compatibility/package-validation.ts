// Package validation logic

import { Camera, PackageItem, PackageValidationResult, CompatibilityMatrixEntry } from '@/types';
import { checkLensCompatibility } from './lens-compatibility';
import { checkAccessoryCompatibility } from './accessory-compatibility';

export function validatePackage(
  packageItems: PackageItem[],
  compatibilityMatrix: CompatibilityMatrixEntry[] = []
): PackageValidationResult {
  const warnings: PackageValidationResult['warnings'] = [];
  const errors: PackageValidationResult['errors'] = [];

  // Find the camera in the package
  const cameraItem = packageItems.find((item) => item.itemType === 'camera');

  if (!cameraItem) {
    // No camera to validate against
    return { warnings, errors };
  }

  const camera = cameraItem.data as Camera;

  // Validate all lenses
  packageItems
    .filter((item) => item.itemType === 'lens')
    .forEach((item) => {
      const result = checkLensCompatibility(item.data as any, camera);

      if (result) {
        if (!result.compatible) {
          errors.push({
            itemId: item.id,
            itemName: (item.data as any).name || 'Unknown lens',
            message: result.message,
            type: 'lens',
          });
        } else if (result.status === 'adapter') {
          warnings.push({
            itemId: item.id,
            itemName: (item.data as any).name || 'Unknown lens',
            message: result.message,
            type: 'lens',
          });
        }
      }
    });

  // Validate all accessories
  packageItems
    .filter((item) => item.itemType === 'accessory')
    .forEach((item) => {
      const result = checkAccessoryCompatibility(
        item.data as any,
        camera,
        compatibilityMatrix
      );

      if (result) {
        if (result.compatible === false) {
          errors.push({
            itemId: item.id,
            itemName: (item.data as any).name || 'Unknown accessory',
            message: result.message,
            type: 'accessory',
          });
        } else if (result.status === 'unknown') {
          warnings.push({
            itemId: item.id,
            itemName: (item.data as any).name || 'Unknown accessory',
            message: result.message,
            type: 'accessory',
          });
        }
      }
    });

  return { warnings, errors };
}
