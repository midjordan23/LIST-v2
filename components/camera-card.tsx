// Camera Card Component - Displays a single camera

import { Camera } from '@/types';

interface CameraCardProps {
  camera: Camera;
}

export function CameraCard({ camera }: CameraCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {camera.model}
          </h3>
          <p className="text-sm text-gray-600">{camera.brand}</p>
        </div>
        {camera.flags && camera.flags.length > 0 && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {camera.flags[0]}
          </span>
        )}
      </div>

      {/* Specs Grid */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Mount:</span>
          <span className="font-medium text-gray-900">{camera.native_mount}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Sensor:</span>
          <span className="font-medium text-gray-900">
            {camera.sensor_modes[0]?.crop_class || 'N/A'}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Power:</span>
          <span className="font-medium text-gray-900">{camera.power.mount}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Media:</span>
          <span className="font-medium text-gray-900 text-right">
            {camera.media_slots[0]}
          </span>
        </div>
      </div>

      {/* Sensor Modes */}
      {camera.sensor_modes.length > 0 && (
        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs font-medium text-gray-700 mb-2">Sensor Modes:</p>
          <div className="space-y-1">
            {camera.sensor_modes.slice(0, 2).map((mode, idx) => (
              <div key={idx} className="text-xs text-gray-600">
                • {mode.name}
              </div>
            ))}
            {camera.sensor_modes.length > 2 && (
              <div className="text-xs text-gray-500">
                +{camera.sensor_modes.length - 2} more
              </div>
            )}
          </div>
        </div>
      )}

      {/* Action Button */}
      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors">
        View Details
      </button>
    </div>
  );
}
