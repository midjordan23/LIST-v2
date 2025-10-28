// Templates Page - Save and load equipment templates

import { Header } from '@/components/header';

export default function TemplatesPage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <Header title="Templates" />

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="bg-white p-6 rounded-lg border border-[#e5e5e5]">
          <p className="text-[#737373] text-[14px] mb-4">
            Save your equipment lists as templates for quick reuse. Perfect for recurring projects or standard setups.
          </p>

          {/* Template Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button className="px-4 py-2 bg-[#171717] text-white border border-[#171717] rounded-md text-[13px] font-medium">
              All
            </button>
            <button className="px-4 py-2 bg-white text-[#171717] border border-[#e5e5e5] rounded-md text-[13px] font-medium hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-all">
              Single Cam
            </button>
            <button className="px-4 py-2 bg-white text-[#171717] border border-[#e5e5e5] rounded-md text-[13px] font-medium hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-all">
              Multi-Cam
            </button>
            <button className="px-4 py-2 bg-white text-[#171717] border border-[#e5e5e5] rounded-md text-[13px] font-medium hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-all">
              Lighting
            </button>
            <button className="px-4 py-2 bg-white text-[#171717] border border-[#e5e5e5] rounded-md text-[13px] font-medium hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-all">
              Accessories
            </button>
            <button className="px-4 py-2 bg-white text-[#171717] border border-[#e5e5e5] rounded-md text-[13px] font-medium hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-all">
              Other
            </button>
          </div>

          {/* Empty State */}
          <div className="text-center py-16 text-[#a3a3a3] italic text-[14px]">
            No templates saved yet. Go to &quot;Your List&quot; and save your current package as a template.
          </div>
        </div>
      </div>
    </div>
  );
}
