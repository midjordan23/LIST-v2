// Accessories Page - Browse accessories

import { Header } from '@/components/header';

export default function AccessoriesPage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <Header title="Accessories" />

      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="bg-white p-6 rounded-lg border border-[#e5e5e5] mb-6">
          <h2 className="text-lg font-semibold text-[#171717] mb-5 tracking-tight">
            Accessories
          </h2>
          <p className="text-[#737373] text-[14px] mb-4">
            Explore essential accessories including filters, monitors, wireless video, follow focus systems, power solutions, and support gear.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button className="px-4 py-2 bg-[#171717] text-white border border-[#171717] rounded-md text-[13px] font-medium">
              All
            </button>
            <button className="px-4 py-2 bg-white text-[#171717] border border-[#e5e5e5] rounded-md text-[13px] font-medium hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-all">
              Filters
            </button>
            <button className="px-4 py-2 bg-white text-[#171717] border border-[#e5e5e5] rounded-md text-[13px] font-medium hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-all">
              Monitors
            </button>
            <button className="px-4 py-2 bg-white text-[#171717] border border-[#e5e5e5] rounded-md text-[13px] font-medium hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-all">
              Wireless Video
            </button>
            <button className="px-4 py-2 bg-white text-[#171717] border border-[#e5e5e5] rounded-md text-[13px] font-medium hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-all">
              Follow Focus
            </button>
            <button className="px-4 py-2 bg-white text-[#171717] border border-[#e5e5e5] rounded-md text-[13px] font-medium hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-all">
              Power
            </button>
            <button className="px-4 py-2 bg-white text-[#171717] border border-[#e5e5e5] rounded-md text-[13px] font-medium hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-all">
              Media
            </button>
            <button className="px-4 py-2 bg-white text-[#171717] border border-[#e5e5e5] rounded-md text-[13px] font-medium hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-all">
              Support
            </button>
          </div>
        </div>

        <h3 className="text-[14px] text-[#737373] mb-5 font-normal">
          Results <span className="text-[#171717] font-semibold">(0)</span>
        </h3>

        <div className="text-center py-16 text-[#a3a3a3] text-[14px]">
          Accessory data coming soon...
        </div>
      </div>
    </div>
  );
}
