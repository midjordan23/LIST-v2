// Homepage - Landing page for SetKit V2

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            SetKit V2
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Cinema Equipment Database - Built with Next.js 15 + TypeScript
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/cameras"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Browse Cameras
            </Link>
            <Link
              href="/cameras"
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              View All Equipment
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl mb-4">🎥</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Professional Cameras
            </h3>
            <p className="text-gray-600">
              Browse 50+ cinema cameras with detailed specs, sensor modes, and compatibility info.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Smart Compatibility
            </h3>
            <p className="text-gray-600">
              Automatic validation ensures lenses and accessories work with your camera.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl mb-4">💾</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Save Templates
            </h3>
            <p className="text-gray-600">
              Build equipment lists and save them as templates for future projects.
            </p>
          </div>
        </div>

        {/* Tech Stack Banner */}
        <div className="mt-20 bg-blue-50 rounded-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Built with Modern Tech
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="font-semibold text-gray-900">Next.js 15</div>
              <div className="text-sm text-gray-600">Framework</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">TypeScript</div>
              <div className="text-sm text-gray-600">Type Safety</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Tailwind CSS</div>
              <div className="text-sm text-gray-600">Styling</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Supabase</div>
              <div className="text-sm text-gray-600">Database</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
