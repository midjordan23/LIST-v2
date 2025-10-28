// Package and Template type definitions

import { Camera } from './camera';
import { Lens } from './lens';
import { Accessory } from './accessory';

export type ItemType = 'camera' | 'lens' | 'accessory' | 'custom';

export interface Contact {
  id: string;
  name: string;
  role: string;
  email?: string;
  phone?: string;
}

export interface ProjectInfo {
  projectName?: string;
  pickupDate?: string;
  shootDate?: string;
  returnDate?: string;
  contacts: Contact[];
}

export interface PackageItem {
  id: string;
  itemType: ItemType;
  data: Camera | Lens | Accessory;
  quantity: number;
  notes?: string;
}

export interface EquipmentPackage {
  id?: string;
  userId?: string;
  projectInfo: ProjectInfo;
  items: PackageItem[];
  createdAt?: string;
  updatedAt?: string;
}

export type TemplateCategory = 'single-cam' | 'multi-cam' | 'lighting' | 'accessories' | 'other';

export interface Template {
  id: string;
  userId?: string;
  name: string;
  category: TemplateCategory;
  projectInfo?: ProjectInfo;
  items: PackageItem[];
  createdAt: string;
  updatedAt?: string;
  itemCount: number;
  isPublic?: boolean;
  isDefault?: boolean;
}
