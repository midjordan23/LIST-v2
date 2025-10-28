// All camera data from V1 (31 cameras)

import { Camera } from '@/types';

export const cameras: Camera[] = [
  {
    id: 'C-ARRI-A35',
    brand: 'ARRI',
    model: 'ALEXA 35',
    type: 'digital',
    native_mount: 'LPL',
    accepted_lens_mounts: ['PL'],
    sensor_modes: [
      { name: '4.6K 3:2 Open Gate', resolution: '4608x3164', diagonal_mm: 31.1, crop_class: 'S35' },
      { name: '4.6K 16:9 UHD', resolution: '4608x2592', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['Codex Compact Drive'],
    power: { mount: 'B-mount', voltage: '24V', typical_draw_w: 90 },
    video_io: ['12G-SDI x2', 'TC', 'Genlock'],
    flags: ['Netflix-4K']
  },
  {
    id: 'C-ARRI-MLF',
    brand: 'ARRI',
    model: 'ALEXA Mini LF',
    type: 'digital',
    native_mount: 'LPL',
    accepted_lens_mounts: ['PL'],
    sensor_modes: [
      { name: 'Open Gate LF', resolution: '4448x3096', diagonal_mm: 43.3, crop_class: 'FF/LF' },
      { name: 'LF 16:9 UHD', resolution: '3840x2160', diagonal_mm: 43.3, crop_class: 'FF/LF' },
      { name: 'S35 (LF crop)', resolution: 'approx 3.2K', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['Codex Compact Drive'],
    power: { mount: 'V-mount (plate)', voltage: '14/24V', typical_draw_w: 65 },
    video_io: ['12G-SDI', 'TC', 'Genlock'],
    flags: ['Netflix-4K']
  },
  {
    id: 'C-ARRI-LF',
    brand: 'ARRI',
    model: 'ALEXA LF',
    type: 'digital',
    native_mount: 'LPL',
    accepted_lens_mounts: ['PL'],
    sensor_modes: [
      { name: 'Open Gate LF', resolution: '4448x3096', diagonal_mm: 43.3, crop_class: 'FF/LF' },
      { name: 'LF 16:9', resolution: '3840x2160', diagonal_mm: 43.3, crop_class: 'FF/LF' },
      { name: 'S35 (LF crop)', resolution: 'approx 3.2K', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['Codex SXR Capture Drive'],
    power: { mount: 'V-mount (plate)', voltage: '14/24V', typical_draw_w: 120 },
    video_io: ['12G-SDI', 'TC', 'Genlock'],
    flags: ['Netflix-4K']
  },
  {
    id: 'C-ARRI-MINI',
    brand: 'ARRI',
    model: 'ALEXA Mini',
    type: 'digital',
    native_mount: 'PL',
    accepted_lens_mounts: [],
    sensor_modes: [
      { name: '3.4K S35', resolution: '3424x2202', diagonal_mm: 31.1, crop_class: 'S35' },
      { name: '2.8K S35', resolution: '2880x1620', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['CFast 2.0'],
    power: { mount: 'V-mount (plate)', voltage: '14V', typical_draw_w: 50 },
    video_io: ['3G/6G-SDI', 'TC', 'Genlock'],
    flags: []
  },
  {
    id: 'C-ARRI-SXT',
    brand: 'ARRI',
    model: 'ALEXA (Classic/XT/SXT)',
    type: 'digital',
    native_mount: 'PL',
    accepted_lens_mounts: [],
    sensor_modes: [
      { name: 'S35 3.2K', resolution: 'up to 3424x2202', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['SxS PRO/PRO+', 'Codex XR/SXR (XT/SXT)'],
    power: { mount: 'V-mount (plate)', voltage: '14V', typical_draw_w: 85 },
    video_io: ['3G-SDI', 'TC', 'Genlock'],
    flags: []
  },
  {
    id: 'C-ARRI-65',
    brand: 'ARRI',
    model: 'ALEXA 65',
    type: 'digital',
    native_mount: 'XPL',
    accepted_lens_mounts: [],
    sensor_modes: [
      { name: 'Open Gate 65', resolution: 'approx 6560-wide', diagonal_mm: 59.5, crop_class: '65mm' }
    ],
    media_slots: ['Codex SXR Capture Drive'],
    power: { mount: 'V-mount (plate)', voltage: '24V', typical_draw_w: 140 },
    video_io: ['12G-SDI', 'TC', 'Genlock'],
    flags: ['Rental-only']
  },
  {
    id: 'C-ARRI-AMIRA',
    brand: 'ARRI',
    model: 'AMIRA',
    type: 'digital',
    native_mount: 'PL',
    accepted_lens_mounts: [],
    sensor_modes: [
      { name: 'S35 HD/2K/4K (upsampled)', resolution: 'up to 3840x2160', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['CFast 2.0'],
    power: { mount: 'V-mount', voltage: '14V', typical_draw_w: 50 },
    video_io: ['3G-SDI', 'TC'],
    flags: ['Doc/ENG favorite']
  },
  {
    id: 'C-PANA-DXL2',
    brand: 'Panavision',
    model: 'Millennium DXL2',
    type: 'digital',
    native_mount: 'PV',
    accepted_lens_mounts: [],
    sensor_modes: [
      { name: '8K VV', resolution: '8192x4320', diagonal_mm: 43.3, crop_class: 'FF/LF' },
      { name: 'S35 crop', resolution: 'approx 5K', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['RED Mini-Mag'],
    power: { mount: 'V-mount (plate)', voltage: '14/24V', typical_draw_w: 90 },
    video_io: ['12G-SDI', 'TC', 'Genlock'],
    flags: ['Panavision-only']
  },
  {
    id: 'C-SONY-VENICE',
    brand: 'Sony',
    model: 'VENICE',
    type: 'digital',
    native_mount: 'PL',
    accepted_lens_mounts: ['E'],
    sensor_modes: [
      { name: '6K FF', resolution: '6048x4032', diagonal_mm: 43.3, crop_class: 'FF/LF' },
      { name: '4K/5.7K S35', resolution: 'approx 4096/5670 wide', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['AXS A-Series', 'SxS (XAVC)'],
    power: { mount: 'V-mount', voltage: '12/24V', typical_draw_w: 65 },
    video_io: ['12G-SDI', 'TC', 'Genlock'],
    flags: ['Netflix-4K', 'Rialto']
  },
  {
    id: 'C-SONY-VENICE2',
    brand: 'Sony',
    model: 'VENICE 2',
    type: 'digital',
    native_mount: 'PL',
    accepted_lens_mounts: ['E'],
    sensor_modes: [
      { name: '8.6K FF', resolution: '8640x5760', diagonal_mm: 43.3, crop_class: 'FF/LF' },
      { name: '6K FF / S35', resolution: '6008x3168 / S35 crop', diagonal_mm: 43.3, crop_class: 'FF/LF' },
      { name: 'S35', resolution: 'approx 4K/5.8K', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['AXS A-Series'],
    power: { mount: 'V-mount', voltage: '12/24V', typical_draw_w: 70 },
    video_io: ['12G-SDI', 'TC', 'Genlock'],
    flags: ['Netflix-8K']
  },
  {
    id: 'C-SONY-FX9',
    brand: 'Sony',
    model: 'PXW-FX9',
    type: 'digital',
    native_mount: 'E',
    accepted_lens_mounts: ['PL'],
    sensor_modes: [
      { name: '6K FF', resolution: '6048x3024', diagonal_mm: 43.3, crop_class: 'FF/LF' },
      { name: '4K S35', resolution: '3840x2160', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['SD UHS-II x2'],
    power: { mount: 'BP-U', voltage: '14.4V', typical_draw_w: 30 },
    video_io: ['12G-SDI', 'HDMI', 'TC'],
    flags: ['Doc/ENG popular']
  },
  {
    id: 'C-SONY-FS7',
    brand: 'Sony',
    model: 'PXW-FS7 Mark II',
    type: 'digital',
    native_mount: 'E',
    accepted_lens_mounts: ['PL'],
    sensor_modes: [
      { name: '4K S35', resolution: '3840x2160', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['SD UHS-II x2'],
    power: { mount: 'BP-U', voltage: '14.4V', typical_draw_w: 28 },
    video_io: ['3G-SDI', 'HDMI', 'TC'],
    flags: ['Doc/ENG workhorse']
  },
  {
    id: 'C-SONY-FX6',
    brand: 'Sony',
    model: 'FX6',
    type: 'digital',
    native_mount: 'E',
    accepted_lens_mounts: [],
    sensor_modes: [
      { name: '4K FF', resolution: '3840x2160', diagonal_mm: 43.3, crop_class: 'FF/LF' },
      { name: '4K S35 crop', resolution: '3840x2160', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['SD UHS-II x2', 'CFexpress Type A x2'],
    power: { mount: 'BP-U', voltage: '14.4V', typical_draw_w: 23 },
    video_io: ['12G-SDI', 'HDMI 2.1', 'TC'],
    flags: ['Compact Cinema']
  },
  {
    id: 'C-SONY-F55',
    brand: 'Sony',
    model: 'PMW-F55',
    type: 'digital',
    native_mount: 'FZ',
    accepted_lens_mounts: ['PL', 'E'],
    sensor_modes: [
      { name: '4K S35', resolution: '4096x2160', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['SxS PRO+'],
    power: { mount: 'V-mount', voltage: '14V', typical_draw_w: 60 },
    video_io: ['3G-SDI x4', 'HDMI', 'TC'],
    flags: []
  },
  {
    id: 'C-SONY-BURANO',
    brand: 'Sony',
    model: 'BURANO',
    type: 'digital',
    native_mount: 'PL',
    accepted_lens_mounts: ['E'],
    sensor_modes: [
      { name: '8.6K FF', resolution: '8640x4860', diagonal_mm: 43.3, crop_class: 'FF/LF' },
      { name: '4K S35', resolution: '4320x2430', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['CFexpress Type B x2'],
    power: { mount: 'V-mount', voltage: '12V', typical_draw_w: 55 },
    video_io: ['12G-SDI x2', 'HDMI 2.1', 'TC', 'Genlock'],
    flags: ['Netflix-4K']
  },
  {
    id: 'C-PANA-VC35',
    brand: 'Panasonic',
    model: 'VariCam 35',
    type: 'digital',
    native_mount: 'PL',
    accepted_lens_mounts: ['EF'],
    sensor_modes: [
      { name: '4K S35', resolution: '4096x2160', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['microP2'],
    power: { mount: 'V-mount', voltage: '14V', typical_draw_w: 85 },
    video_io: ['3G-SDI x4', 'HDMI', 'TC', 'Genlock'],
    flags: ['Dual Native ISO']
  },
  {
    id: 'C-PANA-VCLT',
    brand: 'Panasonic',
    model: 'VariCam LT',
    type: 'digital',
    native_mount: 'EF',
    accepted_lens_mounts: ['PL'],
    sensor_modes: [
      { name: '4K S35', resolution: '4096x2160', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['SD UHS-II x2'],
    power: { mount: 'V-mount', voltage: '14V', typical_draw_w: 55 },
    video_io: ['3G-SDI x2', 'HDMI', 'TC'],
    flags: ['Dual Native ISO']
  },
  {
    id: 'C-PANA-S1H',
    brand: 'Panasonic',
    model: 'Lumix DC-S1H',
    type: 'digital',
    native_mount: 'L',
    accepted_lens_mounts: [],
    sensor_modes: [
      { name: '6K FF', resolution: '5952x3968', diagonal_mm: 43.3, crop_class: 'FF/LF' },
      { name: '4K FF', resolution: '3840x2160', diagonal_mm: 43.3, crop_class: 'FF/LF' }
    ],
    media_slots: ['SD UHS-II x2'],
    power: { mount: 'DMW-BLJ31', voltage: '7.2V', typical_draw_w: 18 },
    video_io: ['HDMI 2.0', 'TC'],
    flags: ['Netflix-4K', 'Mirrorless']
  },
  {
    id: 'C-CANON-C300M2',
    brand: 'Canon',
    model: 'EOS C300 Mark II',
    type: 'digital',
    native_mount: 'EF',
    accepted_lens_mounts: ['PL'],
    sensor_modes: [
      { name: '4K S35', resolution: '3840x2160', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['CFast 2.0 x2'],
    power: { mount: 'BP-A', voltage: '14.4V', typical_draw_w: 32 },
    video_io: ['3G-SDI', 'HDMI', 'TC'],
    flags: []
  },
  {
    id: 'C-CANON-C300M3',
    brand: 'Canon',
    model: 'EOS C300 Mark III',
    type: 'digital',
    native_mount: 'EF',
    accepted_lens_mounts: ['PL', 'RF'],
    sensor_modes: [
      { name: '4K S35', resolution: '4096x2160', diagonal_mm: 31.1, crop_class: 'S35' },
      { name: '4K FF (2x crop)', resolution: '3840x2160', diagonal_mm: 43.3, crop_class: 'FF/LF' }
    ],
    media_slots: ['CFexpress'],
    power: { mount: 'BP-A', voltage: '14.4V', typical_draw_w: 35 },
    video_io: ['12G-SDI', 'HDMI 2.0', 'TC'],
    flags: ['Netflix-4K']
  },
  {
    id: 'C-CANON-C500M2',
    brand: 'Canon',
    model: 'EOS C500 Mark II',
    type: 'digital',
    native_mount: 'EF',
    accepted_lens_mounts: ['PL', 'RF'],
    sensor_modes: [
      { name: '5.9K FF', resolution: '5952x3140', diagonal_mm: 43.3, crop_class: 'FF/LF' },
      { name: '4K FF', resolution: '4096x2160', diagonal_mm: 43.3, crop_class: 'FF/LF' }
    ],
    media_slots: ['CFexpress'],
    power: { mount: 'V-mount', voltage: '14V', typical_draw_w: 45 },
    video_io: ['12G-SDI', 'HDMI 2.0', 'TC'],
    flags: ['Netflix-4K']
  },
  {
    id: 'C-CANON-C700FF',
    brand: 'Canon',
    model: 'EOS C700 FF',
    type: 'digital',
    native_mount: 'EF',
    accepted_lens_mounts: ['PL'],
    sensor_modes: [
      { name: '5.9K FF', resolution: '5952x3140', diagonal_mm: 43.3, crop_class: 'FF/LF' },
      { name: '4K S35 crop', resolution: '4096x2160', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['CFast 2.0', 'Codex'],
    power: { mount: 'V-mount', voltage: '14V', typical_draw_w: 75 },
    video_io: ['12G-SDI x2', 'HDMI', 'TC', 'Genlock'],
    flags: ['Netflix-4K']
  },
  {
    id: 'C-CANON-C70',
    brand: 'Canon',
    model: 'EOS C70',
    type: 'digital',
    native_mount: 'RF',
    accepted_lens_mounts: ['EF'],
    sensor_modes: [
      { name: '4K S35', resolution: '3840x2160', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['SD UHS-II x2'],
    power: { mount: 'BP-A', voltage: '14.4V', typical_draw_w: 24 },
    video_io: ['HDMI 2.0', 'TC'],
    flags: ['Compact Cinema', 'Netflix-4K']
  },
  {
    id: 'C-BMD-URSA46G2',
    brand: 'Blackmagic',
    model: 'URSA Mini Pro 4.6K G2',
    type: 'digital',
    native_mount: 'EF',
    accepted_lens_mounts: ['PL'],
    sensor_modes: [
      { name: '4.6K S35', resolution: '4608x2592', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['CFast 2.0 x2', 'SD UHS-II'],
    power: { mount: 'V-mount', voltage: '12V', typical_draw_w: 60 },
    video_io: ['12G-SDI', 'HDMI 2.0', 'TC'],
    flags: []
  },
  {
    id: 'C-BMD-URSA12K',
    brand: 'Blackmagic',
    model: 'URSA Mini Pro 12K',
    type: 'digital',
    native_mount: 'PL',
    accepted_lens_mounts: [],
    sensor_modes: [
      { name: '12K S35', resolution: '12288x6480', diagonal_mm: 31.1, crop_class: 'S35' },
      { name: '8K S35', resolution: '8192x4320', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['CFast 2.0 x2'],
    power: { mount: 'V-mount', voltage: '12V', typical_draw_w: 72 },
    video_io: ['12G-SDI', 'HDMI 2.0', 'TC'],
    flags: []
  },
  {
    id: 'C-BMD-P6K',
    brand: 'Blackmagic',
    model: 'Pocket Cinema Camera 6K',
    type: 'digital',
    native_mount: 'EF',
    accepted_lens_mounts: [],
    sensor_modes: [
      { name: '6K S35', resolution: '6144x3456', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['CFast 2.0', 'SD UHS-II'],
    power: { mount: 'LP-E6', voltage: '7.4V', typical_draw_w: 25 },
    video_io: ['HDMI 2.0'],
    flags: ['Compact Cinema']
  },
  {
    id: 'C-KINE-MAVO',
    brand: 'Kinefinity',
    model: 'MAVO Edge 8K',
    type: 'digital',
    native_mount: 'KineMOUNT',
    accepted_lens_mounts: ['PL', 'EF', 'E'],
    sensor_modes: [
      { name: '8K FF', resolution: '8192x4320', diagonal_mm: 43.3, crop_class: 'FF/LF' },
      { name: '6K S35', resolution: '6144x3240', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['Kinefinity SSD'],
    power: { mount: 'V-mount', voltage: '14V', typical_draw_w: 45 },
    video_io: ['12G-SDI', 'HDMI 2.0', 'TC'],
    flags: []
  },
  {
    id: 'C-ZCAM-E2F6',
    brand: 'Z CAM',
    model: 'E2-F6',
    type: 'digital',
    native_mount: 'EF',
    accepted_lens_mounts: ['PL'],
    sensor_modes: [
      { name: '6K FF', resolution: '6064x4040', diagonal_mm: 43.3, crop_class: 'FF/LF' }
    ],
    media_slots: ['CFast 2.0', 'SD UHS-II'],
    power: { mount: 'NP-F', voltage: '7.4V', typical_draw_w: 20 },
    video_io: ['HDMI 2.0', 'SDI'],
    flags: ['Box Camera']
  },
  {
    id: 'C-SONY-A7S3',
    brand: 'Sony',
    model: 'α7S III / FX3',
    type: 'digital',
    native_mount: 'E',
    accepted_lens_mounts: [],
    sensor_modes: [
      { name: '4K FF', resolution: '3840x2160', diagonal_mm: 43.3, crop_class: 'FF/LF' }
    ],
    media_slots: ['SD UHS-II x2', 'CFexpress Type A'],
    power: { mount: 'NP-FZ100', voltage: '7.2V', typical_draw_w: 15 },
    video_io: ['HDMI 2.1', 'TC'],
    flags: ['Mirrorless', 'Compact Cinema']
  },
  {
    id: 'C-DJI-R4D',
    brand: 'DJI',
    model: 'Ronin 4D',
    type: 'digital',
    native_mount: 'DL',
    accepted_lens_mounts: ['E'],
    sensor_modes: [
      { name: '6K FF', resolution: '6048x3240', diagonal_mm: 43.3, crop_class: 'FF/LF' }
    ],
    media_slots: ['ProSSD'],
    power: { mount: 'TB50', voltage: '14.8V', typical_draw_w: 45 },
    video_io: ['SDI', 'HDMI'],
    flags: ['Integrated Gimbal']
  },
  {
    id: 'C-DJI-I2',
    brand: 'DJI',
    model: 'Inspire 2 + Zenmuse X7',
    type: 'digital',
    native_mount: 'DL',
    accepted_lens_mounts: [],
    sensor_modes: [
      { name: '6K S35', resolution: '6016x3200', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['CineSSD'],
    power: { mount: 'TB50', voltage: '22.8V', typical_draw_w: 90 },
    video_io: ['DJI Lightbridge'],
    flags: ['Drone Camera']
  },
  {
    id: 'C-VRI-FLEX4K',
    brand: 'Vision Research',
    model: 'Phantom Flex4K',
    type: 'digital',
    native_mount: 'PL',
    accepted_lens_mounts: [],
    sensor_modes: [
      { name: '4K S35', resolution: '4096x2160', diagonal_mm: 31.1, crop_class: 'S35' }
    ],
    media_slots: ['Phantom CineMag'],
    power: { mount: '24V DC', voltage: '24V', typical_draw_w: 150 },
    video_io: ['3G-SDI', 'TC'],
    flags: ['High-Speed', 'Rental-only']
  },
  {
    id: 'C-ARRI-416PLUS',
    brand: 'ARRI',
    model: 'ARRIFLEX 416 Plus',
    type: 'film',
    native_mount: 'PL',
    accepted_lens_mounts: [],
    sensor_modes: [
      { name: 'Super 16mm Film', resolution: 'Film', diagonal_mm: 14.5, crop_class: 'S35' }
    ],
    media_slots: ['400ft Magazine'],
    power: { mount: 'Internal Battery', voltage: '12V', typical_draw_w: 12 },
    video_io: [],
    flags: ['Film Camera', '16mm']
  },
];
