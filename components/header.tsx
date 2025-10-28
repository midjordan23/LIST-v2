'use client';

export function Header({ title }: { title: string }) {
  return (
    <header className="bg-white border-b border-[#e5e5e5] px-8 py-6">
      <div className="flex items-center justify-between gap-6">
        <h1 className="text-2xl font-semibold text-[#171717] tracking-tight">
          {title}
        </h1>
        <div className="flex gap-2 flex-1 max-w-[500px]">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search cameras, lenses, accessories..."
              className="w-full px-4 py-2 bg-white border border-[#e5e5e5] rounded-md text-[14px] text-[#171717] transition-all focus:outline-none focus:border-[#171717] placeholder:text-[#a3a3a3]"
            />
          </div>
          <button className="px-5 py-2 bg-[#171717] text-white border border-[#171717] rounded-md text-[14px] font-medium hover:bg-[#262626] hover:border-[#262626] transition-all whitespace-nowrap">
            Search
          </button>
        </div>
      </div>
    </header>
  );
}
