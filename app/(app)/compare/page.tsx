// Compare Page

import { Header } from '@/components/header';

export default function ComparePage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <Header title="Compare" />

      <div className="flex-1 overflow-y-auto px-8 py-6">
        <h2 className="text-2xl font-semibold text-[#171717] mb-2 tracking-tight">
          Compare Lenses
        </h2>
        <p className="text-[#737373] text-[14px] mb-6">
          Compare specs side-by-side for up to three lenses. Make informed decisions about which glass best fits your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[1, 2, 3].map((num) => (
            <div key={num} className="bg-white p-5 rounded-lg border border-[#e5e5e5]">
              <label className="block mb-2.5 text-[#171717] font-medium text-[14px]">
                Lens {num}
              </label>
              <select className="w-full px-3 py-2 bg-white border border-[#e5e5e5] rounded-md text-[14px] text-[#171717]">
                <option value="">Select a lens...</option>
              </select>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg border border-[#e5e5e5]">
          <div className="text-center py-16 text-[#a3a3a3] text-[14px]">
            Select lenses above to compare their specifications
          </div>
        </div>
      </div>
    </div>
  );
}
