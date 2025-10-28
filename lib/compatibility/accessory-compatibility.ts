// Accessory compatibility checking logic

import { Camera, Accessory, AccessoryCompatibilityResult, CompatibilityMatrixEntry } from '@/types';

export function checkAccessoryCompatibility(
  accessory: Accessory,
  camera: Camera,
  compatibilityMatrix: CompatibilityMatrixEntry[] = []
): AccessoryCompatibilityResult | null {
  if (!accessory || !camera) return null;

  // Check compatibility matrix first
  const match = compatibilityMatrix.find(
    (m) => m.camera_id === camera.id && m.accessory_id === accessory.id
  );

  if (match) {
    return {
      compatible: match.compatible,
      status: match.compatible ? 'compatible' : 'incompatible',
      message: match.compatible ? `✓ ${match.reason}` : `✗ ${match.reason}`,
      reason: match.reason,
    };
  }

  // Fallback: check category-based compatibility
  const category = accessory.category;

  // Universal accessories (always compatible)
  if (category === 'Cable' || category === 'Rigging') {
    return {
      compatible: true,
      status: 'universal',
      message: '✓ Universal accessory',
      reason: 'Universal compatibility',
    };
  }

  // Monitors - check SDI compatibility
  if (category === 'Monitor') {
    const cameraOutputs = camera.video_io || [];
    const monitorInputs = (accessory.specs?.inputs as string) || '';

    // Simple check: if camera has SDI and monitor accepts SDI
    const cameraHasSDI = cameraOutputs.some((o) => o.includes('SDI'));
    const monitorHasSDI = monitorInputs.includes('SDI');

    if (cameraHasSDI && monitorHasSDI) {
      return {
        compatible: true,
        status: 'compatible',
        message: '✓ SDI compatible',
        reason: 'SDI video output supported',
      };
    }
  }

  // Power - check mount compatibility
  if (category === 'Power') {
    const cameraPower = camera.power?.mount || '';
    const accessoryMount = (accessory.specs?.mount as string) || '';

    if (cameraPower && accessoryMount && cameraPower.includes(accessoryMount)) {
      return {
        compatible: true,
        status: 'compatible',
        message: '✓ Power mount compatible',
        reason: `${accessoryMount} power mount`,
      };
    }
  }

  // Unknown compatibility (not in matrix, not universal)
  return {
    compatible: null,
    status: 'unknown',
    message: '? Compatibility unknown',
    reason: 'Not verified for this camera',
  };
}

export function getCompatibleAccessories(
  camera: Camera,
  allAccessories: Accessory[],
  compatibilityMatrix: CompatibilityMatrixEntry[] = []
): Accessory[] {
  return allAccessories.filter((accessory) => {
    const result = checkAccessoryCompatibility(
      accessory,
      camera,
      compatibilityMatrix
    );
    return result && result.compatible !== false;
  });
}
