// Camera Card Component - Displays a single camera (V1 styling)

import { Camera } from '@/types';

interface CameraCardProps {
  camera: Camera;
}

export function CameraCard({ camera }: CameraCardProps) {
  return (
    <div className="bg-white border border-[#e5e5e5] rounded-lg p-5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-[#d4d4d4] transition-all cursor-pointer flex flex-col">
      {/* Header */}
      <div className="mb-4 pb-4 border-b border-[#f5f5f5]">
        <div className="text-[13px] text-[#737373] mb-1 font-medium">
          {camera.brand}
        </div>
        <h3 className="text-[16px] font-semibold text-[#171717] mb-0.5 tracking-tight">
          {camera.model}
        </h3>
        {camera.flags && camera.flags.length > 0 && (
          <div className="inline-block px-2 py-0.5 bg-[#f5f5f5] rounded text-[11px] font-semibold text-[#171717] mt-2">
            {camera.flags[0]}
          </div>
        )}
      </div>

      {/* Specs Grid */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-[13px]">
          <span className="text-[#737373]">Mount:</span>
          <span className="font-semibold text-[#171717]">{camera.native_mount}</span>
        </div>
        <div className="flex justify-between text-[13px]">
          <span className="text-[#737373]">Sensor:</span>
          <span className="font-semibold text-[#171717]">
            {camera.sensor_modes[0]?.crop_class || 'N/A'}
          </span>
        </div>
        <div className="flex justify-between text-[13px]">
          <span className="text-[#737373]">Power:</span>
          <span className="font-semibold text-[#171717]">{camera.power.mount}</span>
        </div>
        <div className="flex justify-between text-[13px]">
          <span className="text-[#737373]">Media:</span>
          <span className="font-semibold text-[#171717] text-right">
            {camera.media_slots[0]}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-auto pt-4">
        <button className="flex-1 px-3 py-2 text-[13px] rounded-md font-medium bg-[#171717] text-white border border-[#171717] hover:bg-[#262626] hover:border-[#262626] transition-all">
          Add to Package
        </button>
        <button className="flex-1 px-3 py-2 text-[13px] rounded-md font-medium bg-white text-[#171717] border border-[#e5e5e5] hover:border-[#d4d4d4] hover:bg-[#fafafa] transition-all">
          Compare
        </button>
      </div>
    </div>
  );
}
