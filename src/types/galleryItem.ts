export interface GalleryItem {
  id: string;
  title: string;
  thumbnail: string;
  image: string[];
  date?: Date;
  author?: string;
  description?: string;
  equipments?: string[];
  softwares?: string[];
  location?: string;
}
