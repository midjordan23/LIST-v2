// Recommendations Page

import { Header } from '@/components/header';

export default function RecommendationsPage() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <Header title="Recommendations" />

      <div className="flex-1 overflow-y-auto px-8 py-6">
        <h2 className="text-2xl font-semibold text-[#171717] mb-2 tracking-tight">
          Get Lens Recommendations
        </h2>
        <p className="text-[#737373] text-[14px] mb-6">
          Tell us about your project and we&apos;ll suggest lenses that match your shooting style, format, and aesthetic preferences.
        </p>

        <div className="bg-white p-6 rounded-lg border border-[#e5e5e5] max-w-2xl">
          <div className="space-y-5">
            <div>
              <label className="block mb-2 text-[#171717] font-medium text-[14px]">
                What are you shooting?
              </label>
              <select className="w-full px-3 py-2 bg-white border border-[#e5e5e5] rounded-md text-[14px] text-[#171717]">
                <option value="">Select project type...</option>
                <option value="narrative">Narrative Feature</option>
                <option value="commercial">Commercial</option>
                <option value="documentary">Documentary</option>
                <option value="music-video">Music Video</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-[#171717] font-medium text-[14px]">
                Camera Format
              </label>
              <select className="w-full px-3 py-2 bg-white border border-[#e5e5e5] rounded-md text-[14px] text-[#171717]">
                <option value="">Select format...</option>
                <option value="S35">Super 35</option>
                <option value="FF">Full Frame</option>
                <option value="65mm">65mm / IMAX</option>
              </select>
            </div>

            <button className="w-full px-4 py-2 bg-[#171717] text-white border border-[#171717] rounded-md text-[14px] font-medium hover:bg-[#262626] transition-all">
              Get Recommendations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
