// Your List Page - Package Builder

import { Header } from '@/components/header';

export default function YourListPage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <Header title="Your List" />

      <div className="flex-1 overflow-y-auto px-8 py-6">
        <h2 className="text-2xl font-semibold text-[#171717] mb-2 tracking-tight">
          Your List
        </h2>
        <p className="text-[#737373] text-[14px] mb-6">
          Build your complete equipment package with project details, contacts, and dates. Export lists or save as templates for future use.
        </p>

        {/* Project Info Section */}
        <div className="bg-white p-6 rounded-lg border border-[#e5e5e5] mb-6">
          <h3 className="text-base font-semibold text-[#171717] mb-4">
            Project Information
          </h3>

          <div className="mb-5">
            <label className="block mb-2 text-[#171717] font-medium text-[14px]">
              Project Name
            </label>
            <input
              type="text"
              placeholder="e.g., Documentary - Mountain Climbing"
              className="w-full px-3.5 py-2.5 bg-white border border-[#e5e5e5] rounded-md text-[14px] text-[#171717] transition-all focus:outline-none focus:border-[#171717] placeholder:text-[#a3a3a3]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 text-[#171717] font-medium text-[14px]">
                Pick-Up Date
              </label>
              <input
                type="date"
                className="w-full px-3.5 py-2.5 bg-white border border-[#e5e5e5] rounded-md text-[14px] text-[#171717] transition-all focus:outline-none focus:border-[#171717]"
              />
            </div>
            <div>
              <label className="block mb-2 text-[#171717] font-medium text-[14px]">
                Shoot Date
              </label>
              <input
                type="date"
                className="w-full px-3.5 py-2.5 bg-white border border-[#e5e5e5] rounded-md text-[14px] text-[#171717] transition-all focus:outline-none focus:border-[#171717]"
              />
            </div>
            <div>
              <label className="block mb-2 text-[#171717] font-medium text-[14px]">
                Return Date
              </label>
              <input
                type="date"
                className="w-full px-3.5 py-2.5 bg-white border border-[#e5e5e5] rounded-md text-[14px] text-[#171717] transition-all focus:outline-none focus:border-[#171717]"
              />
            </div>
          </div>
        </div>

        {/* Equipment List */}
        <h3 className="text-base font-semibold text-[#171717] mb-4">
          Equipment List
        </h3>
        <div className="bg-white border border-[#e5e5e5] rounded-lg p-8 mb-6">
          <p className="text-center text-[#a3a3a3] italic text-[14px]">
            No items added yet. Search for cameras, lenses, and accessories, then click &quot;Add to Package&quot;
          </p>
        </div>

        {/* Summary */}
        <div className="bg-white p-5 rounded-lg border border-[#e5e5e5]">
          <div className="flex justify-between py-2.5 text-[15px] text-[#171717]">
            <span>Total Items:</span>
            <span className="font-bold">0</span>
          </div>
          <button className="w-full mt-2.5 px-4 py-2 bg-[#171717] text-white border border-[#171717] rounded-md text-[14px] font-medium hover:bg-[#262626] transition-all">
            Export List
          </button>
          <button className="w-full mt-2.5 px-4 py-2 bg-[#171717] text-white border border-[#171717] rounded-md text-[14px] font-medium hover:bg-[#262626] transition-all">
            Save as Template
          </button>
          <button className="w-full mt-2.5 px-4 py-2 bg-white text-[#171717] border border-[#e5e5e5] rounded-md text-[14px] font-medium hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-all">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
