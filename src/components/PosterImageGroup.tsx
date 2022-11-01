import styled from "@emotion/styled";
import PosterImage from "./PosterImage";

const PosterGroupContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
`;

const PosterImageGroup: React.FC = () => {
  return (
    <>
      <PosterGroupContainer>
        {new Array(4).fill(undefined).map((_, i) => (
          <PosterImage posterIdx={i} />
        ))}
      </PosterGroupContainer>
    </>
  );
};

export default PosterImageGroup;
