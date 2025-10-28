// Lens compatibility checking logic

import { Camera, Lens, LensCompatibilityResult } from '@/types';

export function checkLensCompatibility(
  lens: Lens,
  camera: Camera
): LensCompatibilityResult | null {
  if (!lens || !camera) return null;

  const lensMount = lens.mount;
  const cameraMount = camera.native_mount;
  const acceptedMounts = camera.accepted_lens_mounts || [];

  // Native mount match
  if (lensMount === cameraMount) {
    return {
      compatible: true,
      status: 'native',
      message: `✓ Native ${lensMount} mount - direct compatibility`,
      adapter: undefined,
    };
  }

  // Check accepted mounts (with adapter)
  if (acceptedMounts.includes(lensMount)) {
    return {
      compatible: true,
      status: 'adapter',
      message: `⚠ Requires ${lensMount}→${cameraMount} adapter`,
      adapter: `${lensMount}→${cameraMount}`,
    };
  }

  // Check camera adapter rules
  const adapterRules = camera.adapter_rules || [];

  const rule = adapterRules.find(
    (r) => r.from_mount === lensMount
  );

  if (rule) {
    if (rule.allowed) {
      return {
        compatible: true,
        status: 'adapter',
        message: `⚠ ${rule.notes || 'Adapter required'}`,
        adapter: `${lensMount}→${cameraMount}`,
      };
    } else {
      return {
        compatible: false,
        status: 'incompatible',
        message: `✗ Incompatible: ${rule.notes || 'No adapter available'}`,
        adapter: undefined,
      };
    }
  }

  // No match found - incompatible
  return {
    compatible: false,
    status: 'incompatible',
    message: `✗ ${lensMount} lens incompatible with ${cameraMount} camera`,
    adapter: undefined,
  };
}

export function getCompatibleLenses(
  camera: Camera,
  allLenses: Lens[]
): Lens[] {
  return allLenses.filter((lens) => {
    const result = checkLensCompatibility(lens, camera);
    return result && result.compatible;
  });
}
