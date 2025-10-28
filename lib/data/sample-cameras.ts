// Sample camera data for development (from V1)

import { Camera } from '@/types';

export const sampleCameras: Camera[] = [
  {
    id: 'C-ARRI-A35',
    brand: 'ARRI',
    model: 'ALEXA 35',
    type: 'digital',
    native_mount: 'LPL',
    accepted_lens_mounts: ['PL'],
    sensor_modes: [
      {
        name: '4.6K 3:2 Open Gate',
        resolution: '4608x3164',
        diagonal_mm: 31.1,
        crop_class: 'S35',
      },
      {
        name: '4.6K 16:9 UHD',
        resolution: '4608x2592',
        diagonal_mm: 31.1,
        crop_class: 'S35',
      },
    ],
    media_slots: ['Codex Compact Drive'],
    power: {
      mount: 'B-mount',
      voltage: '24V',
      typical_draw_w: 90,
    },
    video_io: ['12G-SDI x2', 'TC', 'Genlock'],
    flags: ['Netflix-4K'],
    adapter_rules: [
      {
        from_mount: 'PL',
        allowed: true,
        notes: 'Native PL support via adapter',
      },
    ],
  },
  {
    id: 'C-ARRI-MLF',
    brand: 'ARRI',
    model: 'ALEXA Mini LF',
    type: 'digital',
    native_mount: 'LPL',
    accepted_lens_mounts: ['PL'],
    sensor_modes: [
      {
        name: 'Open Gate LF',
        resolution: '4448x3096',
        diagonal_mm: 43.3,
        crop_class: 'FF/LF',
      },
      {
        name: 'S35 (LF crop)',
        resolution: 'approx 3.2K',
        diagonal_mm: 31.1,
        crop_class: 'S35',
      },
    ],
    media_slots: ['Codex Compact Drive'],
    power: {
      mount: 'V-mount (plate)',
      voltage: '14/24V',
      typical_draw_w: 65,
    },
    video_io: ['12G-SDI', 'TC', 'Genlock'],
    flags: ['Netflix-4K'],
  },
  {
    id: 'C-SONY-VENICE',
    brand: 'Sony',
    model: 'VENICE',
    type: 'digital',
    native_mount: 'E',
    accepted_lens_mounts: ['PL'],
    sensor_modes: [
      {
        name: 'Full Frame 6K',
        resolution: '6048x4032',
        diagonal_mm: 43.3,
        crop_class: 'FF/LF',
      },
      {
        name: 'S35 4K',
        resolution: '4096x2160',
        diagonal_mm: 31.1,
        crop_class: 'S35',
      },
    ],
    media_slots: ['AXS Memory Card'],
    power: {
      mount: 'V-mount',
      voltage: '14V',
      typical_draw_w: 60,
    },
    video_io: ['12G-SDI x2', 'HDMI', 'TC'],
    flags: ['Netflix-4K'],
  },
  {
    id: 'C-RED-KOMODO',
    brand: 'RED',
    model: 'KOMODO 6K',
    type: 'digital',
    native_mount: 'RF',
    accepted_lens_mounts: ['PL', 'E'],
    sensor_modes: [
      {
        name: 'S35 6K',
        resolution: '6144x3240',
        diagonal_mm: 27.03,
        crop_class: 'S35',
      },
    ],
    media_slots: ['CFast 2.0'],
    power: {
      mount: 'V-mount',
      voltage: '12-24V',
      typical_draw_w: 45,
    },
    video_io: ['HDMI', 'USB-C'],
  },
  {
    id: 'C-CANON-C70',
    brand: 'Canon',
    model: 'EOS C70',
    type: 'digital',
    native_mount: 'RF',
    accepted_lens_mounts: ['EF'],
    sensor_modes: [
      {
        name: 'DGO S35 4K',
        resolution: '4096x2160',
        diagonal_mm: 26.2,
        crop_class: 'S35',
      },
    ],
    media_slots: ['CFexpress', 'SD UHS-II x2'],
    power: {
      mount: 'V-mount (plate)',
      voltage: '12V',
      typical_draw_w: 25,
    },
    video_io: ['HDMI', 'XLR Audio'],
  },
];
