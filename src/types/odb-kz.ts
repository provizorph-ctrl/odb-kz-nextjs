export interface MenuItem {
  label: string;
  url: string;
  children?: MenuItem[];
  isActive?: boolean;
}

export interface StatisticItem {
  icon: string;
  number: string;
  title: string;
}

export interface NewsItem {
  id: string;
  image: string;
  date: string;
  title: string;
  description?: string;
  url: string;
  isFavorite?: boolean;
  category?: string;
}

export interface DepartmentItem {
  name: string;
  icon: string;
  url: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  nameEn?: string;
  nameKz?: string;
  isActive?: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  thumbnail: string;
  categoryId: string;
}

export interface GovProgram {
  id: string;
  image: string;
  title: string;
  titleEn?: string;
  titleKz?: string;
  url: string;
}

export interface QuickLink {
  id: string;
  icon: string;
  title: string;
  url: string;
  isWarning?: boolean;
}

export interface ContactInfo {
  label: string;
  value: string;
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SlideImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Director {
  name: string;
  position: string;
  image: string;
  blogUrl: string;
}

export interface UsefulLink {
  title: string;
  url: string;
  image: string;
}

export interface Symbol {
  title: string;
  description: string;
  image: string;
  url: string;
}
