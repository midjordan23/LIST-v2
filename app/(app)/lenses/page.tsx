// Lenses Page - Browse cinema lenses

import { Header } from '@/components/header';

export default function LensesPage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <Header title="Lenses" />

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        {/* Filters Section */}
        <div className="bg-white p-6 rounded-lg border border-[#e5e5e5] mb-6">
          <h2 className="text-lg font-semibold text-[#171717] mb-5 tracking-tight">
            Find Your Lens
          </h2>
          <p className="text-[#737373] text-[14px] mb-4">
            Search and filter through our comprehensive lens database. Find the perfect glass for your project by category, mount, aperture, and more.
          </p>

          {/* Filter Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            <div>
              <label className="block mb-2 text-[#171717] font-medium text-[14px]">
                Search
              </label>
              <input
                type="text"
                placeholder="Lens name, manufacturer..."
                className="w-full px-3 py-2 bg-white border border-[#e5e5e5] rounded-md text-[14px] text-[#171717] transition-all focus:outline-none focus:border-[#171717] placeholder:text-[#a3a3a3]"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#171717] font-medium text-[14px]">
                Category
              </label>
              <select className="w-full px-3 py-2 bg-white border border-[#e5e5e5] rounded-md text-[14px] text-[#171717] transition-all focus:outline-none focus:border-[#171717]">
                <option value="">All Categories</option>
                <option value="35mm primes">35mm Primes</option>
                <option value="35mm zooms">35mm Zooms</option>
                <option value="anamorphic">Anamorphic</option>
                <option value="full frame">Full Frame</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-[#171717] font-medium text-[14px]">
                Mount
              </label>
              <select className="w-full px-3 py-2 bg-white border border-[#e5e5e5] rounded-md text-[14px] text-[#171717] transition-all focus:outline-none focus:border-[#171717]">
                <option value="">All Mounts</option>
                <option value="PL">PL</option>
                <option value="LPL">LPL</option>
                <option value="EF">Canon EF</option>
                <option value="E">Sony E</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-[#171717] font-medium text-[14px]">
                Max Aperture
              </label>
              <select className="w-full px-3 py-2 bg-white border border-[#e5e5e5] rounded-md text-[14px] text-[#171717] transition-all focus:outline-none focus:border-[#171717]">
                <option value="">Any</option>
                <option value="1.3">T1.3 or faster</option>
                <option value="1.5">T1.5 or faster</option>
                <option value="2.0">T2.0 or faster</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2.5">
            <button className="px-4 py-2 bg-[#171717] text-white border border-[#171717] rounded-md text-[14px] font-medium hover:bg-[#262626] hover:border-[#262626] transition-all">
              Search Lenses
            </button>
            <button className="px-4 py-2 bg-white text-[#171717] border border-[#e5e5e5] rounded-md text-[14px] font-medium hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-all">
              Clear Filters
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1">
          <h3 className="text-[14px] text-[#737373] mb-5 font-normal">
            Results <span className="text-[#171717] font-semibold">(Loading...)</span>
          </h3>

          {/* Empty State - will be populated with lens data */}
          <div className="text-center py-16 text-[#a3a3a3] text-[14px]">
            Lens data coming soon... (1500+ lenses to import from V1)
          </div>
        </div>
      </div>
    </div>
  );
}
