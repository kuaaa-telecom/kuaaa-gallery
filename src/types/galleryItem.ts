export interface GalleryItem {
  id: string;
  title: string;
  thumbnail: string;
  image: string[];
  date: Date;
  author?: string;
  description?: string;
}
