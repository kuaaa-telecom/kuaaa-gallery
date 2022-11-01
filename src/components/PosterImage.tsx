import styled from "@emotion/styled";
import poster1 from "../img/poster1.jpg";
import poster2 from "../img/poster2.jpg";
import poster3 from "../img/poster3.jpg";
import poster4 from "../img/poster4.jpg";

interface Props {
  posterIdx: number;
}

const posterImages = [poster1, poster2, poster3, poster4];

const PosterImageContainer = styled.div`
  width: 100%;
`;

const PosterImage: React.FC<Props> = (props) => {
  const { posterIdx } = props;
  return (
    <>
      <PosterImageContainer>
        <img
          alt={"poster" + posterIdx}
          src={posterImages[posterIdx]}
          style={{ width: "100%", display: "block" }}
        />
      </PosterImageContainer>
    </>
  );
};

export default PosterImage;
