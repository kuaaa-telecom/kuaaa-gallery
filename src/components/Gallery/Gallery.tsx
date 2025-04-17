import styled from "@emotion/styled";
import {
  IconArrowDown,
  IconArrowUp,
  IconChevronUp,
  IconDotsVertical,
  IconGridDots,
  IconLayoutGrid,
  IconMap,
  IconPhoto,
  IconTelescope,
  IconUser,
} from "@tabler/icons-react";
import { UseNavigateResult } from "@tanstack/react-router";
import _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import { GalleryItem, GalleryTagType } from "../../types/galleryItem";
import { normalizeQuery } from "../../utils/normalize";
import GalleryImageLink from "./GalleryImageLink";

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2em;
  color: white;
`;

const Space = styled.div<{ $width?: string; $height?: string }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

const SearchbarConatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
`;

const Searchbar = styled.input`
  height: auto;
  line-height: normal;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.8em 0.5em;
  background: #282828;
  border-bottom: 1px solid white;
  flex-grow: 1;
`;

const TagContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 540px) {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;

const TagArrowIcon = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;

  &:hover {
    background-color: #ffffff35;
  }
`;

const TagBox = styled.div<{ $selected?: boolean }>`
  padding: 8px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 1rem;
  gap: 4px;
  user-select: none;
  color: ${(props) => (props.$selected ? "white" : "#8f8f8f")};
  background-color: ${(props) => (props.$selected ? "#ffffff55" : "none")};
  word-break: keep-all;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) =>
      props.$selected ? "#ffffff55" : "#ffffff27"};
  }
`;

const GridIconContainer = styled.div`
  position: absolute;
  left: 2em;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;

  &:hover {
    background-color: #ffffff35;
  }
`;

const SortContainer = styled.div`
  position: absolute;
  right: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 300;
  gap: 8px;
  user-select: none;
`;

const SortIcon = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;

  &:hover {
    background-color: #ffffff35;
  }
`;

const GalleryGrid = styled.ul<{ $gridView: "small" | "large" }>`
  display: grid;
  list-style: none;
  padding: 0;
  margin: 0;
  grid-template-columns: ${(props) =>
    `repeat(auto-fill, minmax(${props.$gridView === "large" ? "480px" : "240px"}, 1fr))`};

  @media (max-width: 1920px) {
    grid-template-columns: ${(props) =>
      `repeat(${props.$gridView === "large" ? 4 : 6}, 1fr)`};
  }
  @media (max-width: 960px) {
    grid-template-columns: ${(props) =>
      `repeat(${props.$gridView === "large" ? 3 : 5}, 1fr)`};
  }
  @media (max-width: 540px) {
    grid-template-columns: ${(props) =>
      `repeat(${props.$gridView === "large" ? 2 : 4}, 1fr)`};
  }
`;

const NotFoundContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cacaca;
  font-size: 16px;
  font-weight: 300;
