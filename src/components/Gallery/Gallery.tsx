import styled from "@emotion/styled";
import { IconArrowDown, IconArrowUp } from "@tabler/icons-react";
import { UseNavigateResult } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { GalleryItem } from "../../types/galleryItem";
import GalleryImageLink from "./GalleryImageLink";

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2em;
`;

const Space = styled.div<{ $width?: string; $height?: string }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

const Searchbar = styled.input`
  width: 100%;
  height: auto;
  line-height: normal;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.8em 0.5em;
  background: #282828;
  color: white;
  border-bottom: 1px solid white;
`;

const SortContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 300;
  color: white;
  gap: 8px;
`;

const SortIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;

  &:hover {
    background-color: #ffffff35;
  }
`;

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
  queryParam: string;
  navigate: UseNavigateResult<"/kuaaa-gallery">;
}

const Gallery = ({ items, queryParam, navigate }: GalleryProps) => {
  const [query, setQuery] = useState<string>(queryParam);
  const [sortBy] = useState<string>("date");
  const [sort, setSort] = useState<string>("desc");

  const throttledSetQuery = useMemo(() => {
    let timeout: number;
    return (value: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setQuery(value), 200);
    };
  }, []);

  const throttledUpdateURL = useMemo(() => {
    let timeout: number;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (query) {
          navigate({
            search: { query },
          });
        } else {
          navigate({
            to: import.meta.env.BASE_URL,
            search: { query: "" },
          });
        }
      }, 200);
    };
  }, [navigate, query]);

  useEffect(() => {
    throttledUpdateURL();
  }, [query, throttledUpdateURL]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (!query) return true;
      const queryIncludes =
        item.title.includes(query) ||
        item.author?.includes(query) ||
        item.description?.includes(query) ||
        item.equipments?.some((x) => {
          if (x.includes(query)) return true;
        }) ||
        item.softwares?.some((x) => {
          if (x.includes(query)) return true;
        }) ||
        item.location?.includes(query);
      return queryIncludes;
    });
  }, [items, query]);

  const sortedItems = useMemo(() => {
    const sortedAscending = filteredItems.sort(
      (a, b) => (a.date?.getTime() || 0) - (b.date?.getTime() || 0)
    );
    return sort === "asc" ? sortedAscending : sortedAscending.reverse();
  }, [filteredItems, sort]);

  console.log(filteredItems);

  return (
    <>
      <MainContainer>
        <Space $height="80px" />
        <Searchbar
          type="text"
          placeholder="찾아보기"
          defaultValue={queryParam}
          onChange={(e) => throttledSetQuery(e.target.value)}
        />
        <Space $height="80px" />
        <SortContainer>
          {sort === "asc" ? (
            <SortIcon>
              <IconArrowUp size={16} onClick={() => setSort("desc")} />
            </SortIcon>
          ) : (
            <SortIcon>
              <IconArrowDown size={16} onClick={() => setSort("asc")} />
            </SortIcon>
          )}
          촬영일
        </SortContainer>
        <Space $height="80px" />
      </MainContainer>
      <GalleryGrid>
        {sortedItems.map((item) => (
          <GalleryImageLink item={item} key={item.id} />
        ))}
      </GalleryGrid>
    </>
  );
};

export default Gallery;
