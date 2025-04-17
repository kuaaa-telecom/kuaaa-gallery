export type GalleryItemType = "딥스카이" | "점상" | "일주";

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
  type: GalleryItemType;
}

export type GalleryTagType =
  | "author"
  | "equipment"
  | "software"
  | "location"
  | "type";