`;

interface GalleryProps {
  items: GalleryItem[];
  queryParam: string;
  navigate: UseNavigateResult<"/kuaaa-gallery">;
}

const Gallery = ({ items, queryParam, navigate }: GalleryProps) => {
  const [query, setQuery] = useState<string>(queryParam);

  const [sort, setSort] = useState<string>("desc");
  const [gridView, setGridView] = useState<"small" | "large">("large");

  const [sortedItems, setSortedItems] = useState<GalleryItem[]>(items);

  const [isTagExpaned, setIsTagExpaned] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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

  const tags = useMemo(() => {
    const ret: { type: GalleryTagType; label: string }[] = [];
    items.forEach((item) => {
      if (item.author) {
        ret.push({ type: "author", label: item.author });
      }
      ret.push(
        ...(item.equipments ?? []).map(
          (x): { type: GalleryTagType; label: string } => {
            return { type: "equipment", label: x };
          }
        )
      );
      ret.push(
        ...(item.softwares ?? []).map(
          (x): { type: GalleryTagType; label: string } => {
            return { type: "software", label: x };
          }
        )
      );
      if (item.location) {
        ret.push({ type: "location", label: item.location ?? "" });
      }
      ret.push({ type: "type", label: item.type });
    });
    return _.uniqBy(ret, "label").toSorted((a, b) =>
      `${a.type}$${a.label}`.localeCompare(`${b.type}$${b.label}`)
    );
  }, [items]);

  const isItemIncludesTags = (item: GalleryItem, tagsToFilter: string[]) =>
    tagsToFilter.includes(item.author ?? "") ||
    item.equipments?.some((x) => tagsToFilter.includes(x)) ||
    item.softwares?.some((x) => tagsToFilter.includes(x)) ||
    tagsToFilter.includes(item.location ?? "") ||
    tagsToFilter.includes(item.type ?? "");

  const filteredItems = useMemo(() => {
    const normalizedQuery = normalizeQuery(query);
    return items
      .filter((item) => {
        if (!normalizedQuery) return true;
        const queryIncludes =
          normalizeQuery(item.title).includes(normalizedQuery) ||
          normalizeQuery(item.author ?? "").includes(normalizedQuery) ||
          normalizeQuery(item.description ?? "").includes(normalizedQuery) ||
          item.equipments?.some((x) =>
            normalizeQuery(x).includes(normalizedQuery)
          ) ||
          item.softwares?.some((x) =>
            normalizeQuery(x).includes(normalizedQuery)
          ) ||
          item.location?.includes(normalizedQuery) ||
          item.type.includes(normalizedQuery);
        return queryIncludes;
      })
      .filter(
        (item) =>
          selectedTags.length === 0 || isItemIncludesTags(item, selectedTags)
      );
  }, [items, query, selectedTags]);

  useEffect(() => {
    const sortedAscending = filteredItems.toSorted(
      (a, b) => (a.date?.getTime() || 0) - (b.date?.getTime() || 0)
    );
    document.startViewTransition(() =>
      setSortedItems(
        sort === "asc" ? sortedAscending : sortedAscending.reverse()
      )
    );
  }, [filteredItems, sort]);

  const isTagSelected = (label: string) => selectedTags.includes(label);

  const countItemForTag = (label: string) =>
    items.filter((item) => isItemIncludesTags(item, [label])).length;

  const renderTag = (type: GalleryTagType) => {
    switch (type) {
      case "author":
        return <IconUser size={"1.2em"} />;
      case "equipment":
      case "software":
        return <IconTelescope size={"1.2em"} />;
      case "location":
        return <IconMap size={"1.2em"} />;
      case "type":
        return <IconPhoto size={"1.2em"} />;
      default:
        return null;
    }
  };

  return (
    <>
      <MainContainer>
        <Space $height="80px" />
        <SearchbarConatiner>
          <Searchbar
            type="text"
            placeholder="찾아보기"
            defaultValue={queryParam}
            onChange={(e) => throttledSetQuery(e.target.value)}
          />
          {isTagExpaned ? (
            <TagArrowIcon>
              <IconChevronUp size={24} onClick={() => setIsTagExpaned(false)} />
            </TagArrowIcon>
          ) : (
            <TagArrowIcon>
              <IconDotsVertical
                size={24}
                onClick={() => setIsTagExpaned(true)}
              />
            </TagArrowIcon>
          )}
        </SearchbarConatiner>
        <Space $height="48px" />
        {isTagExpaned && (
          <TagContainer>
            {tags.map((tag) => (
              <TagBox
                $selected={isTagSelected(tag.label)}
                onClick={() =>
                  setSelectedTags((prev) =>
                    prev.includes(tag.label)
                      ? prev.filter((t) => t !== tag.label)
                      : [...prev, tag.label]
                  )
                }
                key={tag.label}
              >
                {renderTag(tag.type)}
                {`${tag.label} (${countItemForTag(tag.label)})`}
              </TagBox>
            ))}
          </TagContainer>
        )}
        <Space $height="24px" />
        <GridIconContainer>
          {gridView === "large" ? (
            <IconGridDots
              onClick={() =>
                document.startViewTransition(() => setGridView("small"))
              }
            />
          ) : (
            <IconLayoutGrid
              onClick={() =>
                document.startViewTransition(() => setGridView("large"))
              }
            />
          )}
        </GridIconContainer>
        <SortContainer>
          {sort === "asc" ? (
            <SortIcon>
              <IconArrowUp size={24} onClick={() => setSort("desc")} />
            </SortIcon>
          ) : (
            <SortIcon>
              <IconArrowDown size={24} onClick={() => setSort("asc")} />
            </SortIcon>
          )}
          촬영일
        </SortContainer>
        <Space $height="80px" />
      </MainContainer>
      {sortedItems.length > 0 ? (
        <GalleryGrid
          $gridView={gridView}
          style={{ viewTransitionName: "gallery" }}
        >
          {sortedItems.map((item) => (
            <GalleryImageLink item={item} key={item.id} />
          ))}
          <style>{`
            .* {view-transition-name: left-board;}
          `}</style>
        </GalleryGrid>
      ) : (
        <>
          <Space $height="64px" />
          <NotFoundContainer>사진이 존재하지 않습니다.</NotFoundContainer>
        </>
      )}
    </>
  );
};

export default Gallery;
