import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../../contexts/IntersectionObserverContext";
import { GalleryItem } from "../../types/galleryItem";

const GalleryItemContainer = styled.li`
  aspect-ratio: 1;
`;

const GalleryItemLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  &:hover,
  &:focus {
    & .gallery-image {
      transform: scale(1.1);
    }
    & .gallery-title {
      opacity: 1;
    }
    & .gallery-border {
      opacity: 1;
    }
  }
`;

const GalleryItemTitle = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.5em;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  opacity: 0;
  transition: opacity 0.2s;
`;

const GalleryItemHoverBorder = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 4px solid white;
  opacity: 0;
  transition: opacity 0.2s;
`;

const GalleryImageContainer = styled.span`
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition:
    opacity 0.8s,
    transform 0.2s;
`;

const GalleryItemTitleText = styled.span`
  font-size: 16px;
  word-break: keep-all;
`;

interface Props {
  item: GalleryItem;
}

const GalleryImageLink = ({ item }: Props) => {
  const { register, deregister } = useIntersectionObserver();
  const galleryItemRef = useRef<HTMLLIElement>(null);

  const [imageShown, setImageShown] = useState(false);

  useEffect(() => {
    if (!galleryItemRef.current) return;
    if (imageShown) return;
    register(galleryItemRef.current, (entry) => {
      if (entry.intersectionRatio > 0) {
        const image = new Image();
        image.onload = () => {
          setImageShown(true);
        };
        image.src =
          import.meta.env.VITE_CLOUDFLARE_R2_BUCKET_URL + item.thumbnail;
      }
    });
    return () => {
      deregister();
    };
  }, [deregister, imageShown, item.thumbnail, register]);

  return (
    <GalleryItemContainer ref={galleryItemRef}>
      <GalleryItemLink
        href={`${import.meta.env.BASE_URL}/${item.id.replace(/^\//, "").replace(/\/$/, "")}/`}
      >
        <GalleryImageContainer
          style={{
            ...(imageShown && {
              backgroundImage: `url(${import.meta.env.VITE_CLOUDFLARE_R2_BUCKET_URL}${item.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 1,
            }),
            // opacity, transform
            transitionDelay: `${Math.random() * 0.4}s, 0s`,
          }}
          className="gallery-image"
        />
        <GalleryItemTitle className="gallery-title">
          <GalleryItemTitleText>{item.title}</GalleryItemTitleText>
        </GalleryItemTitle>
        <GalleryItemHoverBorder className="gallery-border" />
      </GalleryItemLink>
    </GalleryItemContainer>
  );
};

export default GalleryImageLink;
