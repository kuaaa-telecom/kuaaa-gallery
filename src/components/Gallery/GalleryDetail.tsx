import styled from "@emotion/styled";
import { IconCalendar, IconUser } from "@tabler/icons-react";
import { galleryItems } from "../../consts/galleryItems";
import NotFound from "../NotFound";

const MainImage = styled.img`
  width: 100%;
  height: calc(100vh - 96px);
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
`;

const GalleryDetail = (props: { itemId: string }) => {
  const { itemId } = props;

  const item = galleryItems.find((item) => item.id === itemId);

  if (!item) {
    return <NotFound />;
  }

  return (
    <>
      <MainImage src={item.image[0]} />
      <PageContainer>
        <ImageInfoContainer>
          <TagBox>
            <ImageTitle>{item.title}</ImageTitle>{" "}
            <TagContainer>
              <IconCalendar size={"1.2em"} /> {item.date.toLocaleDateString()}
            </TagContainer>
          </TagBox>
          <Divider />
          <TagBox>
            <TagContainer>
              <IconUser size={"1.2em"} /> {item.author}
            </TagContainer>
          </TagBox>
          <Divider />
          <Description>{item.description}</Description>
        </ImageInfoContainer>
      </PageContainer>
    </>
  );
};

export default GalleryDetail;
