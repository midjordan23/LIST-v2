// Cameras Page - Browse all cinema cameras

import { CameraCard } from '@/components/camera-card';
import { sampleCameras } from '@/lib/data/sample-cameras';

export default function CamerasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Cameras</h1>
          <p className="mt-2 text-gray-600">
            Browse our collection of professional cinema cameras. Filter by brand, mount, sensor size, and more to find your ideal camera body.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium text-gray-900">{sampleCameras.length}</span> cameras
          </p>
        </div>

        {/* Camera Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCameras.map((camera) => (
            <CameraCard key={camera.id} camera={camera} />
          ))}
        </div>
      </div>
    </div>
  );
}
