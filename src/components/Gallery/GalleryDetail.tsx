import styled from "@emotion/styled";
import {
  IconCalendar,
  IconEdit,
  IconMap,
  IconTelescope,
  IconUser,
} from "@tabler/icons-react";
import { galleryItems } from "../../consts/galleryItems";
import NotFound from "../NotFound";

const MainImage = styled.img`
  width: 100%;
  max-height: 100vmin;
  object-fit: contain;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageInfoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 64px 2em;
  color: white;
`;

const ImageTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`;

const ImageTitle = styled.div`
  font-weight: 700;
  font-size: 2em;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #636363;
  margin: 32px 0;
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const TagContainer = styled.div`
  font-weight: 300;
  font-size: 1em;
  color: #c6c6c6;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 1em;
  color: #c6c6c6;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  word-break: keep-all;
  line-height: 1.4em;
`;

const GalleryDetail = (props: { itemId: string }) => {
  const { itemId } = props;

  const item = galleryItems.find((item) => item.id === itemId);

  if (!item) {
    return <NotFound />;
  }

  return (
    <>
      <MainImage
        src={import.meta.env.VITE_CLOUDFLARE_R2_BUCKET_URL + item.image[0]}
      />
      <PageContainer>
        <ImageInfoContainer>
          <ImageTitleContainer>
            <ImageTitle>{item.title}</ImageTitle>{" "}
            <TagBox>
              {item.date && (
                <TagContainer>
                  <IconCalendar size={"1.2em"} />
                  {item.date.toLocaleDateString()}
                </TagContainer>
              )}
              {item.author && (
                <TagContainer>
                  <IconUser size={"1.2em"} /> {item.author}
                </TagContainer>
              )}
              {item.location && (
                <TagContainer>
                  <IconMap size={"1.2em"} /> {item.location}
                </TagContainer>
              )}
            </TagBox>
          </ImageTitleContainer>
          {(item.equipments || item.softwares) && (
            <>
              <Divider />
              <TagBox>
                {item.equipments &&
                  item.equipments.map((equipment) => (
                    <TagContainer key={equipment}>
                      <IconTelescope size={"1.2em"} /> {equipment}
                    </TagContainer>
                  ))}
                {item.softwares &&
                  item.softwares.map((software) => (
                    <TagContainer key={software}>
                      <IconEdit size={"1.2em"} /> {software}
                    </TagContainer>
                  ))}
              </TagBox>
            </>
          )}
          {item.description && (
            <>
              <Divider />
              <Description>{item.description}</Description>
            </>
          )}
        </ImageInfoContainer>
      </PageContainer>
    </>
  );
};

export default GalleryDetail;
