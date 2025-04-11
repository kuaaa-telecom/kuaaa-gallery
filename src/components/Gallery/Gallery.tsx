import styled from "@emotion/styled";
import { GalleryItem } from "../../types/galleryItem";
import GalleryImageLink from "./GalleryImageLink";

const GalleryGrid = styled.ul`
  display: grid;
  list-style: none;
  padding: 0;
  margin: 0;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  @media (max-width: 1920px) {
    grid-template-columns: repeat(4, 1fr); /* 240px - 480px */
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr); /* 180px - 320px */
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr); /* 0px - 270px */
  }
`;

interface GalleryProps {
  items: GalleryItem[];
}

const Gallery = ({ items }: GalleryProps) => {
  return (
    <GalleryGrid>
      {items.map((item) => (
        <GalleryImageLink item={item} key={item.id} />
      ))}
    </GalleryGrid>
  );
};

export default Gallery;
